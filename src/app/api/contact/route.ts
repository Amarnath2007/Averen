import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting map: ip -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // Periodic cleanup to prevent memory bloat
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((times, key) => {
      const valid = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, valid);
      }
    });
  }

  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. Basic spam protection: Rate limiting by client IP
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous-client';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from your connection. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const data = await request.json();
    const { name, email, service, message, honeypot } = data;

    // 2. Spam protection: Honeypot check (bots fill out hidden fields)
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn('[CONTACT API] Spam honeypot triggered by IP:', clientIp);
      // Return a 200 to trick the bot into thinking it succeeded
      return NextResponse.json({
        success: true,
        message: 'Inquiry received.',
      });
    }

    // 3. Server-side validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedService = typeof service === 'string' ? service.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide your full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must not exceed 100 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!trimmedService) {
      return NextResponse.json(
        { success: false, error: 'Please select a required service.' },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (at least 10 characters).' },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Project details must not exceed 5000 characters.' },
        { status: 400 }
      );
    }

    // 4. Check for Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey.trim() === '') {
      console.error('[CONTACT API] RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error:
            'The contact email service is currently awaiting configuration (RESEND_API_KEY missing). Please set the RESEND_API_KEY environment variable.',
        },
        { status: 503 }
      );
    }

    // 5. Configurable Recipient & Sender
    const toEmail = process.env.CONTACT_TO_EMAIL || 'averen.tech@gmail.com';
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || 'Averen Technologies <onboarding@resend.dev>';

    // Submission timestamp
    const now = new Date();
    const submissionDateIST = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Asia/Kolkata',
    }).format(now);
    const submissionDateUTC = now.toUTCString();

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeService = escapeHtml(trimmedService);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />');

    // 6. Professional HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Project Enquiry – Averen Technologies</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #061B34 0%, #092241 100%); padding: 36px 32px; text-align: left; border-bottom: 3px solid #00E5FF;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #00E5FF; margin-bottom: 6px;">
                      AVEREN TECHNOLOGIES
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.25;">
                      New Project Enquiry
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Intro -->
          <tr>
            <td style="padding: 28px 32px 16px 32px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #475569;">
                A new enquiry has been submitted through the Averen Technologies website contact form. Here are the project details:
              </p>
            </td>
          </tr>

          <!-- Enquiry Details Card -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                
                <!-- Client Name -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; width: 140px; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Customer Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0f172a;">
                    ${safeName}
                  </td>
                </tr>

                <!-- Client Email -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Customer Email
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <!-- Service Required -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Service Required
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px;">
                    <span style="display: inline-block; background-color: #061B34; color: #00E5FF; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 700; letter-spacing: 0.3px;">
                      ${safeService}
                    </span>
                  </td>
                </tr>

                <!-- Submission Time -->
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Submitted At
                  </td>
                  <td style="padding: 14px 18px; font-size: 13px; color: #334155; line-height: 1.5;">
                    <strong>${submissionDateIST}</strong><br />
                    <span style="color: #94a3b8; font-size: 12px;">(${submissionDateUTC})</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Project Description Section -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <div style="font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Project Description
              </div>
              <div style="background-color: #f8fafc; border-left: 4px solid #00B4D8; padding: 18px 20px; border-radius: 0 10px 10px 0; font-size: 14px; line-height: 1.7; color: #1e293b; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Quick Reply Action -->
          <tr>
            <td style="padding: 0 32px 36px 32px; text-align: center;">
              <a href="mailto:${safeEmail}?subject=Re:%20Averen%20Technologies%20Project%20Enquiry%20%E2%80%93%20${encodeURIComponent(
                trimmedService
              )}" style="display: inline-block; background-color: #00E5FF; color: #061B34; font-weight: 800; font-size: 14px; padding: 14px 32px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 12px rgba(0, 229, 255, 0.25);">
                Reply to ${safeName} &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer Note -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5;">
              This notification was generated automatically by the <strong style="color: #64748b;">Averen Technologies</strong> website contact form.
              <br />
              Recipient: <span style="color: #64748b;">${toEmail}</span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // Plain text version fallback
    const textContent = `
========================================
NEW PROJECT ENQUIRY – AVEREN TECHNOLOGIES
========================================

Customer Name: ${trimmedName}
Customer Email: ${trimmedEmail}
Selected Service: ${trimmedService}
Submitted At: ${submissionDateIST} (${submissionDateUTC})

----------------------------------------
PROJECT DESCRIPTION:
----------------------------------------
${trimmedMessage}

----------------------------------------
Reply directly to: ${trimmedEmail}
This email was sent via the Averen Technologies Contact Form.
========================================
    `.trim();

    // 7. Initialize Resend & Send Email
    const resend = new Resend(resendApiKey);

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: `New Project Enquiry – Averen Technologies (${trimmedName})`,
      html: htmlContent,
      text: textContent,
    });

    if (resendError) {
      console.error('[CONTACT API] Resend email dispatch failed:', resendError);

      let errorMessage =
        resendError.message ||
        'Failed to dispatch email enquiry via Resend. Please check sender domain and API key permissions.';

      if (errorMessage.includes('You can only send testing emails to your own email address')) {
        errorMessage =
          'To send directly to averen.tech@gmail.com, please either sign in to Resend with averen.tech@gmail.com to create the API key, or verify your custom domain at resend.com/domains.';
      }

      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
        },
        { status: 500 }
      );
    }

    console.log('[CONTACT API] Enquiry email successfully dispatched:', {
      id: resendData?.id,
      to: toEmail,
      from: fromEmail,
      clientName: trimmedName,
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been sent successfully. We will be in touch shortly.',
      id: resendData?.id,
    });
  } catch (error) {
    console.error('[CONTACT API] Unexpected server error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred while processing your enquiry.',
      },
      { status: 500 }
    );
  }
}

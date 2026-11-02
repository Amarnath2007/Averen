import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email and project details.' },
        { status: 400 }
      );
    }

    // Server-side email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In production, wire to Resend, SendGrid, or nodemailer.
    // For now, log the inquiry safely on the server
    console.log('[NEW INQUIRY RECEIVED]:', {
      name,
      email,
      service,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Our team will review your requirements.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to process inquiry at this moment.' },
      { status: 500 }
    );
  }
}


'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Mail, Phone, Loader2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const serviceOptions = [
  'Web Development',
  'Application Development',
  'MVP & Prototype Development',
  'Custom Software Solutions',
  'Creative & Digital Design',
  'Student & Innovation Offers',
  'Other Custom Scope',
];

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '', // Initially empty as requested
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Listen for service selection from other sections
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setForm((prev) => ({ ...prev, service: customEvent.detail }));
        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
      }
    };

    window.addEventListener('averen-select-service', handleServiceSelect);
    return () => window.removeEventListener('averen-select-service', handleServiceSelect);
  }, [errors.service]);

  const validate = () => {
    const errs: Partial<ContactFormData> = {};

    if (!form.name.trim()) {
      errs.name = 'Please enter your name';
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.service) {
      errs.service = 'Please select a service';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please provide brief project details (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions
    setServerError(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, honeypot }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setSubmitted(true);
      } else {
        setServerError(
          data?.error ||
            'Unable to process inquiry at this moment. Please email us directly at averen.tech@gmail.com'
        );
      }
    } catch {
      setServerError('Connection error. You can email us directly at averen.tech@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg relative scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Navy Rounded Container */}
        <div className="relative rounded-3xl lg:rounded-[36px] bg-gradient-to-br from-[#061B34] via-brand-navy to-[#031527] p-8 sm:p-12 lg:p-16 text-white shadow-pricing-dark overflow-hidden">
          {/* Subtle bottom-left cyan wave highlight */}
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-brand-teal/25 via-brand-aqua/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center z-10">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-teal uppercase">
                <span className="w-4 h-[2px] bg-brand-teal rounded-full" />
                CONTACT US
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.1]">
                Let&apos;s Build <br />
                Something <span className="text-brand-teal">Together.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-md">
                Have an idea or a <span className="font-semibold text-white">project</span> in mind? Tell us about it, and we&apos;ll get back to you soon.
              </p>

              {/* Direct Contact Links */}
              <div className="pt-2 space-y-3 text-sm sm:text-base text-slate-300">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-brand-teal/40 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-teal" />
                  </div>
                  <a
                    href="mailto:averen.tech@gmail.com"
                    className="text-white hover:text-brand-teal transition-colors font-medium hover:underline"
                  >
                    averen.tech@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-brand-teal/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-teal" />
                  </div>
                  <a
                    href="tel:+919003639824"
                    className="text-white hover:text-brand-teal transition-colors font-medium hover:underline"
                  >
                    +91 9003639824
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 h-4 text-[#25D366]"
                      aria-hidden="true"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/919003639824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] transition-colors font-medium hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Properly Aligned Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#092241]/80 border border-teal-500/40 rounded-3xl p-8 sm:p-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-brand-teal flex items-center justify-center text-brand-teal mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-teal">{form.name}</span>. Your enquiry for <span className="font-semibold text-white">{form.service}</span> has been registered. Our team will review your brief and reach out to <span className="font-mono text-white">{form.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', service: '', message: '' });
                      setHoneypot('');
                      setServerError(null);
                    }}
                    className="group btn-glass-dark inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal mt-3"
                  >
                    <span>Send another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Honeypot field for spam bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_hp">Leave this field blank</label>
                    <input
                      id="company_hp"
                      type="text"
                      name="company_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-sm text-red-200 flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors ${errors.name
                          ? 'border-red-400'
                          : 'border-slate-700/80 focus:border-brand-teal'
                          }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors ${errors.email
                          ? 'border-red-400'
                          : 'border-slate-700/80 focus:border-brand-teal'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown (Initially "Select a Service") */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                      Service Required *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => {
                        setForm({ ...form, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white focus:outline-none transition-colors ${errors.service
                        ? 'border-red-400'
                        : 'border-slate-700/80 focus:border-brand-teal'
                        }`}
                    >
                      <option value="" disabled className="bg-[#071B35] text-slate-400">
                        Select a Service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#071B35] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
                    )}
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your project requirements..."
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${errors.message
                        ? 'border-red-400'
                        : 'border-slate-700/80 focus:border-brand-teal'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Send Inquiry Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="group btn-glass-primary-teal w-full h-[54px] sm:h-[58px] rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#061B34] mt-3"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-brand-navy" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-5 h-5 text-brand-navy transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

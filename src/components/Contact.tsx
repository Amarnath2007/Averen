'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Mail } from 'lucide-react';

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
    setServerError(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setServerError(data.error || 'Unable to process inquiry. Please email us directly.');
      }
    } catch {
      setServerError('Connection error. You can email us directly at contact@averentechnologies.com');
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

              <div className="pt-3 flex items-center gap-2.5 text-sm text-slate-300 font-mono">
                <Mail className="w-4 h-4 text-brand-teal" />
                <a
                  href="mailto:contact@averentechnologies.com"
                  className="text-brand-teal hover:underline font-semibold"
                >
                  contact@averentechnologies.com
                </a>
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
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-sm text-slate-200 transition-colors mt-3"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
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
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.name
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
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white focus:outline-none transition-colors ${
                        errors.service
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#092241]/80 border text-base text-white placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
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
                    className="w-full h-[54px] sm:h-[58px] rounded-xl bg-brand-teal hover:bg-brand-aqua text-brand-navy font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all shadow-md shadow-brand-teal/20 cursor-pointer disabled:opacity-70 active:scale-[0.99] mt-3"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-5 h-5 text-brand-navy" />
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

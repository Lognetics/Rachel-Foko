'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: integrate with email/Formspree/Vercel form later
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl glass-strong p-12 text-center"
      >
        <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-gold-soft to-gold-deep grid place-items-center text-ink-950 mb-6 shadow-lg">
          <Check className="h-7 w-7" strokeWidth={3} />
        </div>
        <h3 className="font-display text-3xl mb-3">Thank you.</h3>
        <p className="text-[rgb(var(--muted))]">
          Your inquiry has been received. Rachel's team will respond within 2 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl glass-strong p-8 lg:p-12 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Your Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Organization" name="organization" />
        <Field label="Phone (optional)" name="phone" />
      </div>
      <Field label="Event Name" name="event" required />
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Date" name="date" type="date" />
        <Field label="Location" name="location" />
      </div>
      <Select label="Inquiry Type" name="type" options={[
        'Speaking Invitation', 'Partnership', 'Consulting', 'Media Interview', 'Collaboration', 'Other',
      ]} />
      <Textarea label="Tell us about your event or inquiry" name="message" required />

      <button
        type="submit"
        disabled={submitting}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-lavender-night via-ink-900 to-ink-950 shimmer hover:shadow-2xl hover:shadow-lavender-deep/40 disabled:opacity-50 transition-all"
      >
        {submitting ? 'Sending…' : 'Send Inquiry'}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))] block mb-2">{label}{required && ' *'}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-[rgb(var(--border))] focus:border-gold-warm py-2.5 outline-none transition-colors text-base placeholder:text-[rgb(var(--muted))]/60"
      />
    </label>
  );
}

function Textarea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))] block mb-2">{label}{required && ' *'}</span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full bg-transparent border border-[rgb(var(--border))] rounded-2xl focus:border-gold-warm p-4 outline-none transition-colors text-base resize-none"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))] block mb-2">{label}</span>
      <select
        name={name}
        className="w-full bg-transparent border-b border-[rgb(var(--border))] focus:border-gold-warm py-2.5 outline-none transition-colors text-base"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[rgb(var(--bg))]">{o}</option>
        ))}
      </select>
    </label>
  );
}

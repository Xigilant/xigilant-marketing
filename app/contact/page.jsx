'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HexShield from '@/components/HexShield'
import { Mail, Calendar, CheckCircle } from 'lucide-react'

const REASONS = [
  'Book a demo',
  'Pricing question',
  'SOC 2 / compliance help',
  'Partnership inquiry',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', reason: 'Book a demo', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at hello@xigilant.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <section className="bg-xi-bg py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Contact</span>
            <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-5">
              Let's talk about your cloud security.
            </h1>
            <p className="text-xi-t2 leading-relaxed mb-10">
              Whether you have a specific question or just want to see Xigilant live in your cloud environment, we're happy to help. No sales pressure — just an honest conversation.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-xi-accbg border border-xi-accbd flex items-center justify-center flex-shrink-0">
                  <Calendar size={16} className="text-xi-acc" />
                </div>
                <div>
                  <div className="font-semibold text-xi-t1 text-sm mb-1">Book a demo</div>
                  <p className="text-xs text-xi-t2 leading-relaxed">30-minute call. We show you what Xigilant would find in your environment — live. No slides, no pitch deck.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-xi-accbg border border-xi-accbd flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-xi-acc" />
                </div>
                <div>
                  <div className="font-semibold text-xi-t1 text-sm mb-1">Email us directly</div>
                  <a href="mailto:hello@xigilant.com" className="text-xs text-xi-acc hover:underline">hello@xigilant.com</a>
                </div>
              </div>
            </div>

            <div className="bg-xi-surf border border-xi-bd rounded-2xl p-5">
              <div className="text-xs font-semibold text-xi-t3 uppercase tracking-wider mb-4">What to expect</div>
              <ul className="flex flex-col gap-3">
                {[
                  'We respond within one business day',
                  'Demo is free, no commitment required',
                  'We\'ll tailor the call to your specific cloud setup',
                  'Pricing is transparent — no hidden fees',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-xi-t2">
                    <CheckCircle size={13} className="text-xi-acc mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-xi-surf border border-xi-bd rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-xi-accbg border-2 border-xi-accbd flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={26} className="text-xi-acc" />
                </div>
                <h2 className="font-serif font-bold text-xl text-xi-t1 mb-2">We'll be in touch soon.</h2>
                <p className="text-sm text-xi-t2">Thanks for reaching out. Expect a reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center gap-2 mb-2">
                  <HexShield size={20} variant="primary" />
                  <span className="font-semibold text-xi-t1 text-sm">Get in touch</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-xi-t2 mb-1.5 block">Full name *</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-xi-bd rounded-lg px-3 py-2.5 text-sm text-xi-t1 bg-xi-bg focus:outline-none focus:border-xi-acc transition-colors placeholder:text-xi-t3" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-xi-t2 mb-1.5 block">Work email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full border border-xi-bd rounded-lg px-3 py-2.5 text-sm text-xi-t1 bg-xi-bg focus:outline-none focus:border-xi-acc transition-colors placeholder:text-xi-t3" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-xi-t2 mb-1.5 block">Company</label>
                  <input name="company" value={form.company} onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full border border-xi-bd rounded-lg px-3 py-2.5 text-sm text-xi-t1 bg-xi-bg focus:outline-none focus:border-xi-acc transition-colors placeholder:text-xi-t3" />
                </div>

                <div>
                  <label className="text-xs font-semibold text-xi-t2 mb-1.5 block">How can we help?</label>
                  <select name="reason" value={form.reason} onChange={handleChange}
                    className="w-full border border-xi-bd rounded-lg px-3 py-2.5 text-sm text-xi-t1 bg-xi-bg focus:outline-none focus:border-xi-acc transition-colors">
                    {REASONS.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-xi-t2 mb-1.5 block">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your cloud setup, team size, or anything else that's useful…"
                    className="w-full border border-xi-bd rounded-lg px-3 py-2.5 text-sm text-xi-t1 bg-xi-bg focus:outline-none focus:border-xi-acc transition-colors placeholder:text-xi-t3 resize-none" />
                </div>

                {error && (
                  <p className="text-xs text-xi-crit bg-xi-critbg border border-xi-crit/20 rounded-lg px-3 py-2">{error}</p>
                )}

                <button type="submit" disabled={loading}
                  className="bg-xi-nav text-white font-semibold py-3 rounded-xl hover:bg-xi-nav/90 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send message'}
                </button>

                <p className="text-[11px] text-xi-t3 text-center">We respond within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

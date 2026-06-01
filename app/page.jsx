import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HexShield from '@/components/HexShield'
import { Shield, Eye, FileCheck, Zap, CheckCircle, ArrowRight, Lock, BarChart3, AlertTriangle, User, Clock } from 'lucide-react'

// ── Analyst flow data (reused in How it works section) ───────────────────────
const FINDING_FLOW = [
  {
    label: 'Detected',
    dot: '#DC2626',
    active: true,
    detail: (
      <div className="bg-xi-critbg border border-xi-crit/20 rounded-lg p-3 mt-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9px] font-bold text-xi-crit uppercase tracking-wide bg-xi-crit/10 rounded-full px-2 py-0.5">Critical</span>
          <span className="text-[9px] font-mono text-xi-t3">#XIG-0042</span>
        </div>
        <p className="text-[10px] font-semibold text-xi-t1 leading-snug mb-1.5">Root account accessed without MFA enabled</p>
        <div className="flex gap-1.5 flex-wrap">
          {['IAM', 'Global', 'root-account'].map(t => (
            <span key={t} className="text-[9px] font-mono text-xi-t3 bg-white border border-xi-bd rounded px-1.5 py-0.5">{t}</span>
          ))}
          <span className="text-[9px] text-xi-t3 font-mono ml-auto">2 min ago</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Analyst Validated',
    dot: '#B45309',
    active: false,
    detail: (
      <div className="bg-xi-highbg border border-xi-high/20 rounded-lg p-3 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-amber-200 flex items-center justify-center text-[8px] font-bold text-amber-800">AK</div>
            <span className="text-[10px] text-xi-t2">Alex K. — Senior Analyst</span>
          </div>
          <span className="text-[9px] font-semibold text-xi-high">Confirmed</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Root Cause Mapped',
    dot: '#3B82F6',
    active: false,
    detail: (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
        <p className="text-[10px] text-blue-800 leading-relaxed">
          Root access via cloud console without MFA challenge. No session token rotation detected. Full environment exposure risk.
        </p>
      </div>
    ),
  },
  {
    label: 'Remediation Ready',
    dot: '#15803D',
    active: false,
    detail: (
      <div className="mt-2 flex flex-col gap-2">
        <div className="bg-xi-accbg border border-xi-accbd rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-[9px] font-bold text-xi-t3 uppercase tracking-wide mb-0.5">Quick fix</div>
            <span className="text-[10px] text-xi-acc font-semibold">Enable MFA — 4 steps · ~5 min</span>
          </div>
          <span className="text-[9px] font-semibold text-xi-nav bg-xi-accl rounded-full px-2.5 py-1">View →</span>
        </div>
        <div className="bg-xi-nav border border-xi-nav rounded-lg p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[9px] font-bold text-xi-accl uppercase tracking-wide">★ SA Recommended</span>
          </div>
          <p className="text-[10px] text-white/80 leading-relaxed">
            Implement Centralized Root Access via AWS Organizations — disables root logins org-wide, eliminating this finding class permanently and fixing <span className="text-xi-accl font-semibold">300+ similar findings</span> across all accounts.
          </p>
        </div>
      </div>
    ),
  },
]

// ── Hero mockup: original posture screen ─────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 bg-xi-accl/10 rounded-3xl blur-3xl scale-110" />
      <div className="relative bg-xi-surf border border-xi-bd rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-xi-nav px-5 py-3 flex items-center gap-2">
          <HexShield size={18} variant="ghost" />
          <span className="text-white/80 text-xs font-mono">Your Company — Security Posture</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-xi-accl animate-pulse" />
            <span className="text-xi-accl text-[10px] font-mono">Live</span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-5 mb-5">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#E8E5DC" strokeWidth="7" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="#15803D" strokeWidth="7"
                  strokeDasharray={`${2 * Math.PI * 32 * 0.82} ${2 * Math.PI * 32}`}
                  strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold font-mono text-xi-med leading-none">82</span>
                <span className="text-[9px] text-xi-t3">/ 100</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {[
                { v: 0, l: 'Critical', c: 'text-xi-crit' },
                { v: 2, l: 'High',     c: 'text-xi-high' },
                { v: 5, l: 'Medium',   c: 'text-xi-med'  },
                { v: 9, l: 'Fixed',    c: 'text-xi-acc'  },
              ].map(s => (
                <div key={s.l} className="bg-xi-bg2 rounded-lg p-2.5">
                  <div className={`text-base font-bold font-mono leading-none ${s.c}`}>{s.v}</div>
                  <div className="text-[9px] text-xi-t3 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { name: 'SOC 2',   score: 81, color: '#3B82F6' },
              { name: 'PCI-DSS', score: 65, color: '#B45309' },
              { name: 'CIS AWS', score: 72, color: '#15803D' },
            ].map(f => (
              <div key={f.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-semibold text-xi-t2">{f.name}</span>
                  <span className="text-[10px] font-mono text-xi-t3">{f.score}%</span>
                </div>
                <div className="h-1.5 bg-xi-bd rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${f.score}%`, background: f.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 bg-xi-critbg border border-xi-crit/20 rounded-lg px-3 py-2">
            <AlertTriangle size={11} className="text-xi-crit flex-shrink-0" />
            <span className="text-[10px] text-xi-crit font-medium">Storage bucket publicly accessible — <span className="underline cursor-pointer">How to fix →</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

const TOOLS = [
  { icon: Shield,    name: 'Threat Detection',      desc: 'Real-time monitoring for credential abuse, unusual access patterns, and active threats across your cloud environment.' },
  { icon: Eye,       name: 'Security Posture',      desc: 'Centralised finding aggregation and risk scoring across all your cloud services, accounts, and regions in one view.' },
  { icon: BarChart3, name: 'Vulnerability Triage',   desc: 'Continuously scan and prioritise vulnerabilities across compute instances, containers, and serverless functions — so you fix what matters most, not just what\'s newest.' },
  { icon: FileCheck, name: 'Compliance Checks',     desc: '400+ framework-specific checks across SOC 2, PCI-DSS, HIPAA, CIS, and NIST — every finding mapped to a specific control ID.' },
]

const STEPS = [
  { n: '01', title: 'Connect your cloud account',   desc: 'Grant Xigilant read-only access via a scoped role. No agents, no code changes, live in minutes.' },
  { n: '02', title: 'We activate and monitor',      desc: 'Xigilant enables native security tools combined with built-in compliance checks — and our analysts begin monitoring your environment immediately.' },
  { n: '03', title: 'Triaged findings, root cause included', desc: 'You don\'t just get alerts — every finding is triaged by severity, mapped to its root cause, and paired with plain-English remediation steps to fix the underlying issue permanently.' },
]

const TIERS = [
  {
    name: 'Posture', price: '$1,500', highlight: false, cta: 'Get started',
    desc: 'Cloud security monitoring with self-service reporting. Detect threats and track posture without the managed layer.',
    features: ['Threat detection + finding aggregation', 'Weekly Xigilant Posture Checks', 'Vulnerability triage', 'Monthly posture report', '1 cloud account'],
  },
  {
    name: 'Compliance', price: '$3,500', highlight: true, cta: 'Get started',
    desc: 'Managed security with daily posture checks, compliance scorecards, and analyst-led triage during business hours.',
    features: ['Everything in Posture', 'Daily Xigilant Posture Checks', 'SOC 2 · PCI-DSS · CIS · HIPAA scorecards', 'Managed Security — business hours', 'Up to 3 cloud accounts'],
  },
  {
    name: 'Managed', price: '$7,500', highlight: false, cta: 'Book a demo',
    desc: 'Full-service managed security with 24/7 coverage, analyst-led remediation, and a dedicated Solution Architect.',
    features: ['Everything in Compliance', 'Managed Security — 24/7', 'Analyst-led remediation', 'Dedicated Solution Architect', 'Up to 10 cloud accounts'],
  },
]

const FRAMEWORKS = [
  { name: 'SOC 2',    color: '#3B82F6', desc: 'Security & availability controls' },
  { name: 'PCI-DSS',  color: '#B45309', desc: 'Payment card industry standard' },
  { name: 'HIPAA',    color: '#7C3AED', desc: 'Healthcare data protection' },
  { name: 'CIS AWS',  color: '#15803D', desc: 'Cloud infrastructure benchmarks' },
  { name: 'NIST CSF', color: '#0891B2', desc: 'Cybersecurity framework' },
]

const STATS = [
  { value: '400+', label: 'Compliance checks' },
  { value: '5',    label: 'Frameworks covered' },
  { value: '< 30', label: 'Minutes to go live' },
  { value: '24/7', label: 'Analyst monitoring' },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-xi-bg pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-xi-accbg border border-xi-accbd rounded-full px-3 py-1.5 mb-7">
              <HexShield size={15} variant="primary" />
              <span className="text-xs font-semibold text-xi-acc">Managed Security · No Agents · 24/7 Coverage</span>
            </div>

            <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight text-xi-t1 mb-6">
              Your Cloud Security Team.<br />
              <span className="text-xi-acc">Without the Overhead.</span>
            </h1>

            <p className="text-lg text-xi-t2 leading-relaxed mb-8 max-w-lg">
              <span className="font-semibold text-xi-t1">Security that works for you.</span> Detect threats, triage vulnerabilities, and surface risks in plain English — 24/7, so your team can focus on building.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-xi-accl text-xi-nav font-semibold px-6 py-3 rounded-xl hover:bg-xi-acc hover:text-white transition-colors">
                Book a demo <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works"
                className="inline-flex items-center gap-2 border border-xi-bd text-xi-t1 font-semibold px-6 py-3 rounded-xl hover:bg-xi-bg2 transition-colors">
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-xi-t3">
              {['No costly tooling', 'End-to-end cloud security', 'Live in under 30 minutes'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-xi-acc" /> {t}
                </span>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────────── */}
      <section className="bg-xi-nav border-y border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="text-2xl font-bold font-mono text-xi-accl mb-1">{s.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────────────────────── */}
      <section className="bg-xi-surf border-b border-xi-bd py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-4xl text-xi-t1 mb-4">
              Growing in the cloud without a security team is risky.
            </h2>
            <p className="text-xi-t2 max-w-xl mx-auto text-lg">
              Enterprise CSPM/CNAPP tools cost $150K–$1M/year. Hiring a dedicated security team costs $300K+. Most SMBs are left unprotected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle, color: 'text-xi-crit', bg: 'bg-xi-critbg', border: 'border-xi-crit/20',
                title: 'No visibility',
                desc: 'You don\'t know if your storage buckets are public, your access roles are over-permissioned, or your admin account has no MFA — until it\'s too late.',
              },
              {
                icon: FileCheck, color: 'text-xi-high', bg: 'bg-xi-highbg', border: 'border-xi-high/20',
                title: 'SOC 2 is expensive',
                desc: 'Audit prep without tooling takes months and costs $50K+ in consultant fees. Customers are asking for your SOC 2 report before they sign.',
              },
              {
                icon: Zap, color: 'text-xi-acc', bg: 'bg-xi-accbg', border: 'border-xi-accbd',
                title: 'Enterprise tools don\'t fit',
                desc: 'Enterprise CSPM/CNAPP platforms are built for dedicated security teams. The pricing, complexity, and onboarding assume you have a full SOC.',
              },
            ].map(item => (
              <div key={item.title} className="bg-xi-bg rounded-2xl border border-xi-bd p-7 flex flex-col gap-4">
                <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <h3 className="font-serif font-bold text-xl text-xi-t1">{item.title}</h3>
                <p className="text-sm text-xi-t2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works (brief) ───────────────────────────────────────────── */}
      <section className="bg-xi-bg py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">How it works</span>
            <h2 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">Up and running in under 30 minutes</h2>
            <p className="text-xi-t2 max-w-lg mx-auto text-lg">No agents. No code changes. Grant read-only access and Xigilant handles everything else.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div className="flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <div key={s.n} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-xi-accbg border-2 border-xi-accbd flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold font-mono text-xi-acc">{s.n}</span>
                    </div>
                    {i < STEPS.length - 1 && <div className="w-px flex-1 bg-xi-bd mt-2" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-serif font-bold text-xl text-xi-t1 mb-2">{s.title}</h3>
                    <p className="text-sm text-xi-t2 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/how-it-works"
                className="inline-flex items-center gap-2 text-xi-acc font-semibold hover:underline text-sm ml-13">
                See the full walkthrough <ArrowRight size={15} />
              </Link>
            </div>

            {/* Finding detail flow card */}
            <div className="bg-xi-surf border border-xi-bd rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-xi-nav px-4 py-3 flex items-center gap-2">
                <HexShield size={15} variant="ghost" />
                <span className="text-white/70 text-[11px] font-mono">Xigilant — Finding Detail</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-xi-accl animate-pulse" />
                  <span className="text-xi-accl text-[9px] font-mono">Live</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-col">
                  {FINDING_FLOW.map((step, i) => (
                    <div key={step.label} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full border-2 flex-shrink-0 mt-0.5"
                          style={{ background: step.active ? step.dot : 'white', borderColor: step.dot }} />
                        {i < FINDING_FLOW.length - 1 && <div className="w-px flex-1 my-1 bg-xi-bd" />}
                      </div>
                      <div className={`flex-1 ${i < FINDING_FLOW.length - 1 ? 'pb-3' : ''}`}>
                        <span className="text-[11px] font-bold" style={{ color: step.dot }}>{step.label}</span>
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we monitor ────────────────────────────────────────────────── */}
      <section className="bg-xi-nav py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-xi-accl uppercase tracking-widest">Cloud-native</span>
            <h2 className="font-serif font-bold text-4xl text-white mt-3 mb-4">Four capabilities. Complete coverage.</h2>
            <p className="text-white/60 max-w-lg mx-auto text-lg">We activate and manage native cloud security tools — no proprietary agents, no vendor lock-in.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {TOOLS.map(t => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-xi-accl/10 border border-xi-accl/20 flex items-center justify-center flex-shrink-0">
                    <t.icon size={18} className="text-xi-accl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5">{t.name}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance frameworks ──────────────────────────────────────────── */}
      <section className="bg-xi-surf border-y border-xi-bd py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Compliance</span>
            <h2 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">Pass your next audit with confidence</h2>
            <p className="text-xi-t2 max-w-lg mx-auto text-lg">Continuous scoring against the frameworks your auditors, customers, and insurers care about.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FRAMEWORKS.map(f => (
              <div key={f.name}
                className="flex flex-col items-center gap-3 bg-xi-bg border border-xi-bd rounded-2xl p-5 text-center">
                <div className="w-3 h-3 rounded-full" style={{ background: f.color }} />
                <div className="font-serif font-bold text-xi-t1 text-base">{f.name}</div>
                <div className="text-xs text-xi-t3 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-xi-t3 mt-8">
            Every finding is mapped to the specific control IDs your auditor will ask for.
          </p>
        </div>
      </section>

      {/* ── Credibility bar ────────────────────────────────────────────────── */}
      <section className="bg-xi-surf border-y border-xi-bd py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-xi-t3 uppercase tracking-widest mb-5">
            Built by cloud security practitioners with experience securing environments at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['FiServ', 'FINRA', 'MSCI', 'Lululemon', 'VSP'].map(c => (
              <span key={c}
                className="text-sm font-semibold text-xi-t2 bg-xi-bg border border-xi-bd rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing preview ────────────────────────────────────────────────── */}
      <section className="bg-xi-surf border-t border-xi-bd py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Pricing</span>
            <h2 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">70% less than enterprise tools</h2>
            <p className="text-xi-t2 max-w-lg mx-auto text-lg">Flat monthly pricing. No per-resource fees. No surprise bills.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map(t => (
              <div key={t.name}
                className={`rounded-2xl p-7 flex flex-col border ${
                  t.highlight ? 'bg-xi-nav border-xi-nav shadow-xl' : 'bg-xi-bg border-xi-bd'
                }`}>
                {t.highlight && (
                  <div className="text-[10px] font-bold text-xi-nav bg-xi-accl rounded-full px-3 py-1 mb-4 self-start uppercase tracking-wider">
                    Most popular
                  </div>
                )}
                <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${t.highlight ? 'text-xi-accl' : 'text-xi-acc'}`}>
                  {t.name}
                </div>
                <div className={`font-mono font-bold text-4xl mb-1 ${t.highlight ? 'text-white' : 'text-xi-t1'}`}>
                  {t.price}
                  <span className={`text-sm font-normal ml-1 ${t.highlight ? 'text-white/50' : 'text-xi-t3'}`}>/mo</span>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${t.highlight ? 'text-white/60' : 'text-xi-t2'}`}>{t.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {t.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${t.highlight ? 'text-xi-accl' : 'text-xi-acc'}`} />
                      <span className={t.highlight ? 'text-white/80' : 'text-xi-t2'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`text-center font-semibold text-sm py-3 rounded-xl transition-colors ${
                    t.highlight
                      ? 'bg-xi-accl text-xi-nav hover:bg-white'
                      : 'border border-xi-bd text-xi-t1 hover:bg-xi-bg2'
                  }`}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing"
              className="inline-flex items-center gap-2 text-xi-acc font-semibold hover:underline text-sm">
              Compare all features <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-xi-nav py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <HexShield size={52} variant="ghost" />
          <h2 className="font-serif font-bold text-4xl text-white mt-6 mb-4">
            Ready to secure your cloud environment?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Book a 30-minute demo. We'll show you exactly what's exposed in your environment — live.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-xi-accl text-xi-nav font-semibold px-8 py-3.5 rounded-xl hover:bg-white transition-colors">
              Book a free demo <ArrowRight size={16} />
            </Link>
            <Link href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HexShield from '@/components/HexShield'
import { Shield, Eye, FileCheck, BarChart3, ArrowRight, CheckCircle, Lock, Zap, Users } from 'lucide-react'

export const metadata = {
  title: 'How It Works — Xigilant Managed Cloud Security',
  description: 'From zero to fully monitored in under 30 minutes. No agents, no code changes. See how Xigilant activates cloud-native security tools and our analysts begin monitoring immediately.',
}

const STEPS = [
  {
    n: '01',
    icon: Lock,
    title: 'Connect your cloud account',
    duration: '~10 minutes',
    desc: 'Grant Xigilant read-only access via a scoped role in your cloud account. No agents, no code changes, no infrastructure to manage. We never get write access — ever.',
    details: [
      'One simple onboarding template — no manual setup',
      'Read-only role with least-privilege permissions',
      'External ID prevents third-party spoofing attacks',
      'Your data never leaves your cloud account',
    ],
  },
  {
    n: '02',
    icon: Zap,
    title: 'We activate your security tools',
    duration: '~10 minutes',
    desc: 'Xigilant enables native threat detection, finding aggregation, and vulnerability scanning across all your target regions — then runs the first Xigilant Posture Check baseline across 400+ controls.',
    details: [
      'Threat detection enabled and tuned to reduce noise',
      'Finding aggregation configured as the central hub',
      'Vulnerability scanning across compute, containers, and serverless',
      'Xigilant Posture Check baseline: 400+ checks across all regions',
    ],
  },
  {
    n: '03',
    icon: Eye,
    title: 'Continuous monitoring begins',
    duration: 'Ongoing',
    desc: 'From this point, Xigilant monitors your environment continuously. Threat detection watches in real time. Xigilant Posture Checks run on your configured schedule. Every finding is normalised, deduped, and prioritised.',
    details: [
      'Real-time threat detection alerts',
      'Daily or weekly Xigilant Posture Checks',
      'Deduplication removes noise from repeated findings',
      'Severity scoring with CRITICAL → LOW prioritisation',
    ],
  },
  {
    n: '04',
    icon: Users,
    title: 'Analysts review and triage',
    duration: 'Business hours or 24/7',
    desc: 'Xigilant analysts review every non-trivial finding before it reaches you. We suppress false positives, escalate critical issues immediately, and provide root cause context that automated tools can\'t.',
    details: [
      'Human review of all HIGH and CRITICAL findings',
      'False positives suppressed before you see them',
      'Immediate escalation for critical threats',
      'Root cause analysis and plain-English remediation steps',
    ],
  },
  {
    n: '05',
    icon: FileCheck,
    title: 'You stay audit-ready',
    duration: 'Always',
    desc: 'Your compliance scorecard is updated in real time. Every control is mapped to the frameworks you care about. When an auditor asks for evidence, you download a report — not scramble for weeks.',
    details: [
      'Live scorecards for SOC 2, PCI-DSS, HIPAA, CIS',
      'Every finding mapped to specific control IDs',
      'Monthly posture reports generated automatically',
      'Evidence package ready for auditors on demand',
    ],
  },
]

const TOOLS = [
  {
    icon: Shield,
    name: 'Threat Detection',
    tag: 'Real-time Monitoring',
    tagColor: 'text-xi-crit bg-xi-critbg border-xi-crit/20',
    points: [
      'Monitors audit logs, network flows, and DNS activity',
      'Detects credential abuse, recon, and crypto mining',
      'Machine learning baseline calibrated to your environment',
      'Alerts within minutes of anomalous activity',
    ],
  },
  {
    icon: Eye,
    name: 'Finding Aggregation',
    tag: 'Security Posture',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    points: [
      'Central view for all security findings across your environment',
      'Normalises findings from all detection sources into one feed',
      'Tracks compliance status per framework in real time',
      'Cross-account and cross-region aggregation',
    ],
  },
  {
    icon: BarChart3,
    name: 'Vulnerability Triage',
    tag: 'Risk Prioritisation',
    tagColor: 'text-xi-high bg-xi-highbg border-xi-high/20',
    points: [
      'Continuous scanning — not periodic snapshots',
      'OS and application vulnerabilities (CVEs) across compute',
      'Container image scanning for known vulnerabilities',
      'Serverless function vulnerability analysis',
    ],
  },
  {
    icon: FileCheck,
    name: 'Xigilant Posture Checks',
    tag: 'Built-in Compliance',
    tagColor: 'text-xi-acc bg-xi-accbg border-xi-accbd',
    points: [
      '400+ built-in checks across SOC 2, PCI-DSS, HIPAA, and CIS',
      'Runs via read-only role — no agent needed',
      'Detects access misconfigs, public resources, and encryption gaps',
      'Every result mapped to specific compliance control IDs',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-xi-bg pt-20 pb-16 px-6 text-center">
        <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">How it works</span>
        <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">
          From zero to fully monitored in under 30 minutes
        </h1>
        <p className="text-xi-t2 max-w-xl mx-auto">
          No agents. No code changes. No complex onboarding. Grant read-only access and Xigilant handles everything else.
        </p>
      </section>

      {/* Steps */}
      <section className="bg-xi-surf border-y border-xi-bd py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex gap-8">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-xi-accbg border-2 border-xi-accbd flex items-center justify-center flex-shrink-0">
                  <s.icon size={17} className="text-xi-acc" />
                </div>
                {i < STEPS.length - 1 && <div className="w-px flex-1 bg-xi-bd mt-3" />}
              </div>

              {/* Content */}
              <div className="pb-4 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-xi-t3 bg-xi-bg2 border border-xi-bd rounded-full px-3 py-1">{s.duration}</span>
                </div>
                <h2 className="font-serif font-bold text-xl text-xi-t1 mb-3">{s.title}</h2>
                <p className="text-sm text-xi-t2 leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-2">
                  {s.details.map(d => (
                    <li key={d} className="flex items-start gap-2 text-sm text-xi-t2">
                      <CheckCircle size={13} className="text-xi-acc mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-xi-bg py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Capabilities</span>
            <h2 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">Cloud-native. Zero proprietary agents.</h2>
            <p className="text-xi-t2 max-w-xl mx-auto">
              We activate and manage native cloud security capabilities — combined with Xigilant's own built-in posture checks. No lock-in, no agents, no complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TOOLS.map(t => (
              <div key={t.name} className="bg-xi-surf border border-xi-bd rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-xi-accbg border border-xi-accbd flex items-center justify-center flex-shrink-0">
                    <t.icon size={18} className="text-xi-acc" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xi-t1 mb-1">{t.name}</h3>
                    <span className={`text-[10px] font-bold border rounded-full px-2.5 py-0.5 uppercase tracking-wide ${t.tagColor}`}>{t.tag}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {t.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-xi-t2">
                      <CheckCircle size={13} className="text-xi-acc mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-xi-nav py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HexShield size={40} variant="ghost" />
          <h2 className="font-serif font-bold text-3xl text-white mt-6 mb-4">We only have read-only access. Always.</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Our access role is scoped to the minimum permissions needed to read your security posture. We cannot create, modify, or delete any resource in your environment.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Lock,   title: 'Read-only access role',    desc: 'Scoped to read-only permissions — no write access, ever.' },
              { icon: Shield, title: 'External ID protection',   desc: 'Prevents third-party spoofing attacks on our access role.' },
              { icon: Eye,    title: 'Full audit trail',         desc: 'Every Xigilant action is logged to your cloud provider\'s audit trail.' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <item.icon size={16} className="text-xi-accl mb-3" />
                <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-xi-bg py-20 px-6 text-center">
        <h2 className="font-serif font-bold text-3xl text-xi-t1 mb-4">See it live in your own cloud environment</h2>
        <p className="text-xi-t2 mb-8 max-w-md mx-auto">Book a 30-minute demo and we'll show you exactly what Xigilant would find in your environment.</p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-xi-nav text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-xi-nav/90 transition-colors">
          Book a free demo <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </>
  )
}

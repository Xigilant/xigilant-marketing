import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HexShield from '@/components/HexShield'
import { CheckCircle, X, ArrowRight, Users, Shield, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Pricing — Xigilant Managed Cloud Security',
  description: 'Simple flat monthly pricing for managed cloud security. Posture from $1,500/mo, Compliance from $3,500/mo, Managed with dedicated Solution Architect from $7,500/mo.',
}

const TIERS = [
  {
    name: 'Posture',
    price: '$1,500',
    highlight: false,
    cta: 'Get started',
    desc: 'Cloud security monitoring with self-service reporting. Detect threats and track posture without the managed layer.',
    features: [
      'Threat detection + finding aggregation',
      'Weekly Xigilant Posture Checks',
      'Vulnerability triage',
      'Monthly posture report',
      'Email alerts',
      '1 cloud account',
    ],
  },
  {
    name: 'Compliance',
    price: '$3,500',
    highlight: true,
    cta: 'Get started',
    desc: 'Managed security with daily posture checks, compliance scorecards, and analyst-led triage during business hours.',
    features: [
      'Everything in Posture',
      'Daily Xigilant Posture Checks',
      'SOC 2 · PCI-DSS · CIS · HIPAA scorecards',
      'Managed Security — business hours',
      'Slack + email alerts',
      'Up to 3 cloud accounts',
    ],
  },
  {
    name: 'Managed',
    price: '$7,500',
    highlight: false,
    cta: 'Book a demo',
    desc: 'Full-service managed security with 24/7 coverage, analyst-led remediation, and a dedicated Solution Architect.',
    features: [
      'Everything in Compliance',
      'Managed Security — 24/7',
      'Analyst-led remediation',
      'Dedicated Solution Architect',
      'Audit support package',
      'Up to 10 cloud accounts',
    ],
  },
]

const ROWS = [
  { group: 'Monitoring & Detection', items: [
    { label: 'Threat detection',               vals: [true,        true,         true]         },
    { label: 'Vulnerability triage',           vals: [true,        true,         true]         },
    { label: 'Finding aggregation',            vals: [true,        true,         true]         },
    { label: 'Xigilant Posture Checks',        vals: ['Weekly',    'Daily',      'Continuous'] },
    { label: 'Multi-region coverage',          vals: [false,       true,         true]         },
    { label: 'Cloud accounts',                 vals: ['1',         'Up to 3',    'Up to 10']   },
    { label: 'Data retention',                 vals: ['30 days',   '90 days',    '1 year']     },
  ]},
  { group: 'Compliance', items: [
    { label: 'SOC 2 scorecard',                vals: [false, true,  true]  },
    { label: 'PCI-DSS scorecard',              vals: [false, true,  true]  },
    { label: 'CIS Benchmark',                  vals: [true,  true,  true]  },
    { label: 'HIPAA controls',                 vals: [false, true,  true]  },
    { label: 'NIST CSF',                       vals: [false, false, true]  },
    { label: 'Control ID mapping',             vals: [true,  true,  true]  },
    { label: 'Audit evidence package',         vals: [false, false, true]  },
  ]},
  { group: 'Managed Security', items: [
    { label: 'Analyst monitoring',             vals: [false,       'Business hours', '24/7']   },
    { label: 'Response SLA',                   vals: [false,       '4 hours',        '1 hour'] },
    { label: 'Finding triage',                 vals: [false,       true,             true]     },
    { label: 'False positive suppression',     vals: [false,       true,             true]     },
    { label: 'Analyst-led remediation',        vals: [false,       false,            true]     },
    { label: 'Critical escalation',            vals: [false,       true,             true]     },
  ]},
  { group: 'Solution Architecture', items: [
    { label: 'Dedicated Solution Architect',   vals: [false, false, true]  },
    { label: 'Security architecture review',   vals: [false, false, true]  },
    { label: 'Patch management guidance',      vals: [false, false, true]  },
    { label: 'SCP design & implementation',    vals: [false, false, true]  },
    { label: 'Account vending / landing zone', vals: [false, false, true]  },
    { label: 'Security baseline design',       vals: [false, false, true]  },
  ]},
  { group: 'Reporting & Alerts', items: [
    { label: 'Monthly posture report',         vals: [true,  true,  true]  },
    { label: 'Email alerts',                   vals: [true,  true,  true]  },
    { label: 'Slack alerts',                   vals: [false, true,  true]  },
    { label: 'Quarterly compliance review',    vals: [false, true,  true]  },
    { label: 'Monthly executive report',       vals: [false, false, true]  },
    { label: 'Custom report cadence',          vals: [false, false, true]  },
  ]},
]

function Cell({ val }) {
  if (val === true)  return <CheckCircle size={17} className="text-xi-acc mx-auto" />
  if (val === false) return <X size={15} className="text-xi-bd2 mx-auto" />
  return <span className="text-xs font-semibold text-xi-t2">{val}</span>
}

export default function Pricing() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-xi-bg pt-20 pb-14 px-6 text-center">
        <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Pricing</span>
        <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">Simple, flat monthly pricing</h1>
        <p className="text-xi-t2 max-w-lg mx-auto">No per-resource fees. No overage charges. No surprise bills. Pick the tier that fits where you are today — and upgrade as you grow.</p>
      </section>

      {/* Tier cards */}
      <section className="bg-xi-bg pb-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {TIERS.map(t => (
            <div key={t.name}
              className={`rounded-2xl p-7 flex flex-col border ${t.highlight ? 'bg-xi-nav border-xi-nav shadow-xl' : 'bg-xi-surf border-xi-bd'}`}>
              {t.highlight && (
                <div className="text-[10px] font-bold text-xi-nav bg-xi-accl rounded-full px-3 py-1 mb-4 self-start uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${t.highlight ? 'text-xi-accl' : 'text-xi-acc'}`}>{t.name}</div>
              <div className={`font-mono font-bold text-4xl mb-1 ${t.highlight ? 'text-white' : 'text-xi-t1'}`}>
                {t.price}<span className={`text-sm font-normal ml-1 ${t.highlight ? 'text-white/50' : 'text-xi-t3'}`}>/mo</span>
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
                className={`block text-center font-semibold text-sm py-3 rounded-xl transition-colors ${
                  t.highlight ? 'bg-xi-accl text-xi-nav hover:bg-white' : 'border border-xi-bd text-xi-t1 hover:bg-xi-bg2'
                }`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Managed Security callout */}
      <section className="bg-xi-surf border-y border-xi-bd py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">What makes us different</span>
            <h2 className="font-serif font-bold text-3xl text-xi-t1 mt-3 mb-3">Not just tooling. A managed service.</h2>
            <p className="text-xi-t2 max-w-xl mx-auto">Xigilant's Compliance and Managed tiers include real humans reviewing, triaging, and remediating findings on your behalf.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                tier: 'All tiers',
                tierColor: 'text-xi-acc bg-xi-accbg border-xi-accbd',
                title: 'Continuous Monitoring',
                desc: 'Automated threat detection, vulnerability triage, and Xigilant Posture Checks running around the clock — no human intervention needed.',
              },
              {
                icon: Users,
                tier: 'Compliance + Managed',
                tierColor: 'text-blue-700 bg-blue-50 border-blue-200',
                title: 'Managed Security',
                desc: 'Xigilant analysts review, triage, and suppress false positives before findings reach you. Critical issues are escalated immediately. Business hours or 24/7 depending on tier.',
              },
              {
                icon: Briefcase,
                tier: 'Managed only',
                tierColor: 'text-xi-high bg-xi-highbg border-xi-high/20',
                title: 'Dedicated Solution Architect',
                desc: 'A dedicated SA helps you implement security at the architecture level — patch management, SCP design, account vending, landing zones, and security baselines.',
              },
            ].map(item => (
              <div key={item.title} className="bg-xi-bg border border-xi-bd rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-xi-accbg border border-xi-accbd flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-xi-acc" />
                  </div>
                  <span className={`text-[10px] font-bold border rounded-full px-2.5 py-0.5 uppercase tracking-wide ${item.tierColor}`}>{item.tier}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-xi-t1 mb-2">{item.title}</h3>
                <p className="text-sm text-xi-t2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Architect deep dive */}
      <section className="bg-xi-nav py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-xi-accl uppercase tracking-widest">Managed tier</span>
              <h2 className="font-serif font-bold text-3xl text-white mt-3 mb-4">Your Dedicated Solution Architect</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Security isn't just about monitoring — it's about building the right foundation. Your SA works alongside your engineering team to implement security at the architecture level, not just the tooling layer.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-xi-accl text-xi-nav font-semibold px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm">
                Talk to us about Managed <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Patch Management',       desc: 'Guidance on patching strategy and tooling across your cloud workloads.' },
                { title: 'SCP Design',             desc: 'Service Control Policy design to enforce guardrails across your cloud org.' },
                { title: 'Account Vending',        desc: 'Landing zone and account vending machine structure for scalable growth.' },
                { title: 'Security Baseline',      desc: 'Organisation-wide security baseline aligned to your compliance framework.' },
                { title: 'Architecture Review',    desc: 'Regular security architecture reviews of new and existing systems.' },
                { title: 'Remediation Support',    desc: 'Hands-on implementation support to resolve critical findings at the root.' },
              ].map(item => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-xi-surf border-y border-xi-bd py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif font-bold text-3xl text-xi-t1 mb-10 text-center">Full feature comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-xi-bd">
                  <th className="text-left py-3 pr-6 text-xi-t3 font-semibold w-1/2">Feature</th>
                  {TIERS.map(t => (
                    <th key={t.name} className={`text-center py-3 px-4 font-semibold ${t.highlight ? 'text-xi-acc' : 'text-xi-t1'}`}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(group => (
                  <>
                    <tr key={group.group}>
                      <td colSpan={4} className="pt-8 pb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-xi-t3">{group.group}</span>
                      </td>
                    </tr>
                    {group.items.map(row => (
                      <tr key={row.label} className="border-b border-xi-bd/50 hover:bg-xi-bg transition-colors">
                        <td className="py-3 pr-6 text-xi-t2">{row.label}</td>
                        {row.vals.map((v, i) => (
                          <td key={i} className="py-3 px-4 text-center"><Cell val={v} /></td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-xi-bg py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-3xl text-xi-t1 mb-10 text-center">Common questions</h2>
          <div className="flex flex-col gap-6">
            {[
              { q: 'How long does onboarding take?',
                a: 'Under 30 minutes. Grant Xigilant read-only access via a scoped role, and we handle the rest — enabling monitoring, running the first posture check baseline, and activating your portal.' },
              { q: 'Do you need agent access to our servers?',
                a: 'No. We use cloud-native tools and a read-only cross-account role. No agents are installed, no code changes are needed, and we never have write access to your environment.' },
              { q: 'What does Managed Security actually mean?',
                a: 'On Compliance and Managed tiers, Xigilant analysts actively monitor your environment, triage findings, suppress false positives, and escalate critical issues — during business hours on Compliance, and 24/7 on Managed. You\'re not left to interpret alerts alone.' },
              { q: 'What does the Solution Architect do?',
                a: 'Your dedicated SA is a senior security engineer who works alongside your team to implement security at the architecture level. This includes patch management strategy, SCP design, account vending structures, landing zone setup, and security baseline design — not just monitoring.' },
              { q: 'Can we start on Posture and upgrade later?',
                a: 'Yes. All tiers are billed monthly with no lock-in. You can upgrade at any time and your historical data, findings, and compliance history carry over.' },
              { q: 'What cloud providers are supported?',
                a: 'We currently support AWS, with GCP and Azure support on the roadmap. Multi-region coverage is included on Compliance and Managed tiers.' },
            ].map(item => (
              <div key={item.q} className="border-b border-xi-bd pb-6">
                <h3 className="font-semibold text-xi-t1 mb-2">{item.q}</h3>
                <p className="text-sm text-xi-t2 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-xi-nav py-20 px-6 text-center">
        <HexShield size={40} variant="ghost" />
        <h2 className="font-serif font-bold text-3xl text-white mt-6 mb-4">Not sure which tier fits?</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">Book a 30-minute call. We'll walk through your cloud setup and recommend the right plan — no pressure.</p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-xi-accl text-xi-nav font-semibold px-8 py-3.5 rounded-xl hover:bg-white transition-colors">
          Talk to us <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </>
  )
}

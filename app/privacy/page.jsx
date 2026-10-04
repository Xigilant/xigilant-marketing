import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — Xigilant',
  description: 'How Xigilant LLC collects, uses, and protects information from visitors to this website and from customers of the Xigilant managed cloud security service.',
}

const SECTIONS = [
  {
    heading: '1. Scope of this policy',
    body: [
      `This policy covers two different things, and it's worth separating them up front: (a) information we collect through this website (xigilant.com) when you browse it or submit the contact form, and (b) data we process on behalf of customers using the Xigilant managed cloud security service (the "Service"). Section 6 below covers the Service specifically — everything else on this page is about the website.`,
    ],
  },
  {
    heading: '2. Information we collect on this website',
    body: [
      `Contact form. When you submit the form on our Contact page, we collect your name, work email address, company name (optional), the reason for your inquiry, and any message you write. This is the only form on the site, and it's the only way we directly collect personal information from visitors.`,
      `Hosting and server logs. This site is hosted on Vercel. Like virtually every website, standard technical information — IP address, browser type, request timestamps, and pages requested — is logged automatically by our hosting provider for security, abuse prevention, and operational purposes. We don't separately access or analyze these logs for marketing purposes.`,
      `No cookies, no analytics, no ad tracking. As of the effective date below, this website does not use cookies, analytics scripts, or any third-party advertising or tracking pixels. If that changes in the future, we'll update this policy and add a cookie notice before doing so.`,
    ],
  },
  {
    heading: '3. How we use your information',
    body: [
      `We use contact form submissions solely to respond to your inquiry — scheduling a demo, answering a pricing question, or following up on whatever you wrote in. We don't sell personal information, and we don't use contact form data for advertising or share it with third parties for their own marketing purposes.`,
    ],
  },
  {
    heading: '4. Third-party service providers',
    body: [
      `We rely on a small number of service providers to operate this website and respond to inquiries:`,
      `• Resend — delivers contact form submissions to our inbox by email.`,
      `• Google Workspace — hosts the inbox (hello@xigilant.com) that receives those submissions.`,
      `• Vercel — hosts and serves this website.`,
      `Each of these providers processes data only as needed to perform that function, under their own respective privacy and security commitments.`,
    ],
  },
  {
    heading: '5. Data retention',
    body: [
      `We retain contact form submissions for as long as reasonably necessary to respond to your inquiry and maintain a record of business communications, and we delete or anonymize them on request (see Section 7).`,
    ],
  },
  {
    heading: '6. Data processed through the Service',
    body: [
      `If you're a customer of the Xigilant managed cloud security Service, we access configuration and security-relevant data in your connected cloud accounts (AWS today) through a read-only, least-privilege role that you grant us — never write access, and never your underlying application data or customer records. That access, and how we handle what we see through it, is governed by the Master Services Agreement and Data Processing terms you agree to when you become a customer, not by this website privacy policy. Contact us at hello@xigilant.com if you need a copy of those terms.`,
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      `You can ask us to access, correct, or delete the personal information we hold about you from this website (primarily, contact form submissions) by emailing hello@xigilant.com. We'll respond within a reasonable timeframe, consistent with applicable law in your jurisdiction.`,
    ],
  },
  {
    heading: '8. Security',
    body: [
      `We use industry-standard safeguards appropriate to the limited information this website collects. No method of transmission or storage is perfectly secure, and we can't guarantee absolute security, but we take reasonable steps to protect the information you share with us.`,
    ],
  },
  {
    heading: "9. Children's privacy",
    body: [
      `This website and the Service are directed at businesses and professionals, not children. We don't knowingly collect personal information from anyone under 16.`,
    ],
  },
  {
    heading: '10. Changes to this policy',
    body: [
      `We may update this policy as the website or our practices change. We'll update the effective date below when we do. Material changes will be reflected here before they take effect.`,
    ],
  },
  {
    heading: '11. Contact us',
    body: [
      `Questions about this policy, or requests regarding your personal information, can be sent to hello@xigilant.com.`,
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Navbar />

      <section className="bg-xi-bg py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Legal</span>
          <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-3">Privacy Policy</h1>
          <p className="text-sm text-xi-t3 mb-14">Effective October 4, 2026 · Xigilant LLC</p>

          <div className="flex flex-col gap-10">
            {SECTIONS.map(s => (
              <div key={s.heading}>
                <h2 className="font-serif font-bold text-lg text-xi-t1 mb-3">{s.heading}</h2>
                <div className="flex flex-col gap-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm text-xi-t2 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

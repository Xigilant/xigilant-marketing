import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service — Xigilant',
  description: 'The terms governing use of the xigilant.com website. Use of the Xigilant managed cloud security Service itself is governed by a separate Master Services Agreement.',
}

const SECTIONS = [
  {
    heading: '1. Scope',
    body: [
      `These Terms of Service govern your use of this website, xigilant.com, operated by Xigilant LLC ("Xigilant," "we," "us"). They don't cover the Xigilant managed cloud security service itself ("the Service") — if you're a paying customer, your use of the Service is governed by the Master Services Agreement (and any order form or Data Processing Addendum) you signed when you became a customer. If anything here conflicts with that agreement for matters relating to the Service, the agreement controls.`,
      `By browsing this website or submitting the contact form, you agree to these terms. If you don't agree, please don't use the site.`,
    ],
  },
  {
    heading: '2. What this website is',
    body: [
      `This site is informational and promotional: it describes the Service, its pricing, and how to get in touch with us. Nothing on this website is a binding quote, service-level commitment, or contract offer — pricing and features described here are illustrative and subject to change, and any actual engagement is governed by a signed agreement between you and Xigilant.`,
    ],
  },
  {
    heading: '3. Acceptable use',
    body: [
      `You agree not to: scrape or systematically harvest content from this site without our permission; attempt to gain unauthorized access to any part of the site or its underlying infrastructure; use the contact form to send spam, malware, or unlawful content; or interfere with the site's normal operation (e.g., denial-of-service activity, automated abuse of the contact endpoint).`,
    ],
  },
  {
    heading: '4. Intellectual property',
    body: [
      `The Xigilant name, logo (including the Hexshield mark), and all website content — text, graphics, design — are owned by Xigilant LLC or its licensors and protected by applicable intellectual property law. You may view and share pages of this site for personal or internal business reference, but you may not reproduce, modify, or redistribute our branding or site content for commercial purposes without our written permission.`,
    ],
  },
  {
    heading: '5. Third-party links',
    body: [
      `This site may link to third-party resources. We don't control and aren't responsible for the content, accuracy, or practices of any third-party site we link to.`,
    ],
  },
  {
    heading: '6. Disclaimer of warranties',
    body: [
      `This website and its content are provided "as is," without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose. Statements about the Service on this site (features, pricing, onboarding time, etc.) are descriptive, not contractual guarantees — actual Service commitments are set out in your Master Services Agreement.`,
    ],
  },
  {
    heading: '7. Limitation of liability',
    body: [
      `To the fullest extent permitted by law, Xigilant LLC will not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Nothing in this section limits liability that can't be limited under applicable law.`,
    ],
  },
  {
    heading: '8. Changes to these terms',
    body: [
      `We may update these terms from time to time; the current version will always be posted at this URL with its effective date. Continued use of the site after an update constitutes acceptance of the revised terms.`,
    ],
  },
  {
    heading: '9. Governing law',
    body: [
      `These terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws principles, unless otherwise required by applicable law in your jurisdiction.`,
    ],
  },
  {
    heading: '10. Contact',
    body: [
      `Questions about these terms can be sent to hello@xigilant.com.`,
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="bg-xi-bg py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Legal</span>
          <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-3">Terms of Service</h1>
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

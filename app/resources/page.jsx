import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ResourceCard from '@/components/ResourceCard'
import HexShield from '@/components/HexShield'
import { RESOURCES } from '@/lib/resources'

export const metadata = {
  title: 'Resources — Xigilant',
  description: 'Guides, write-ups, and practitioner notes on cloud security, compliance, and vulnerability management — from the team running Xigilant.',
}

export default function Resources() {
  return (
    <>
      <Navbar />

      <section className="bg-xi-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-xi-acc uppercase tracking-widest">Resources</span>
            <h1 className="font-serif font-bold text-4xl text-xi-t1 mt-3 mb-4">
              Notes from the practitioners running Xigilant.
            </h1>
            <p className="text-xi-t2 max-w-xl mx-auto">
              Guides, deep dives, and plain-English write-ups on cloud security, compliance, and vulnerability management.
            </p>
          </div>

          {RESOURCES.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {RESOURCES.map(resource => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="bg-xi-surf border border-xi-bd rounded-2xl py-16 px-6 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-xl bg-xi-accbg border border-xi-accbd flex items-center justify-center mx-auto mb-5">
                <HexShield size={22} variant="primary" />
              </div>
              <h2 className="font-serif font-bold text-lg text-xi-t1 mb-2">First piece coming soon.</h2>
              <p className="text-sm text-xi-t2 leading-relaxed">
                We're writing it now. Check back shortly, or{' '}
                <a href="mailto:hello@xigilant.com" className="text-xi-acc hover:underline">get in touch</a>{' '}
                if there's something specific you'd want us to cover.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

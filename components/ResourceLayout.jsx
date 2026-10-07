import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { RESOURCE_TYPES } from '@/lib/resources'

// Shared shell for every individual resource (blog post, guide, whitepaper).
// Usage: wrap a post's content with <ResourceLayout resource={...}>...</ResourceLayout>
// where `resource` is the matching entry from lib/resources.js.
export default function ResourceLayout({ resource, children }) {
  const { title, type, date, author, readTime } = resource
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <>
      <Navbar />

      <article className="bg-xi-bg py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/resources"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-xi-t3 hover:text-xi-acc transition-colors mb-8">
            <ArrowLeft size={13} /> Back to Resources
          </Link>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] font-semibold text-xi-acc bg-xi-accbg border border-xi-accbd rounded-full px-2.5 py-0.5 uppercase tracking-wide">
              {RESOURCE_TYPES[type] || type}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl md:text-4xl text-xi-t1 leading-tight mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-xi-t3 mb-12">
            <span>{author}</span>
            <span>·</span>
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>

          <div className="flex flex-col gap-5 text-sm text-xi-t2 leading-relaxed [&_h2]:font-serif [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-xi-t1 [&_h2]:mt-6 [&_h2]:mb-1 [&_strong]:text-xi-t1 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
            {children}
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

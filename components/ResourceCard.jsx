import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { RESOURCE_TYPES } from '@/lib/resources'

export default function ResourceCard({ resource }) {
  const { slug, title, type, excerpt, date, readTime } = resource
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <Link href={`/resources/${slug}`}
      className="group bg-xi-surf border border-xi-bd rounded-2xl p-6 flex flex-col gap-4 hover:border-xi-acc/40 hover:shadow-sm transition-all">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-xi-acc bg-xi-accbg border border-xi-accbd rounded-full px-2.5 py-0.5 uppercase tracking-wide">
          {RESOURCE_TYPES[type] || type}
        </span>
        <span className="text-xs text-xi-t3">{formattedDate}</span>
      </div>

      <h3 className="font-serif font-bold text-lg text-xi-t1 leading-snug group-hover:text-xi-acc transition-colors">
        {title}
      </h3>

      <p className="text-sm text-xi-t2 leading-relaxed">{excerpt}</p>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xs text-xi-t3">{readTime}</span>
        <span className="text-xs font-semibold text-xi-acc flex items-center gap-1 group-hover:gap-1.5 transition-all">
          Read <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  )
}

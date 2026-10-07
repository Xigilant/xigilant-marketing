// Registry of everything published under /resources — blog posts, guides, whitepapers.
// Add an entry here when a new piece goes live, pointing at its route under app/resources/<slug>.
// Keep this list sorted newest-first; the index page renders in this order.

export const RESOURCE_TYPES = {
  blog: 'Blog',
  guide: 'Guide',
  whitepaper: 'Whitepaper',
}

export const RESOURCES = [
  // {
  //   slug: 'patching-cloud-vs-on-prem',
  //   title: 'Patching in the cloud vs. on-prem: what actually shifted, what\'s still on you',
  //   type: 'blog',
  //   excerpt: 'The shared responsibility model changes who patches what — but it doesn\'t make patching your problem, exactly.',
  //   date: '2026-10-01',
  //   author: 'Raj Yasani',
  //   readTime: '6 min read',
  // },
]

export function getResourceBySlug(slug) {
  return RESOURCES.find(r => r.slug === slug)
}

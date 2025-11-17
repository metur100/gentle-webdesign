'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiArrowRight } from 'react-icons/hi'

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Next.js 15 & React 19: Performance-Boost für moderne Web-Apps',
    excerpt:
      'Entdecken Sie die neuesten Features von Next.js 15 und React 19. Server Components, Streaming und App Router für blitzschnelle Performance.',
    category: 'Web Development',
    categoryColor: 'from-aquamarine to-tropical-indigo',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Full-Stack Developer',
    },
    publishDate: '15. März 2024',
    readTime: '8 min',
    slug: 'nextjs-15-react-19-performance',
  },
  {
    id: '2',
    title: 'KI-Integration in Business-Prozesse: Praxisleitfaden 2024',
    excerpt:
      'Von ChatGPT über Azure OpenAI bis zu Custom AI-Lösungen: Wie Sie KI gewinnbringend in Ihre Geschäftsprozesse integrieren.',
    category: 'KI & Automatisierung',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: {
      name: 'Medin Turkes',
      role: 'AI Solutions Architect',
    },
    publishDate: '10. März 2024',
    readTime: '12 min',
    slug: 'ki-integration-business-prozesse',
  },
  {
    id: '3',
    title: 'Headless CMS mit Azure: Moderne Content-Architekturen',
    excerpt:
      'Contentful, Sanity oder Strapi? Vergleich moderner Headless CMS-Lösungen mit Azure-Integration für maximale Skalierbarkeit.',
    category: 'Cloud & Infrastructure',
    categoryColor: 'from-aquamarine to-tropical-indigo',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Full-Stack Developer',
    },
    publishDate: '5. März 2024',
    readTime: '10 min',
    slug: 'headless-cms-azure-content',
  },
  {
    id: '4',
    title: 'TypeScript Best Practices: Type-Safety für Enterprise-Apps',
    excerpt:
      'Fortgeschrittene TypeScript-Patterns für sichere und wartbare Enterprise-Anwendungen. Generics, Utility Types und mehr.',
    category: 'Web Development',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: {
      name: 'Team Gentle Webdesign',
      role: 'Development Team',
    },
    publishDate: '1. März 2024',
    readTime: '15 min',
    slug: 'typescript-best-practices-enterprise',
  },
]

const Blog = () => {
  // Show only first 3 posts
  const displayedPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="blog" className="relative overflow-hidden bg-white py-32 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-aquamarine font-bold text-lg mb-4 uppercase tracking-wider">
                Insights & Wissen
              </p>
              <h2 className="text-5xl lg:text-7xl font-black mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-aquamarine bg-clip-text text-transparent">
                  Blog & Tutorials
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
                Praktisches Wissen zu Web-Development, KI-Integration und digitalen Trends
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-oxford-blue text-oxford-blue font-bold rounded-full hover:bg-oxford-blue hover:text-ghost-white transition-all duration-300 flex items-center gap-2"
              >
                Alle Artikel
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: typeof BLOG_POSTS[0]
  index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-aquamarine/50 transition-all duration-500 hover:shadow-2xl hover:shadow-aquamarine/10 hover:-translate-y-2">
          {/* Image Placeholder with Gradient */}
          <div className="relative h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor} opacity-80`} />
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className={`px-4 py-2 bg-white/95 backdrop-blur-sm text-oxford-blue font-bold rounded-full text-sm shadow-lg`}>
                {post.category}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-oxford-blue/0 group-hover:bg-oxford-blue/20 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-aquamarine transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              {/* Author */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {post.publishDate}
                </p>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-1.5 text-gray-500 ml-4 flex-shrink-0">
                <HiClock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default Blog

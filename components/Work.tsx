'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiExternalLink } from 'react-icons/hi'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'Eine moderne E-Commerce-Plattform mit React, Node.js und Azure Cloud Integration.',
    tags: ['React', 'Next.js', 'Azure', 'Stripe'],
    color: 'from-aquamarine to-tropical-indigo',
  },
  {
    title: 'AI-Chatbot System',
    category: 'KI-Integration',
    description: 'Intelligentes Chatbot-System mit Natural Language Processing für Kundenservice.',
    tags: ['Python', 'OpenAI', 'Azure AI', 'React'],
    color: 'from-tropical-indigo to-aquamarine',
  },
  {
    title: 'CRM Dashboard',
    category: 'Web-App',
    description: 'Umfassendes CRM-System mit SharePoint-Integration und Power Automate Workflows.',
    tags: ['React', '.NET Core', 'SharePoint', 'SQL'],
    color: 'from-aquamarine to-oxford-blue',
  },
  {
    title: 'Corporate Website',
    category: 'Webdesign',
    description: 'Elegante Corporate Website mit modernem Design und optimaler Performance.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'SEO'],
    color: 'from-tropical-indigo to-oxford-blue',
  },
]

const Work = () => {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Wheel scroll handler for overlapping effect
  useEffect(() => {
    const projectsContainer = projectsContainerRef.current
    if (!projectsContainer) return

    let ticking = false
    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement
      const isInsideProjectsContainer = projectsContainer.contains(target)
      
      if (isInsideProjectsContainer) {
        const isProjectContent = target.closest('.project-box-content')
        if (isProjectContent) {
          e.preventDefault()
          
          if (ticking || isScrolling) return
          ticking = true
          setIsScrolling(true)

          if (e.deltaY > 10) {
            setActiveProject((current) => {
              if (current === projects.length - 1) {
                return 0
              }
              return Math.min(current + 1, projects.length - 1)
            })
          } else if (e.deltaY < -10) {
            setActiveProject((current) => {
              if (current === 0) {
                return projects.length - 1
              }
              return Math.max(current - 1, 0)
            })
          }

          setTimeout(() => {
            ticking = false
            setIsScrolling(false)
          }, 600)
        }
      }
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [isScrolling])

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveProject((current) => {
          if (current === projects.length - 1) {
            return 0
          }
          return Math.min(current + 1, projects.length - 1)
        })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveProject((current) => {
          if (current === 0) {
            return projects.length - 1
          }
          return Math.max(current - 1, 0)
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="work" ref={ref} className="py-32 lg:py-40 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-aquamarine/5 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-tropical-indigo/10 border border-tropical-indigo/30 rounded-full text-tropical-indigo font-semibold text-sm mb-8"
          >
            Unsere Arbeit
          </motion.span>
          <h2 className="font-bold mb-8 leading-[0.95]">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-ghost-white text-[clamp(2.5rem,7vw,6rem)]"
            >
              Projekte, auf die wir
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-tropical-indigo text-[clamp(2.5rem,7vw,6rem)]"
            >
              stolz sind
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-ghost-white/70 max-w-4xl mx-auto"
          >
            Ein Einblick in unsere neuesten Entwicklungen und erfolgreichen Projekte
          </motion.p>
        </motion.div>

        {/* Overlapping Projects Section */}
        <div 
          ref={containerRef}
          className="min-h-[70vh] flex items-start justify-center relative cursor-default mb-20"
        >
          <div 
            ref={projectsContainerRef}
            className="w-full max-w-[1400px] px-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={ 
                  index === activeProject 
                    ? { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        zIndex: 30
                      } 
                    : { 
                        opacity: 0.1, 
                        y: index < activeProject ? -60 : 80,
                        scale: 0.9,
                        zIndex: 10
                      } 
                }
                transition={{ 
                  duration: 0.7, 
                  ease: [0.22, 1, 0.36, 1],
                  scale: { duration: 0.6 }
                }}
                className="absolute left-0 right-0 mx-auto w-full"
                style={{ top: '0%' }}
              >
                <div className="project-box-content group relative cursor-pointer">
                  <div className="relative h-[550px] bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 shadow-2xl">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

                    {/* Animated Border Effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.3), transparent)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '200% 0%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-4 py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-sm font-semibold mb-6">
                          {project.category}
                        </span>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-aquamarine transition-colors duration-300 text-ghost-white">
                          {project.title}
                        </h3>
                        
                        <p className="text-ghost-white/70 text-lg lg:text-xl mb-8 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 bg-black/50 border border-ghost-white/10 rounded-full text-ghost-white/60 text-sm hover:border-aquamarine/30 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center gap-3 text-aquamarine font-semibold text-lg group-hover:gap-5 transition-all duration-300">
                          <span>Projekt ansehen</span>
                          <motion.div whileHover={{ x: 5 }}>
                            <HiExternalLink className="text-2xl" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(169, 122, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 border-2 border-tropical-indigo text-tropical-indigo font-bold rounded-full text-xl hover:bg-tropical-indigo hover:text-black transition-all duration-300"
          >
            Alle Projekte ansehen
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiCode, HiLightningBolt, HiCloud, HiCube, HiSparkles, HiChip } from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Webdesign & Entwicklung',
    description: 'Moderne, responsive Websites mit außergewöhnlichem Design und perfekter User Experience.',
    features: ['React & Next.js', 'Responsive Design', 'SEO-optimiert', 'Performance-First'],
  },
  {
    icon: HiSparkles,
    title: 'KI-Lösungen',
    description: 'Intelligente Automatisierung und KI-Integration für Ihr Business der Zukunft.',
    features: ['Chatbots', 'Machine Learning', 'Datenanalyse', 'Automation'],
  },
  {
    icon: HiCube,
    title: 'Web-Apps',
    description: 'Leistungsstarke Progressive Web Apps mit nativer Performance und Offline-Funktionalität.',
    features: ['PWA', 'Cross-Platform', 'Real-time', 'Offline-ready'],
  },
  {
    icon: HiCloud,
    title: 'Azure Cloud',
    description: 'Skalierbare Cloud-Lösungen mit Microsoft Azure für höchste Verfügbarkeit und Sicherheit.',
    features: ['Cloud Migration', 'DevOps', 'Skalierung', 'Monitoring'],
  },
  {
    icon: HiLightningBolt,
    title: 'Full-Stack Development',
    description: 'Komplette Software-Entwicklung von Frontend über Backend bis zur Datenbank.',
    features: ['.NET Core', 'React', 'SQL & NoSQL', 'REST APIs'],
  },
  {
    icon: HiChip,
    title: 'Custom Software',
    description: 'Maßgeschneiderte Softwarelösungen für Ihre individuellen Geschäftsanforderungen.',
    features: ['CRM-Systeme', 'ERP-Integration', 'B2B-Portale', 'Automatisierung'],
  },
]

const Services = () => {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesContainerRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Wheel scroll handler for overlapping effect - only within services container
  useEffect(() => {
    const servicesContainer = servicesContainerRef.current
    if (!servicesContainer) return

    let ticking = false
    const onWheel = (e: WheelEvent) => {
      // Check if we're inside the services container by checking the target element
      const target = e.target as HTMLElement
      const isInsideServicesContainer = servicesContainer.contains(target)
      
      if (isInsideServicesContainer) {
        // Only prevent default if we're actually inside the service box content
        const isServiceContent = target.closest('.service-box-content')
        if (isServiceContent) {
          e.preventDefault()
          
          if (ticking || isScrolling) return
          ticking = true
          setIsScrolling(true)

          if (e.deltaY > 10) {
            setActiveService((current) => {
              if (current === services.length - 1) {
                return 0 // Loop back to first service
              }
              return Math.min(current + 1, services.length - 1)
            })
          } else if (e.deltaY < -10) {
            setActiveService((current) => {
              if (current === 0) {
                return services.length - 1 // Loop back to last service
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
      // If not inside services container content, allow normal scroll
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [isScrolling])

  // Keyboard navigation with looping
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveService((current) => {
          if (current === services.length - 1) {
            return 0 // Loop back to first service
          }
          return Math.min(current + 1, services.length - 1)
        })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveService((current) => {
          if (current === 0) {
            return services.length - 1 // Loop back to last service
          }
          return Math.max(current - 1, 0)
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="services" ref={ref} className="py-12 lg:py-16 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: y }}
          className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-aquamarine/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 lg:px-8">
        {/* Section Header - Small spacing */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 lg:mb-8" // Added small spacing here
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-sm mb-4"
          >
            Unsere Services
          </motion.span>
          <h2 className="font-bold leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-gray-900 text-[clamp(2.5rem,7vw,4.5rem)]"
            >
              Was wir für Sie
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-aquamarine text-[clamp(2.5rem,7vw,4.5rem)]"
            >
              entwickeln können
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mt-4"
          >
            Von der Idee bis zur Umsetzung – wir begleiten Sie durch den gesamten Entwicklungsprozess
          </motion.p>
        </motion.div>

        {/* Overlapping Services Section - With small spacing from title */}
        <div 
          ref={containerRef}
          className="min-h-[60vh] flex items-start justify-center relative cursor-default"
        >
          <div 
            ref={servicesContainerRef}
            className="w-full max-w-[1400px] px-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={ 
                  index === activeService 
                    ? { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        zIndex: 30
                      } 
                    : { 
                        opacity: 0.08, 
                        y: index < activeService ? -40 : 40, 
                        scale: 0.85,
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
                <div className="service-box-content rounded-4xl p-8 lg:p-12 shadow-2xl border border-gray-300/30 bg-white/98 backdrop-blur-sm mx-auto w-full max-w-[1100px]">
                  {/* Service Header */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 mb-8">
                    <motion.div
                      className="flex-shrink-0 flex items-center justify-center w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-3xl shadow-2xl"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <service.icon className="text-4xl lg:text-5xl text-black" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full flex-shrink-0 shadow-md" />
                        <span className="text-lg font-semibold text-gray-800">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Removed Service Indicator dots */}
                </div>
              </motion.div>
            ))}
            
            {/* Removed Navigation Hints text */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
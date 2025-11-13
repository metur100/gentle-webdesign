'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import { useRef, useState, useEffect } from 'react'
import ProjectInquiryModal from '@/components/ProjectInquiryModal'

const Hero = () => {
  const { scrollY } = useScroll()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const titleControls = useAnimation()
  const contentControls = useAnimation()

  // Scroll transformations
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  // Service offerings for background
  const serviceOfferings = [
    "Web Development",
    "AI Integration",
    "Cloud Solutions",
    "E-Commerce",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Azure Cloud",
    "API Development",
    "Database Design",
    "Progressive Web Apps",
    "Cloud Migration",
    "Digital Transformation",
    "Software Architecture"
  ]

  // Floating service tags
  const floatingServices = serviceOfferings.map((service, index) => ({
    service,
    delay: index * 0.8,
    duration: 10 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100
  }))

  // Hero title animation sequence - FASTER
  useEffect(() => {
    async function sequence() {
      // Start title animation - faster timing
      await titleControls.start({ 
        scale: 1.05, 
        opacity: 1, 
        filter: 'blur(8px)', 
        transition: { duration: 0.6 } // Faster: 0.6s instead of 0.8s
      })
      await titleControls.start({ 
        scale: 0.8, 
        opacity: 1, 
        filter: 'blur(2px)', 
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // Faster: 0.7s instead of 0.9s
      })
      await titleControls.start({ 
        scale: 0.96, 
        filter: 'blur(0px)', 
        transition: { duration: 0.4 } // Faster: 0.4s instead of 0.6s
      })
      
      // Then show the rest of the content - faster
      await contentControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4 } // Faster: 0.4s instead of 0.6s
      })
    }
    sequence()
  }, [titleControls, contentControls])

  // Fix hydration by ensuring consistent random values
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Pure Black Background - Removed all background effects */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Removed video background */}
          {/* Removed gradient overlay */}
          {/* Removed hexagon pattern */}
        </div>

        {/* Floating Service Tags - Made more visible */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingServices.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-ghost-white/40 text-sm font-light px-3 py-1 rounded-full border border-ghost-white/20 backdrop-blur-sm" // Increased opacity
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4], // Increased opacity range
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.service}
            </motion.div>
          ))}
        </div>

        {/* Connection Lines - Made more visible */}
        <svg className="absolute inset-0 w-full h-full opacity-20"> {/* Increased opacity */}
          <motion.line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="70%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            animate={{
              strokeDasharray: ["0 100", "100 0"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.line
            x1="80%"
            y1="30%"
            x2="20%"
            y2="70%"
            stroke="url(#gradient2)"
            strokeWidth="1"
            animate={{
              strokeDasharray: ["100 0", "0 100"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01FFA9" stopOpacity="0.8" /> {/* Increased opacity */}
              <stop offset="100%" stopColor="#A97AFF" stopOpacity="0.8" /> {/* Increased opacity */}
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A97AFF" stopOpacity="0.8" /> {/* Increased opacity */}
              <stop offset="100%" stopColor="#01FFA9" stopOpacity="0.8" /> {/* Increased opacity */}
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-20 w-full max-w-full mx-auto px-6 sm:px-12 lg:px-20"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-5xl text-center">
              {/* Main Title with Animation */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 1.4 }}
                  animate={titleControls}
                  style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                  className="leading-tight"
                >
                  <div className="text-ghost-white text-[clamp(5.5rem,10vw,6.5rem)] bg-gradient-to-r from-ghost-white to-ghost-white/90 bg-clip-text text-transparent">
                    Gentle Webdesign
                  </div>
                  {/* More visible Digital Solutions text */}
                  <div className="text-aquamarine text-[clamp(2.5rem,10vw,5.5rem)] bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(1,255,169,0.5)]">
                    Digital Solutions
                  </div>
                </motion.div>
              </div>

              {/* Subtitle - Made much more visible */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={contentControls}
                className="mt-8 text-ghost-white/90 text-xl md:text-2xl font-medium mb-12" // Increased opacity to 90%
              >

              </motion.div>

              {/* Description Text - More visible */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={contentControls}
                className="text-2xl md:text-4xl lg:text-2xl text-ghost-white/95 mb-12 leading-relaxed max-w-4xl mx-auto font-medium" // Increased opacity to 95%
              >
                Wir entwickeln innovative Websites, moderne Webanwendungen, AI-Integrationen und cloud-basierte Lösungen für Ihr Business.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentControls}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 60px rgba(1, 255, 169, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="relative px-16 py-6 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Jetzt starten
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <HiSparkles className="text-xl" />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Subtle backdrop blur layer to support hero effect */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/0" />
      </section>

      {/* Render modal only when isModalOpen is true */}
      {isModalOpen && (
        <ProjectInquiryModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default Hero
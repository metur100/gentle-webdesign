'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import { useRef, useState, useEffect } from 'react'
import ProjectInquiryModal from '@/components/ProjectInquiryModal' // Import the modal

const Hero = () => {
  const { scrollY } = useScroll()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // Control modal visibility

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

  // Fix hydration by ensuring consistent random values
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Unique Background with Geometric Patterns */}
        <div className="absolute inset-0 z-0">
          {/* Main Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <source
              src="https://videos.pexels.com/video-files/855005/855005-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Enhanced Geometric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black" />

          {/* Hexagon Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-28 bg-aquamarine/10 clip-hexagon" />
            <div className="absolute bottom-40 right-32 w-24 h-21 bg-tropical-indigo/10 clip-hexagon" />
            <div className="absolute top-1/2 left-1/2 w-16 h-14 bg-aquamarine/10 clip-hexagon" />
          </div>
        </div>

        {/* Floating Service Tags */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingServices.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-ghost-white/20 text-sm font-light px-3 py-1 rounded-full border border-ghost-white/10 backdrop-blur-sm"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.6, 0.3],
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

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
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
              <stop offset="0%" stopColor="#01FFA9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A97AFF" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A97AFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#01FFA9" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-20 w-full max-w-full mx-auto px-6 sm:px-12 lg:px-20"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-5xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-extrabold mb-8 leading-tight"
              >
                <span className="block text-ghost-white text-[clamp(5.5rem,10vw,6.5rem)] bg-gradient-to-r from-ghost-white to-ghost-white/80 bg-clip-text text-transparent">
                  Gentle Webdesign
                </span>
                <span className="block text-aquamarine text-[clamp(2.5rem,10vw,5.5rem)] bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-2xl md:text-4xl lg:text-2xl text-ghost-white/75 mb-12 leading-relaxed max-w-4xl mx-auto"
              >
                Wir entwickeln innovative Websites, moderne Webanwendungen, AI-Integrationen und cloud-basierte Lösungen für Ihr Business.
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 60px rgba(1, 255, 169, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} // Open modal on click
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
      </section>

      {/* Render modal only when isModalOpen is true */}
      {isModalOpen && (
        <ProjectInquiryModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default Hero
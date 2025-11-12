'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-digital-wave-lines-7815/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-oxford-blue/50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 w-full max-w-full mx-auto px-6 sm:px-12 lg:px-20"
      >
        <div className="flex items-center justify-center min-h-screen">
          {/* Centered Content */}
          <div className="max-w-5xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-extrabold mb-8 leading-tight"
            >
              <span className="block text-ghost-white text-[clamp(3.5rem,10vw,6.5rem)]">Gentle Webdesign</span>
              <span className="block text-aquamarine text-[clamp(3.5rem,10vw,6.5rem)]">Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-xl md:text-2xl lg:text-3xl text-ghost-white/75 mb-12 leading-relaxed"
            >
              Maßgeschneiderte Web‑ und Software‑Lösungen — durchdachtes Design, Top‑Performance und zuverlässige Cloud‑Integration.
            </motion.p>

            {/* Main CTA Button with Circular Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-12 mb-16"
            >

              {/* Main Action Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(1, 255, 169, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const modal = document.getElementById('project-inquiry-modal')
                  if (modal) modal.style.display = 'flex'
                }}
                className="px-16 py-6 border-2 border-aquamarine text-ghost-white font-bold rounded-full text-2xl hover:bg-aquamarine hover:text-black transition-all duration-300"
              >
                Jetzt starten
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

     </section>
   )
 }

 export default Hero

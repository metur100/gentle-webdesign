'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const NeedProject = () => {
  const handleClick = () => {
    const modal = document.getElementById('project-inquiry-modal')
    if (modal) modal.style.display = 'flex'
  }

  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-gradient-to-r from-black via-oxford-blue to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-aquamarine/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-tropical-indigo/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-ghost-white">
            <span className="block mb-4">Sie haben ein Projekt?</span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-aquamarine"
            >
              Sprechen Sie mit uns
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-ghost-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Egal ob Website, Web-App, KI-Integration oder Cloud-Migration – unser Team unterstützt Sie von der Ideenfindung bis zur Umsetzung.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(1, 255, 169, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="group relative px-16 py-7 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-aquamarine/50 transition-all duration-300 flex items-center gap-4 mx-auto"
          >
            <span>Projekt starten</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiArrowRight className="text-2xl" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default NeedProject;

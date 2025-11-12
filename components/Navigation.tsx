'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HiMenu, HiX } from 'react-icons/hi'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      {/* Top Navigation - Hidden Logo/Desktop for reference */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-oxford-blue/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Only visible at top */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Gentle Webdesign"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-ghost-white text-3xl z-50"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-oxford-blue/98 backdrop-blur-xl"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl text-ghost-white hover:text-aquamarine transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-xl"
                >
                  Kontakt
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Center Navigation - Fixed at bottom */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed bottom-0 inset-x-0 z-50 mb-8 flex justify-center pointer-events-none"
      >
        <motion.div
          className="pointer-events-auto px-8 py-5 bg-black/85 backdrop-blur-xl border border-ghost-white/20 rounded-full shadow-2xl hover:border-aquamarine/50 transition-all duration-300"
          whileHover={{ boxShadow: "0 0 30px rgba(1, 255, 169, 0.3)" }}
        >
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, color: '#01FFA9' }}
                className="text-ghost-white/70 hover:text-aquamarine transition-colors text-sm font-medium whitespace-nowrap hidden sm:inline"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Kontakt CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-6 py-2 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-sm shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
            >
              Kontakt
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}

export default Navigation

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aquamarine/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-12">
        {/* Footer Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-ghost-white/10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.png"
                alt="Gentle Webdesign"
                width={200}
                height={67}
                className="h-14 w-auto mb-6"
              />
              <p className="text-ghost-white/70 mb-6 max-w-md leading-relaxed">
                Wir sind Ihr Partner für innovative Softwarelösungen, modernes Webdesign 
                und KI-Integration. Von der Idee bis zur Umsetzung – wir gestalten digitale Zukunft.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaTwitter className="text-lg" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaInstagram className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-gradient">Navigation</h4>
            <ul className="space-y-3">
              {['Services', 'Work', 'Team', 'Reviews', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-ghost-white/70 hover:text-aquamarine transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-gradient">Services</h4>
            <ul className="space-y-3">
              {['Webdesign', 'KI-Lösungen', 'Web-Apps', 'Azure Cloud', 'Full-Stack'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-ghost-white/70 hover:text-aquamarine transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-ghost-white/60 text-sm"
        >
          <p>
            © {currentYear} Gentle Webdesign. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-aquamarine transition-colors duration-300">
              Datenschutz
            </a>
            <a href="#" className="hover:text-aquamarine transition-colors duration-300">
              Impressum
            </a>
            <a href="#" className="hover:text-aquamarine transition-colors duration-300">
              AGB
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;

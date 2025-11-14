'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="services" ref={ref} className="py-32 lg:py-40 relative overflow-hidden bg-white">
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

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          style={{ opacity }}
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
            className="inline-block px-6 py-3 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-sm mb-8"
          >
            Unsere Services
          </motion.span>
          <h2 className="font-bold mb-8 leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-gray-900 text-[clamp(2.5rem,7vw,6rem)]"
            >
              Was wir für Sie
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-aquamarine text-[clamp(2.5rem,7vw,6rem)]"
            >
              entwickeln können
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto"
          >
            Von der Idee bis zur Umsetzung – wir begleiten Sie durch den gesamten Entwicklungsprozess
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border on Hover */}
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
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-2xl mb-6 group-hover:shadow-2xl group-hover:shadow-aquamarine/50 transition-all duration-300"
                  >
                    <service.icon className="text-4xl text-black" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-aquamarine transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3 text-gray-700 text-base"
                      >
                        <div className="w-2 h-2 bg-aquamarine rounded-full group-hover:scale-150 transition-transform duration-300" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
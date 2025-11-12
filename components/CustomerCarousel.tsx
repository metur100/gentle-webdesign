'use client'

import { motion } from 'framer-motion'

const CustomerCarousel = () => {
  const customers = [
    { name: 'Google', initials: 'G' },
    { name: 'Amazon', initials: 'A' },
    { name: 'Microsoft', initials: 'M' },
    { name: 'Apple', initials: 'AP' },
    { name: 'Meta', initials: 'M' },
    { name: 'Adobe', initials: 'Ad' },
  ]

  // Duplicate for seamless loop
  const extendedCustomers = [...customers, ...customers, ...customers]

  return (
    <section className="py-20 relative overflow-hidden bg-white">

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 lg:gap-24"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {extendedCustomers.map((customer, index) => (
            <motion.div
              key={`${customer.name}-${index}`}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center flex-shrink-0 w-40 h-32 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-aquamarine/50 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-aquamarine mb-2">
                  {customer.initials}
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  {customer.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}

export default CustomerCarousel

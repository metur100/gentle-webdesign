'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useRef, useState } from 'react'

const team = [
  {
    name: 'Berk-Can',
    role: 'Founder & Lead Developer',
    description: 'Full-Stack Entwickler mit Expertise in React, .NET und Azure Cloud Solutions.',
    expertise: ['React/Next.js', '.NET Core', 'Azure Cloud', 'AI Integration'],
    initialX: -300
  },
  {
    name: 'Medin Turkes',
    role: 'Backend Specialist',
    description: 'Experte für skalierbare Backend-Architekturen und Datenbank-Design.',
    expertise: ['C# .NET', 'SQL', 'API Design', 'DevOps', "NoSQL"],
    initialX: 300
  },
]

const Team = () => {
  const ref = useRef(null)
  const [hasCollided, setHasCollided] = useState(false)
  const collisionTriggered = useRef(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Team member movement - start separated and come together
  const member1X = useTransform(scrollYProgress, [0, 0.4], [-300, 0])
  const member2X = useTransform(scrollYProgress, [0, 0.4], [300, 0])
  
  // Opacity and scale for collision effect
  const collisionScale = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [1, 1.1, 1])
  const collisionOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [1, 0.7, 1])

  // Background elements parallax
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Detect collision
  const unsubscribeRef = useRef<(() => void) | null>(null)
  
  if (typeof window !== 'undefined') {
    unsubscribeRef.current?.()
    unsubscribeRef.current = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.38 && latest <= 0.42 && !collisionTriggered.current) {
        collisionTriggered.current = true
        setHasCollided(true)
        
        // Reset after animation
        setTimeout(() => {
          setHasCollided(false)
        }, 1000)
      }
    })
  }

  return (
    <section 
      ref={ref} 
      id="team" 
      className="py-48 relative overflow-hidden bg-white min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <motion.div
          style={{ y }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aquamarine/5 rounded-full blur-[100px]" 
        />
        <motion.div
          style={{ y }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-tropical-indigo/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
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
            className="inline-block px-6 py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold mb-6"
          >
            Unser Team
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900">
            <span className="block">Die Köpfe hinter</span>
            <span className="block text-aquamarine">Gentle Webdesign</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ein eingespieltes Team aus Entwicklern, Designern und Innovatoren
          </p>
        </motion.div>

        {/* Team Grid with Collision Animation */}
        <div className="grid md:grid-cols-2 gap-12 relative">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              style={{
                x: index === 0 ? member1X : member2X,
                scale: collisionScale,
                opacity: collisionOpacity
              }}
              className="group"
            >
              <motion.div
                animate={hasCollided ? {
                  scale: [1, 1.05, 1],
                  rotate: index === 0 ? [0, -1, 1, 0] : [0, 1, -1, 0],
                } : {}}
                transition={{ 
                  duration: 0.6,
                  times: [0, 0.3, 0.6, 1]
                }}
                className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-12 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl"
              >
                {/* Collision Glow Effect */}
                <motion.div
                  animate={hasCollided ? {
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.2, 1.5]
                  } : {}}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 rounded-3xl ${
                    index === 0 
                      ? 'bg-gradient-to-br from-aquamarine/10 to-tropical-indigo/10' 
                      : 'bg-gradient-to-br from-tropical-indigo/10 to-aquamarine/10'
                  }`}
                />
                
                <div className="relative z-10">
                  {/* Avatar Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-40 h-40 mx-auto mb-8 rounded-full flex items-center justify-center text-oxford-blue font-bold text-6xl shadow-lg group-hover:shadow-aquamarine/50 transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo'
                        : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'
                    }`}
                  >
                    {member.name.charAt(0)}
                  </motion.div>

                  {/* Name & Role */}
                  <h3 className="text-3xl font-bold mb-3 text-center text-gray-900 group-hover:text-aquamarine transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-tropical-indigo text-base font-semibold mb-6 text-center">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-6">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors"
                    >
                      <HiMail className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors"
                    >
                      <FaLinkedin className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team
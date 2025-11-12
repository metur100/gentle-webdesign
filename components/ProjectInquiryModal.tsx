'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  projectType: string
  description: string
  timeline: string
  budget: string
}

const ProjectInquiryModal = () => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const modal = document.getElementById('project-inquiry-modal')
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal()
        }
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      const modal = document.getElementById('project-inquiry-modal')
      if (modal) modal.style.display = 'none'
      setStep(0)
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: '',
        timeline: '',
        budget: '',
      })
    }, 300)
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      submitForm()
    }
  }

  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const submitForm = async () => {
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Vielen Dank! Wir werden uns bald bei Ihnen melden.')
    closeModal()
  }

  useEffect(() => {
    const modal = document.getElementById('project-inquiry-modal')
    if (modal && modal.style.display === 'flex') {
      setIsVisible(true)
    }
  }, [])

  const questions = [
    {
      label: 'Wie heißen Sie?',
      key: 'name',
      type: 'text',
      placeholder: 'Ihr Name...',
    },
    {
      label: 'Was ist Ihre E-Mail-Adresse?',
      key: 'email',
      type: 'email',
      placeholder: 'ihre@email.com',
    },
    {
      label: 'Welche Art von Projekt benötigen Sie?',
      key: 'projectType',
      type: 'select',
      options: [
        'Website/Webdesign',
        'Web-App',
        'Mobile App',
        'KI-Lösung',
        'Cloud Migration',
        'Sonstiges',
      ],
    },
    {
      label: 'Beschreiben Sie Ihr Projekt in Detail',
      key: 'description',
      type: 'textarea',
      placeholder: 'Erzählen Sie uns mehr über Ihre Anforderungen...',
    },
    {
      label: 'Wann möchten Sie das Projekt starten?',
      key: 'timeline',
      type: 'select',
      options: ['ASAP (1-2 Wochen)', 'Nächster Monat', 'In 2-3 Monaten', 'Noch nicht festgelegt'],
    },
    {
      label: 'Budget (optional)',
      key: 'budget',
      type: 'select',
      options: ['< €5.000', '€5.000 - €15.000', '€15.000 - €50.000', '€50.000+', 'Noch nicht festgelegt'],
    },
  ]

  const currentQuestion = questions[step]

  return (
    <div
      id="project-inquiry-modal"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-black to-oxford-blue/80 border border-aquamarine/30 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={closeModal}
            className="absolute top-6 right-6 text-ghost-white/60 hover:text-aquamarine transition-colors z-10"
          >
            <HiX className="text-3xl" />
          </motion.button>

          {/* Progress Bar */}
          <div className="mb-8 flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  index <= step ? 'bg-aquamarine' : 'bg-ghost-white/10'
                }`}
              />
            ))}
          </div>

          {/* Question */}
          <h2 className="text-3xl md:text-4xl font-bold text-ghost-white mb-8 leading-tight">
            {currentQuestion.label}
          </h2>

          {/* Input Field */}
          <div className="mb-8">
            {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={formData[currentQuestion.key as keyof FormData]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [currentQuestion.key]: e.target.value,
                  })
                }
                className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg"
              />
            ) : currentQuestion.type === 'textarea' ? (
              <motion.textarea
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                placeholder={currentQuestion.placeholder}
                value={formData[currentQuestion.key as keyof FormData]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [currentQuestion.key]: e.target.value,
                  })
                }
                className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg h-32 resize-none"
              />
            ) : (
              <motion.select
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                value={formData[currentQuestion.key as keyof FormData]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [currentQuestion.key]: e.target.value,
                  })
                }
                className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-xl text-ghost-white focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg"
              >
                <option value="">Bitte wählen...</option>
                {(currentQuestion as any).options?.map((option: string) => (
                  <option key={option} value={option} className="bg-oxford-blue">
                    {option}
                  </option>
                ))}
              </motion.select>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              disabled={step === 0}
              className="px-8 py-3 border border-ghost-white/30 text-ghost-white font-bold rounded-full hover:border-ghost-white/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Zurück
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={!formData[currentQuestion.key as keyof FormData]}
              className="px-8 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full hover:shadow-lg hover:shadow-aquamarine/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {step === questions.length - 1 ? 'Absenden' : 'Weiter'}
            </motion.button>
          </div>

          {/* Step Counter */}
          <div className="text-center mt-6 text-ghost-white/50 text-sm">
            Schritt {step + 1} von {questions.length}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProjectInquiryModal

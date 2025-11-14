'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ProjectInquiryModal from '@/components/ProjectInquiryModal'
import Image from 'next/image'

// Type definitions for model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          ar?: boolean
          'ar-modes'?: string
          'environment-image'?: string
          'auto-rotate'?: boolean
          'camera-controls'?: boolean
          'camera-orbit'?: string
          'interaction-prompt'?: string
          'shadow-intensity'?: string | number
        },
        HTMLElement
      >
    }
  }
}

const Hero = () => {
  const { scrollY } = useScroll()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const titleControls = useAnimation()
  const contentControls = useAnimation()
  const modelViewerRef = useRef<any>(null)

  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  const rotatingTexts = [
    "innovative Websites",
    "moderne Webanwendungen", 
    "AI-Integrationen",
    "cloud-basierte Lösungen für Ihr Business"
  ]

  useEffect(() => {
    async function sequence() {
      await titleControls.start({ 
        scale: 1.05, 
        opacity: 1, 
        filter: 'blur(8px)', 
        transition: { duration: 1.2 }
      })
      await titleControls.start({ 
        scale: 0.8, 
        opacity: 1, 
        filter: 'blur(2px)', 
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
      })
      await titleControls.start({ 
        scale: 0.96, 
        filter: 'blur(0px)', 
        transition: { duration: 0.8 }
      })

      await contentControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8 }
      })
    }
    sequence()
  }, [titleControls, contentControls])

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = rotatingTexts[currentTextIndex]
    
    if (!isDeleting && displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && displayText.length === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }
  }, [displayText, isDeleting, currentTextIndex, rotatingTexts])

// In your Hero component, replace the useEffect with model-viewer click handler:

useEffect(() => {
  if (typeof window !== 'undefined' && modelViewerRef.current) {
    const modelViewer = modelViewerRef.current
    
    const handleClick = () => {
      // Open the AI questionnaire in a new tab
      window.open('/project-questionnaire', '_blank', 'noopener,noreferrer')
    }
    
    modelViewer.addEventListener('click', handleClick)
    
    return () => {
      modelViewer.removeEventListener('click', handleClick)
    }
  }
}, [])

  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        async
      />

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-black" />

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
              <stop offset="0%" stopColor="#01FFA9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A97AFF" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A97AFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#01FFA9" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center min-h-screen py-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={contentControls}
              className="flex justify-center mb-4"
            >
<Image
  src="/logo.png"
  alt="Gentle Webdesign"
  width={800}         // ⬅ increase width
  height={300}        // ⬅ increase height
  className="h-56 w-auto"  // ⬅ increase display size (was h-44)
  priority
/>

            </motion.div>

            <div className="mb-4 min-h-[160px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 1.4 }}
                animate={titleControls}
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                className="leading-[0.9]"
              >
                <div className="text-ghost-white bg-gradient-to-r from-ghost-white to-ghost-white/90 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
                  <span className="text-[clamp(8rem,13vw,10rem)] inline-block">
                    GENTLE WEBDESIGN
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={contentControls}
              className="text-2xl md:text-3xl lg:text-2xl text-ghost-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium min-h-[60px] flex items-center justify-center"
            >
              <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-3 rounded-2xl border border-ghost-white/10">
                Wir entwickeln{" "}
                <span className="text-aquamarine font-semibold">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </span>
            </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={contentControls}
  className="flex justify-center mt-8 mb-20 relative"
>
  <div className="relative cursor-pointer flex justify-center items-center w-full">
    <motion.div
      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-white/95 text-black px-6 py-3 rounded-full text-lg font-semibold whitespace-nowrap backdrop-blur-sm border border-ghost-white/30 shadow-lg z-30"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Need a project? Click me!
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-ghost-white/95 rotate-45" />
    </motion.div>

    <div className="relative w-[550px] h-[550px] flex justify-center">
      {/* @ts-ignore */}
      <model-viewer
        ref={modelViewerRef}
        src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
        alt="3D Developer Avatar"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        camera-orbit="0deg 75deg 105%"
        interaction-prompt="none"
        shadow-intensity="1"
        className="w-full h-full cursor-pointer rounded-2xl"
      >
      </model-viewer>
    </div>
  </div>
</motion.div>

          </div>
        </motion.div>
      </section>

      {isModalOpen && (
        <ProjectInquiryModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default Hero
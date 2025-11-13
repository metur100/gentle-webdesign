'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: 'Welche Technologien nutzt ihr für Webentwicklung?',
    answer: 'Wir setzen auf moderne Technologien wie React, Next.js, TypeScript für Frontend-Entwicklung. Im Backend arbeiten wir mit .NET Core, Node.js und nutzen Azure Cloud für Hosting und Services. Für Datenbanken verwenden wir SQL Server, PostgreSQL oder MongoDB je nach Projektanforderung.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer: 'Die Entwicklungszeit hängt vom Projektumfang ab. Eine einfache Corporate Website kann in 2-4 Wochen fertig sein, während komplexe Web-Apps oder E-Commerce-Plattformen 2-4 Monate benötigen können. Wir erstellen für jedes Projekt einen detaillierten Zeitplan.',
  },
  {
    question: 'Bietet ihr auch Wartung und Support an?',
    answer: 'Ja, wir bieten umfassende Wartungs- und Support-Pakete an. Diese beinhalten regelmäßige Updates, Security-Patches, Performance-Optimierung, Backup-Management und technischen Support. Sie können zwischen verschiedenen Service-Leveln wählen.',
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Die Kosten variieren je nach Anforderungen. Eine einfache Landing Page startet ab 2.000€, während umfangreiche Web-Anwendungen mit Custom Features zwischen 10.000€ - 50.000€+ liegen können. Wir erstellen gerne ein individuelles Angebot nach einem kostenlosen Erstgespräch.',
  },
  {
    question: 'Können bestehende Systeme integriert werden?',
    answer: 'Absolut! Wir haben umfangreiche Erfahrung mit der Integration von CRM-Systemen, ERP-Software, Payment-Gateways, Microsoft 365, SharePoint und vielen anderen Drittanbieter-Services. API-Integration und Datenmigrationen gehören zu unseren Kernkompetenzen.',
  },
  {
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer: 'Nach einem Erstgespräch erstellen wir ein Konzept und Angebot. Bei Projektstart arbeiten wir in agilen Sprints mit regelmäßigen Updates und Feedback-Schleifen. Sie haben jederzeit Einblick in den Entwicklungsstand über unser Projektmanagement-Tool und einen dedizierten Ansprechpartner.',
  },
  {
    question: 'Sind eure Websites mobilfreundlich?',
    answer: 'Ja, alle unsere Websites sind vollständig responsive und für alle Geräte optimiert. Wir verfolgen einen Mobile-First-Ansatz, da heute über 60% der Nutzer mobil auf Websites zugreifen. Performance und Usability auf Smartphones sind uns extrem wichtig.',
  },
  {
    question: 'Was ist mit SEO und Performance?',
    answer: 'SEO und Performance sind von Anfang an in unseren Entwicklungsprozess integriert. Wir optimieren Ladezeiten, nutzen moderne Techniken wie Code Splitting, implementieren strukturierte Daten, sorgen für saubere URLs und optimale Meta-Tags. Auf Wunsch bieten wir auch fortlaufende SEO-Betreuung an.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-aquamarine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold mb-6"
          >
            FAQ
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            <span className="block">Häufig gestellte</span>
            <span className="block text-aquamarine">Fragen</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Alles was Sie über unsere Services wissen müssen
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-aquamarine/50 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <HiChevronDown className="text-2xl text-aquamarine" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 text-gray-700 text-lg leading-relaxed border-t border-gray-200 mt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Noch Fragen?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl">
              Unser Team steht Ihnen gerne für ein persönliches Gespräch zur Verfügung.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
            >
              Kontakt aufnehmen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ;

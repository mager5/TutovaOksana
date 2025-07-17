'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Clock, Video, MessageCircle, CreditCard } from 'lucide-react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqData = [
    {
      icon: Video,
      question: "Как проходит консультация?",
      answer: "Консультации проходят онлайн в удобном для вас формате. Длительность сессии составляет 55 минут. Мы используем безопасные платформы для видеосвязи, которые гарантируют конфиденциальность нашего разговора."
    },
    {
      icon: Clock,
      question: "Сколько длится одна сессия?",
      answer: "Стандартная продолжительность консультации — 55 минут. Этого времени достаточно для глубокой работы, но при этом не происходит переутомления. В особых случаях возможно изменение длительности по согласованию."
    },
    {
      icon: MessageCircle,
      question: "Как часто нужно проходить консультации?",
      answer: "Частота встреч определяется индивидуально, исходя из ваших потребностей и запроса. Обычно это 1 раз в неделю или 1 раз в две недели. Мы всегда можем скорректировать график в процессе работы."
    },
    {
      icon: CreditCard,
      question: "Какие способы оплаты доступны?",
      answer: "Принимаю оплату банковскими картами, переводом на карту или через системы онлайн-платежей. Оплата производится до начала сессии. При покупке пакета сессий предоставляются скидки."
    },
    {
      question: "Что если мне не подойдет ваш подход?",
      answer: "Это абсолютно нормально! Важно найти специалиста, с которым вы чувствуете себя комфортно. Если после первой консультации вы поймете, что мой подход вам не подходит, мы честно об этом поговорим, и я помогу найти другого специалиста."
    },
    {
      question: "Гарантируете ли вы конфиденциальность?",
      answer: "Абсолютно! Конфиденциальность — основа психологической работы. Вся информация, которой вы делитесь, остается строго между нами. Я соблюдаю профессиональную этику и никогда не разглашаю детали наших встреч."
    },
    {
      question: "Можно ли отменить или перенести сессию?",
      answer: "Да, конечно. Прошу уведомлять об отмене или переносе не менее чем за 24 часа. Это позволяет перепланировать время и предложить его другим клиентам. При отмене менее чем за 24 часа сессия может быть засчитана как проведенная."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-bg-secondary no-horizontal-scroll" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 no-horizontal-scroll">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            Как проходят консультации
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ответы на часто задаваемые вопросы о процессе консультирования
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => {
            const IconComponent = item.icon
            const isOpen = openIndex === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                >
                  <div className="flex items-center space-x-4">
                    {IconComponent && (
                      <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-accent-blue" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-text-secondary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <p className="text-text-secondary leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-accent-blue/10 rounded-2xl p-6">
            <p className="text-text-secondary">
              Остались вопросы? Напишите мне, и я с радостью на них отвечу!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
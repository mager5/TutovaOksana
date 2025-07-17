'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Calendar, Play } from 'lucide-react'

const Booking = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Нажмите на кнопку",
      description: "Нажмите кнопку \"Записаться на консультацию\" и перейдите в Telegram"
    },
    {
      icon: MessageCircle,
      number: "02", 
      title: "Напишите в Telegram",
      description: "Расскажите кратко о своем запросе и удобном для вас времени"
    },
    {
      icon: Calendar,
      number: "03",
      title: "Договоримся об удобном времени",
      description: "Мы найдем подходящее время для консультации и отправим ссылку на встречу"
    }
  ]

  const handleBookingClick = () => {
    // Здесь будет ссылка на Telegram
    window.open('https://t.me/karmaterapy', '_blank')
  }

  return (
    <section id="booking" className="py-20 bg-bg-primary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            Как записаться на консультацию
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Простой процесс записи всего в три шага
          </p>
        </motion.div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Соединительная линия */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-accent-blue/30 transform -translate-y-1/2 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                      className="h-full bg-accent-blue origin-left"
                    />
                  </div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Номер шага */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg"
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Иконка */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent className="w-6 h-6 text-accent-blue" />
                  </motion.div>
                  
                  {/* Заголовок */}
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Описание */}
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
              Готовы начать путь к изменениям?
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Первый шаг — самый важный. Не откладывайте заботу о себе на потом.
            </p>
            
            <motion.button
              onClick={handleBookingClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-cta-button text-text-primary font-semibold rounded-full hover:bg-cta-button/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="mr-3 w-5 h-5" />
              Записаться на консультацию
            </motion.button>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-secondary">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Быстрый ответ в течение часа
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Гибкое расписание
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Полная конфиденциальность
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking
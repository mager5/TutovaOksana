'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Heart, 
  Users, 
  TrendingUp, 
  RotateCcw, 
  Calendar, 
  Shield, 
  Compass 
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Brain,
      title: "Тревога и стресс",
      description: "Работа с тревожными состояниями, паническими атаками и хроническим стрессом"
    },
    {
      icon: Heart,
      title: "Депрессия",
      description: "Поддержка при депрессивных состояниях, апатии и потере интереса к жизни"
    },
    {
      icon: Users,
      title: "Проблемы в отношениях",
      description: "Сложности в семье, с партнером, друзьями или коллегами"
    },
    {
      icon: TrendingUp,
      title: "Самооценка и уверенность",
      description: "Работа с низкой самооценкой, неуверенностью в себе и своих силах"
    },
    {
      icon: RotateCcw,
      title: "Переходные периоды",
      description: "Поддержка в кризисные моменты жизни, смена работы, переезд, развод"
    },
    {
      icon: Calendar,
      title: "Самоорганизация",
      description: "Проблемы с планированием, прокрастинация, тайм-менеджмент"
    },
    {
      icon: Shield,
      title: "Травмы и утраты",
      description: "Работа с психологическими травмами, горем и процессом утраты"
    },
    {
      icon: Compass,
      title: "Поиск смысла жизни",
      description: "Вопросы самоопределения, поиск жизненных целей и предназначения"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            С какими запросами я работаю
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Каждый запрос уникален, и я подхожу к работе с ним индивидуально, 
            используя интуитивно-ориентированную практику
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-blue/30"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent-blue" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-bg-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-text-secondary italic text-lg">
              "Не нашли свой запрос в списке? Не беспокойтесь — каждая ситуация уникальна, 
              и мы обязательно найдем подходящий способ работы именно с вашим случаем."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
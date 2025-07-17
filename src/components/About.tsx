'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Heart, Sparkles } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            Обо мне
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Фото */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Тутова Оксана Сергеевна"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-blue/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cta-button/30 rounded-full blur-lg"></div>
          </motion.div>

          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-2">
                Тутова Оксана Сергеевна
              </h3>
              <p className="text-accent-blue font-medium text-lg">
                Психолог, специалист по интуитивно-ориентированной практике
              </p>
            </div>

            {/* Образование */}
            <motion.div 
              className="flex items-start space-x-3 p-4 bg-bg-primary rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="w-6 h-6 text-accent-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary mb-1">Образование</h4>
                <p className="text-text-secondary">
                  Кубанский государственный университет<br />
                  Специальности: управление персоналом, психологическое консультирование
                </p>
              </div>
            </motion.div>

            {/* Подход */}
            <motion.div 
              className="flex items-start space-x-3 p-4 bg-bg-primary rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-6 h-6 text-accent-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary mb-1">Мой подход</h4>
                <p className="text-text-secondary">
                  Работаю в интуитивно-ориентированной практике. 
                  Каждая консультация подстраивается под ваше состояние.
                </p>
              </div>
            </motion.div>

            {/* Особенности */}
            <motion.div 
              className="flex items-start space-x-3 p-4 bg-bg-primary rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-accent-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary mb-1">Что делает меня особенной</h4>
                <p className="text-text-secondary">
                  Помогаю распутывать сложные ситуации, чувствую энергетический фон, 
                  и соединяю классическую психологию с глубинным сопровождением.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <p className="text-text-secondary italic text-center lg:text-left">
                "Каждый человек уникален, и путь к гармонии у каждого свой. 
                Моя задача — помочь вам найти этот путь."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
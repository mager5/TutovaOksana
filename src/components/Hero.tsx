'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacts')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Современный оверлей для улучшения читаемости */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Откройте двери к своему{' '}
            <span className="text-accent-blue drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>внутреннему миру</span>
          </motion.h1>

          <motion.div 
            className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-xl"
            style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="mb-4">
              Вас мучают тревога, стресс или нерешённые проблемы? Наши консультации — это не просто разговор, 
              это путь к пониманию себя и гармонии в жизни.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base mb-6">
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 shadow-lg"></span>
                <span style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Индивидуальный подход</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 shadow-lg"></span>
                <span style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Безопасное пространство</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 shadow-lg"></span>
                <span style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Проверенные методики</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 shadow-lg"></span>
                <span style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Гибкий график</span>
              </div>
            </div>
            
            <p style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
              Запишитесь на первую консультацию и начните путь к лучшей версии себя.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-cta-button text-text-primary font-semibold rounded-full hover:bg-cta-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Задай мне вопрос
              <ArrowDown className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Анимированная стрелка вниз */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-text-secondary" />
      </motion.div>
    </section>
  )
}

export default Hero
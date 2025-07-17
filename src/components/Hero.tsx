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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-0 pb-16 sm:pb-20">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/DSC_1449-2.jpg)',
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 lg:space-y-16"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Откройте двери к своему{' '}
            <span className="text-white">внутреннему миру</span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5), 0 0 6px rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Вас мучают тревога, стресс или нерешённые проблемы? Наши консультации — это не просто разговор, 
            это путь к пониманию себя и гармонии в жизни.
          </motion.p>
            
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Запишитесь на первую консультацию и начните путь к лучшей версии себя.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-10 py-5 bg-cta-button text-text-primary font-semibold text-lg rounded-full hover:bg-cta-button/90 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm"
            >
              Задай мне вопрос
              <ArrowDown className="ml-3 w-6 h-6" />
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
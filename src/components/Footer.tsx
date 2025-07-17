'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Instagram, Mail, Heart, MapPin } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 918 470 5777",
      href: "tel:+79184705777",
      description: "Звонки принимаю с 9:00 до 21:00"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@ok_karmaterapy",
      href: "https://t.me/ok_karmaterapy",
      description: "Основной способ связи"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@karmaterapy",
      href: "https://instagram.com/karmaterapy",
      description: "Полезные материалы и анонсы"
    }
  ]

  const quickLinks = [
    { name: "Главная", href: "#hero" },
    { name: "Обо мне", href: "#about" },
    { name: "Запросы", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Тарифы", href: "#pricing" }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contacts" className="bg-text-primary text-white no-horizontal-scroll" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 no-horizontal-scroll">
        {/* Основной контент футера */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Информация о психологе */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">
                Тутова Оксана Сергеевна
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Психолог, специалист по интуитивно-ориентированной практике. 
                Помогаю людям находить гармонию и понимание себя через 
                индивидуальные онлайн-консультации.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-300 mb-4">
                <MapPin className="w-5 h-5" />
                <span>Онлайн консультации</span>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-200 text-sm font-medium">
                  ⚠️ Не является медицинской услугой
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Психологическое консультирование не заменяет медицинское лечение
                </p>
              </div>
            </motion.div>

            {/* Быстрые ссылки */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-xl font-heading font-semibold mb-6">
                Навигация
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Рабочие часы</h5>
                <div className="text-gray-300 space-y-2">
                  <p>Понедельник - Пятница: 9:00 - 21:00</p>
                  <p>Суббота: 10:00 - 18:00</p>
                  <p>Воскресенье: По договоренности</p>
                </div>
              </div>
            </motion.div>

            {/* Контакты */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <h4 className="text-xl font-heading font-semibold mb-6">
                Контакты
              </h4>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                      className="group"
                    >
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent-blue" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">
                            {contact.label}
                          </h5>
                          <p className="text-accent-blue font-medium mb-1">
                            {contact.value}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA кнопка */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8"
              >
                <a
                  href="https://t.me/ok_karmaterapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-accent-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Записаться на консультацию</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2024 Тутова Оксана Сергеевна</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>Сделано с заботой</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://t.me/ok_karmaterapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/karmaterapy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="tel:+79184705777"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
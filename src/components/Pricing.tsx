'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star, Zap } from 'lucide-react'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pricingPlans = [
    {
      name: "Разовая консультация",
      price: "7 000",
      originalPrice: null,
      savings: null,
      description: "Идеально для знакомства с процессом или решения конкретного вопроса",
      features: [
        "55 минут индивидуальной работы",
        "Онлайн формат",
        "Запись сессии по запросу",
        "Рекомендации после встречи"
      ],
      popular: false,
      icon: Check
    },
    {
      name: "Пакет из 5 сессий",
      price: "33 000",
      originalPrice: "35 000",
      savings: "2 000",
      description: "Оптимальный выбор для работы с конкретным запросом",
      features: [
        "5 сессий по 55 минут",
        "Скидка 2 000 рублей",
        "Гибкое планирование",
        "Поддержка между сессиями",
        "Промежуточные рекомендации"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Пакет из 10 сессий",
      price: "65 000",
      originalPrice: "70 000",
      savings: "5 000",
      description: "Для глубокой трансформационной работы и долгосрочных изменений",
      features: [
        "10 сессий по 55 минут",
        "Максимальная скидка 5 000 рублей",
        "Приоритетное планирование",
        "Постоянная поддержка",
        "Детальный план работы",
        "Промежуточные отчеты"
      ],
      popular: false,
      icon: Zap
    }
  ]

  const handleBookingClick = () => {
    window.open('https://t.me/karmaterapy', '_blank')
  }

  return (
    <section id="pricing" className="py-20 bg-bg-secondary no-horizontal-scroll" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 no-horizontal-scroll">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            Тарифы
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Выберите подходящий формат работы. Пакеты сессий позволяют сэкономить и обеспечивают более глубокую работу
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-accent-blue scale-105 md:scale-110' 
                    : 'border-gray-100 hover:border-accent-blue/30'
                }`}
              >
                {/* Популярный бейдж */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Популярный выбор
                    </div>
                  </div>
                )}

                {/* Иконка */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  plan.popular ? 'bg-accent-blue' : 'bg-accent-blue/10'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    plan.popular ? 'text-white' : 'text-accent-blue'
                  }`} />
                </div>

                {/* Название */}
                <h3 className="text-xl font-heading font-bold text-text-primary text-center mb-4">
                  {plan.name}
                </h3>

                {/* Цена */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-secondary">₽</span>
                  </div>
                  
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <span className="text-text-secondary line-through text-lg">
                        {plan.originalPrice} ₽
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                        Экономия {plan.savings} ₽
                      </span>
                    </div>
                  )}
                </div>

                {/* Описание */}
                <p className="text-text-secondary text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Особенности */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Кнопка */}
                <motion.button
                  onClick={handleBookingClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-lg'
                      : 'bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white'
                  }`}
                >
                  Выбрать тариф
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-bg-primary rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-heading font-semibold text-text-primary mb-4">
              Важная информация
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
              <div>
                <p className="mb-2">• Оплата производится до начала сессии</p>
                <p className="mb-2">• Возможна рассрочка для пакетов сессий</p>
                <p>• При отмене менее чем за 24 часа сессия засчитывается</p>
              </div>
              <div>
                <p className="mb-2">• Все сессии проходят в онлайн формате</p>
                <p className="mb-2">• Гибкое планирование времени встреч</p>
                <p>• Полная конфиденциальность гарантирована</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
'use client'

import { useEffect } from 'react'

// Конфигурация для кастомизации виджета
interface HeyGenChatConfig {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  primaryColor?: string
  secondaryColor?: string
  size?: 'small' | 'medium' | 'large'
  buttonText?: string
  showText?: boolean
  language?: 'ru' | 'en' | 'ru,en'
}

const HeyGenChat = ({
  position = 'bottom-right',
  primaryColor = '#F4C7AB',
  secondaryColor = '#FDF6F1', 
  size = 'medium',
  buttonText = 'AI Консультант',
  showText = true,
  language = 'ru'
}: HeyGenChatConfig = {}) => {
  useEffect(() => {
    // Проверяем, не загружен ли уже скрипт
    if (document.getElementById('heygen-streaming-embed')) {
      return
    }

    const host = "https://labs.heygen.com"
    // Добавляем параметр языка к URL
    const baseUrl = host + "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJkM2VhZWQxZWExZGQ0NzY2OTUyZTJmZGJl%0D%0AYjZiZDBkNCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0AL2QzZWFlZDFlYTFkZDQ3NjY5NTJlMmZkYmViNmJkMGQ0L2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjJk%0D%0ANWZjOGY3NjFmNDRiNWNhZTM1Mjc5ZDlkNmU5MjA1IiwidXNlcm5hbWUiOiIxYjRjMGEyMTFhNGU0%0D%0AMGMzYTVjNTU1NWM2OGJiZjkyNSJ9&inIFrame=1"
    const url = baseUrl + `&language=${language}`
    
    const clientWidth = document.body.clientWidth
    const wrapDiv = document.createElement("div")
    wrapDiv.id = "heygen-streaming-embed"
    
    const container = document.createElement("div")
    container.id = "heygen-streaming-container"
    
    // Определяем размеры в зависимости от конфигурации
    const sizes = {
      small: { width: 160, height: 160 },
      medium: { width: 200, height: 200 },
      large: { width: 240, height: 240 }
    }
    
    const currentSize = sizes[size]
    
    // Определяем позицию
    const positions = {
      'bottom-right': 'right: 40px; bottom: 40px;',
      'bottom-left': 'left: 40px; bottom: 40px;',
      'top-right': 'right: 40px; top: 40px;',
      'top-left': 'left: 40px; top: 40px;'
    }
    
    // Создаем текстовую метку
    const textLabel = document.createElement("div")
    textLabel.id = "heygen-text-label"
    textLabel.textContent = buttonText
    textLabel.style.cssText = `
      position: absolute;
      ${position.includes('right') ? 'right: 100%; margin-right: 15px;' : 'left: 100%; margin-left: 15px;'}
      top: 50%;
      transform: translateY(-50%);
      background: ${primaryColor};
      color: #2C2C2C;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      opacity: ${showText ? '1' : '0'};
      visibility: ${showText ? 'visible' : 'hidden'};
      transition: all 0.3s ease;
      pointer-events: none;
      z-index: 10000;
    `
    
    const stylesheet = document.createElement("style")
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        ${positions[position]}
        width: ${currentSize.width}px;
        height: ${currentSize.height}px;
        border-radius: 50%;
        border: 3px solid ${primaryColor};
        background: linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%);
        box-shadow: 0px 12px 32px 0px rgba(244, 199, 171, 0.3), 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        overflow: hidden;
        cursor: pointer;
        
        opacity: 0;
        visibility: hidden;
        transform: scale(0.8);
      }
      
      /* Скрываем языковой селектор в iframe */
      #heygen-streaming-embed iframe {
        filter: none;
      }
      
      /* Дополнительные стили для скрытия языкового селектора */
      #heygen-streaming-embed iframe::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
      }
      
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
      }
      
      #heygen-streaming-embed:hover {
        transform: scale(1.05);
        box-shadow: 0px 16px 40px 0px rgba(244, 199, 171, 0.4), 0px 6px 20px 0px rgba(0, 0, 0, 0.15);
      }
      
      #heygen-streaming-embed.expand {
        ${clientWidth < 540 
          ? "height: 266px; width: 96%; right: 50%; transform: translateX(50%);" 
          : "height: 366px; width: calc(366px * 16 / 9); right: 40px;"}
        border: 0;
        border-radius: 16px;
        background: #FFFFFF;
        box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.15);
      }
      
      #heygen-streaming-embed.expand:hover {
        transform: none;
      }
      
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        overflow: hidden;
      }
      
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: inherit;
      }
      
      /* Добавляем пульсирующий эффект для привлечения внимания */
      #heygen-streaming-embed.show:not(.expand)::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
        opacity: 0.6;
        animation: pulse 2s infinite;
        z-index: -1;
      }
      
      /* Анимация для текстовой метки */
      #heygen-streaming-embed:hover + #heygen-text-label,
      #heygen-streaming-embed.show:not(.expand):hover + #heygen-text-label {
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.15);
      }
      
      /* Скрываем текст при расширении */
      #heygen-streaming-embed.expand + #heygen-text-label {
        opacity: 0;
        visibility: hidden;
      }
      
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 0.6;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0.6;
        }
      }
      
      /* Адаптивность для мобильных устройств */
      @media (max-width: 768px) {
        #heygen-streaming-embed {
          ${position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
          ${position.includes('bottom') ? 'bottom: 20px;' : 'top: 20px;'}
          width: ${Math.max(currentSize.width - 40, 120)}px;
          height: ${Math.max(currentSize.height - 40, 120)}px;
        }
        
        #heygen-streaming-embed.expand {
          ${position.includes('right') ? 'right: 10px;' : 'left: 10px;'}
          ${position.includes('bottom') ? 'bottom: 10px;' : 'top: 10px;'}
          width: calc(100% - 20px);
          height: 60vh;
        }
        
        #heygen-text-label {
          display: none;
        }
      }
    `
    
    const iframe = document.createElement("iframe")
    iframe.allowFullscreen = false
    iframe.title = "AI Консультант Оксаны"
    iframe.role = "dialog"
    iframe.allow = "microphone"
    iframe.src = url
    
    // Обработчик загрузки iframe для скрытия языкового селектора
    iframe.onload = () => {
      try {
        // Попытка скрыть языковой селектор через postMessage
        iframe.contentWindow?.postMessage({
          type: 'heygen-config',
          action: 'hide-language-selector',
          language: 'ru'
        }, '*')
        
        // Дополнительная попытка через setTimeout
        setTimeout(() => {
          iframe.contentWindow?.postMessage({
            type: 'heygen-language',
            language: 'ru',
            hideSelector: true
          }, '*')
        }, 1000)
      } catch (error) {
        console.log('Не удалось настроить язык HeyGen:', error)
      }
    }
    
    let visible = false
    let initial = false
    
    window.addEventListener("message", (e) => {
      if (e.origin === host && e.data && e.data.type && e.data.type === "streaming-embed") {
        if (e.data.action === "init") {
          initial = true
          wrapDiv.classList.toggle("show", initial)
          
          // Принудительно устанавливаем русский язык после инициализации
          setTimeout(() => {
            iframe.contentWindow?.postMessage({
              type: 'heygen-force-language',
              language: 'ru',
              action: 'set-default'
            }, '*')
          }, 500)
        } else if (e.data.action === "show") {
          visible = true
          wrapDiv.classList.toggle("expand", visible)
        } else if (e.data.action === "hide") {
          visible = false
          wrapDiv.classList.toggle("expand", visible)
        }
      }
      
      // Перехватываем любые сообщения о смене языка и принудительно устанавливаем русский
      if (e.data && (e.data.type === 'language-change' || e.data.type === 'heygen-language')) {
        setTimeout(() => {
          iframe.contentWindow?.postMessage({
            type: 'heygen-override-language',
            language: 'ru'
          }, '*')
        }, 100)
      }
    })
    
    container.appendChild(iframe)
    wrapDiv.appendChild(stylesheet)
    wrapDiv.appendChild(container)
    
    // Добавляем текстовую метку после основного элемента
    if (showText) {
      wrapDiv.appendChild(textLabel)
    }
    
    document.body.appendChild(wrapDiv)
    
    // Cleanup функция
    return () => {
      const existingEmbed = document.getElementById('heygen-streaming-embed')
      if (existingEmbed) {
        existingEmbed.remove()
      }
    }
  }, [])

  return null // Компонент не рендерит ничего в React дереве
}

export default HeyGenChat
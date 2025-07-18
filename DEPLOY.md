# 🚂 Инструкция по деплою на Railway

## Подготовка к деплою

### ✅ Проверочный список перед деплоем

- [x] Проект успешно собирается (`npm run build`)
- [x] Продакшен сервер запускается локально (`npm start`)
- [x] HeyGen AI-консультант настроен на русский язык
- [x] Все зависимости указаны в `package.json`
- [x] Создан файл `railway.json` с настройками
- [x] Создан файл `.env.example` с переменными окружения
- [x] Обновлен `README.md` с инструкциями

## Способы деплоя

### 🔄 Автоматический деплой (рекомендуется)

1. **Подключение репозитория:**
   ```bash
   # Если репозиторий еще не создан
   git init
   git add .
   git commit -m "🚀 Готов к деплою: добавлен HeyGen AI-консультант"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Настройка Railway:**
   - Перейдите на [railway.app](https://railway.app)
   - Нажмите "New Project"
   - Выберите "Deploy from GitHub repo"
   - Выберите ваш репозиторий
   - Railway автоматически определит Next.js и настроит деплой

3. **Автоматические деплои:**
   - Каждый push в main ветку будет автоматически деплоиться
   - Railway покажет логи сборки и деплоя

### 🖥️ Деплой через CLI

1. **Установка Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Авторизация:**
   ```bash
   railway login
   ```

3. **Инициализация проекта:**
   ```bash
   railway init
   # Выберите "Empty Project"
   # Введите название проекта
   ```

4. **Деплой:**
   ```bash
   railway up
   ```

## Настройка переменных окружения

### В Railway Dashboard:

1. Откройте ваш проект в Railway
2. Перейдите в раздел "Variables"
3. Добавьте переменные:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-app-name.railway.app
```

### Через CLI:

```bash
railway variables set NODE_ENV=production
railway variables set NEXT_PUBLIC_SITE_URL=https://your-app-name.railway.app
```

## Проверка деплоя

### ✅ Что проверить после деплоя:

1. **Основной сайт:**
   - Все секции загружаются корректно
   - Адаптивность работает на мобильных устройствах
   - Анимации Framer Motion работают плавно

2. **HeyGen AI-консультант:**
   - Виджет появляется в правом нижнем углу
   - При клике открывается интерфейс аватара
   - Язык установлен на русский
   - Микрофон работает (если разрешен пользователем)

3. **Производительность:**
   - Время загрузки < 3 секунд
   - Lighthouse Score > 90
   - Нет ошибок в консоли браузера

## Мониторинг и логи

### Просмотр логов:

```bash
# Через CLI
railway logs

# Или в Railway Dashboard -> Deployments -> View Logs
```

### Метрики:

- Railway предоставляет метрики использования CPU, RAM, сети
- Доступны в разделе "Metrics" проекта

## Обновление проекта

### Автоматические обновления:

```bash
# Внесите изменения в код
git add .
git commit -m "🔧 Обновление: описание изменений"
git push origin main
# Railway автоматически пересоберет и задеплоит
```

### Ручное обновление через CLI:

```bash
railway up
```

## Кастомный домен

### Настройка собственного домена:

1. В Railway Dashboard:
   - Перейдите в "Settings" -> "Domains"
   - Нажмите "Custom Domain"
   - Введите ваш домен

2. Настройте DNS записи у вашего регистратора:
   ```
   Type: CNAME
   Name: www (или @)
   Value: your-app-name.railway.app
   ```

## Резервное копирование

### Создание бэкапа:

```bash
# Экспорт переменных окружения
railway variables > railway-vars-backup.txt

# Создание архива проекта
tar -czf project-backup-$(date +%Y%m%d).tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  .
```

## Устранение проблем

### Частые проблемы:

1. **Ошибка сборки:**
   ```bash
   # Проверьте локально
   npm run build
   # Если ошибка - исправьте и закоммитьте
   ```

2. **HeyGen не загружается:**
   - Проверьте HTTPS (Railway предоставляет автоматически)
   - Убедитесь что нет блокировки iframe
   - Проверьте консоль браузера на ошибки

3. **Медленная загрузка:**
   - Проверьте размер bundle: `npm run build`
   - Оптимизируйте изображения
   - Включите кэширование

### Получение помощи:

- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- GitHub Issues: создайте issue в репозитории проекта

## Стоимость

### Railway Pricing:

- **Hobby Plan**: $5/месяц
  - 512MB RAM
  - 1GB диск
  - Подходит для этого проекта

- **Pro Plan**: $20/месяц
  - 8GB RAM
  - 100GB диск
  - Для высоконагруженных проектов

### Оптимизация расходов:

- Используйте sleep mode для неактивных проектов
- Мониторьте использование ресурсов
- Настройте автоматическое масштабирование

---

**🎉 Поздравляем! Ваш сайт с AI-консультантом готов к работе в продакшене!**
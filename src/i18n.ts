import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend" // Для загрузки переводов с сервера
import LanguageDetector from "i18next-browser-languagedetector" // Для детекции языка пользователя

i18n
  .use(Backend) // Используем Backend для загрузки переводов
  .use(LanguageDetector) // Используем LanguageDetector для определения языка
  .use(initReactI18next) // Инициализация i18next для React
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Логирование для отладки

    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },

    // Указываем путь для загрузки переводов
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Путь для загрузки файлов переводов
    },
  })

export default i18n

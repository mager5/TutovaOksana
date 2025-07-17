/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Основная палитра
        'bg-primary': '#FAF8F5',
        'bg-secondary': '#F1F4F8', 
        'accent-blue': '#AFCBFF',
        'cta-button': '#F4C7AB',
        'text-primary': '#2C2C2C',
        'text-secondary': '#7A7A7A',
        
        // Дополнительные цвета
        'bg-lavender': '#EAE7F2',
        'bg-green': '#DCE9DC',
        'bg-orange': '#F8D6C1',
        
        // Градиентные цвета
        'gradient-start': '#FDF6F1',
        'gradient-end': '#F1F4F8',
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Manrope', 'sans-serif'],
        'accent': ['DM Sans', 'sans-serif'],
        'heading': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #FDF6F1 0%, #F1F4F8 100%)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./portfolio/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0B0B0F',
        surface: '#121217',
        accent: '#4F8CFF',
        text: '#F8F8F8',
        'text-secondary': '#8C8C94',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
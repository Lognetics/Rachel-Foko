import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7fb',
          100: '#eeedf5',
          200: '#d6d3e3',
          300: '#a9a4c0',
          400: '#7c7595',
          500: '#564f73',
          600: '#3d3858',
          700: '#2a2640',
          800: '#1a172b',
          900: '#0c0a1a',
          950: '#050410',
        },
        cream: {
          50: '#fcf9f6',
          100: '#fcf8f5',
          200: '#f6efe9',
        },
        rose: {
          gold: '#d4a574',
          blush: '#f5dcdc',
          dust: '#e8c7c0',
          warm: '#d79f98',
        },
        blush: {
          DEFAULT: '#f5dcdc',
          soft: '#fbe9e9',
          deep: '#e8c7c0',
        },
        lavender: {
          mist: '#e8e0f5',
          deep: '#b9a4e0',
          night: '#5b4b8a',
          warm: '#9e86c8',
        },
        gold: {
          soft: '#e8d4a8',
          warm: '#c9a96e',
          deep: '#a8854f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        gradient: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};

export default config;

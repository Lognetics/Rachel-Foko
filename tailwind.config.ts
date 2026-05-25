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
        rose: {
          gold: '#d4a574',
          blush: '#f5d5d5',
          dust: '#e8c7c0',
        },
        lavender: {
          mist: '#e8e0f5',
          deep: '#b9a4e0',
          night: '#5b4b8a',
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
      backgroundImage: {
        'aurora': 'radial-gradient(ellipse at top, rgba(184,164,224,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(212,165,116,0.18), transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        gradient: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%, 100%': { boxShadow: '0 0 20px rgba(184,164,224,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(212,165,116,0.5)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};

export default config;

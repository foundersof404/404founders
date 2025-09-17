/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Cyber Color Palette
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050507',
        'cyber-blue': {
          50: '#e6ffff',
          100: '#ccffff',
          200: '#99ffff',
          300: '#66ffff',
          400: '#33ffff',
          500: '#00f5ff',
          600: '#00c4cc',
          700: '#009399',
          800: '#006266',
          900: '#003133',
        },
        'cyber-purple': {
          50: '#f3f0ff',
          100: '#e6e0ff',
          200: '#ccc1ff',
          300: '#b3a2ff',
          400: '#9983ff',
          500: '#8b5cf6',
          600: '#6d47c4',
          700: '#4f3292',
          800: '#311d60',
          900: '#13082e',
        },
        'cyber-pink': {
          50: '#fef2f7',
          100: '#fde5ef',
          200: '#fbcbdf',
          300: '#f9b1cf',
          400: '#f797bf',
          500: '#f73c7e',
          600: '#c53065',
          700: '#93244c',
          800: '#611833',
          900: '#2f0c1a',
        },
        'cyber-green': {
          50: '#e6fff4',
          100: '#ccffe9',
          200: '#99ffd3',
          300: '#66ffbd',
          400: '#33ffa7',
          500: '#00ff85',
          600: '#00cc6a',
          700: '#00994f',
          800: '#006634',
          900: '#00331a',
        },
        'cyber-orange': {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbd66',
          400: '#ffa733',
          500: '#ff8c00',
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
        // Neutral Colors
        'dark-card': '#1a1a2e',
        'dark-card-light': '#2a2a3e',
        'dark-border': '#16213e',
        'dark-border-light': '#26314e',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-tertiary': '#707070',
        'text-accent': '#00f5ff',
        // Status Colors
        'success': '#00ff85',
        'warning': '#ff8c00',
        'error': '#ff4757',
        'info': '#00f5ff',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Orbitron', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.025em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        // Responsive Typography
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'card-title': ['clamp(1.25rem, 2.5vw, 1.875rem)', { lineHeight: '1.3', letterSpacing: '0.025em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'rotate-slow': 'rotate 20s linear infinite',
        'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
        // Enhanced animations
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'text-reveal': 'text-reveal 0.8s ease-out',
        'card-hover': 'card-hover 0.3s ease-out',
        'loading-dots': 'loading-dots 1.5s infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-glow': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6'
          },
          '50%': { 
            transform: 'translateY(-10px)',
            boxShadow: '0 0 15px #8b5cf6, 0 0 30px #8b5cf6, 0 0 45px #8b5cf6'
          },
        },
        // Enhanced keyframes
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)',
            transform: 'scale(1.05)'
          },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'card-hover': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        'loading-dots': {
          '0%, 20%': { content: '""' },
          '40%': { content: '"."' },
          '60%': { content: '".."' },
          '80%, 100%': { content: '"..."' },
        },
        skeleton: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-card': 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-neon': 'linear-gradient(90deg, #00f5ff, #8b5cf6, #f73c7e)',
      },
      backdropBlur: {
        'cyber': '10px',
      },
    },
  },
  plugins: [],
}

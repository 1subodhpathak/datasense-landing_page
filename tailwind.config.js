/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#00FFFF',
        'dark-cyan': '#008B8B',
        'light-cyan': '#E0FFFF',
        'turquoise': '#40E0D0',
        'electric-blue': '#7DF9FF',
        'blue-green': '#0D98BA',
        'caribbean': '#006D6F',
        'teal': '#008080',
        'keppel': '#3AB09E',
        'alice-blue': '#F0F8FF',
        'charleston': '#232B2B',
        'celeste': '#B2FFFF',
        'bright-cyan': '#09DDEF',
        'bubbles': '#E7FEFF',
        'cadet': '#5F9EA0',
      },
      animation: {
        'scroll-rtl': 'scroll-rtl 10s linear infinite',
        'scroll-ltr': 'scroll-ltr 10s linear infinite',
        'scroll-ltr-img': 'scroll-ltr-img 10s linear infinite',
        // 'scroll-infinite': 'scroll-infinite 30s linear infinite',
        'scroll-rtl-text': 'scroll-rtl-text 30s linear infinite',
        'float': 'float 1.5s ease-in-out infinite',
        'float-slow': 'float 2s ease-in-out infinite',
        'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'floating': 'floating 2.6s infinite linear',
        'bounce-x': 'bounce-x 1s infinite',
        'rotation': 'rotation 5s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s infinite alternate',
        'scroll-x': 'scroll-x 20s linear infinite',
        'scroll-seamless': 'scroll-seamless 32s linear infinite'
      },
      keyframes: {
        'scroll-seamless': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-ltr': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'scroll-ltr-img': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // 'scroll-infinite': {
        //   '0%': { transform: 'translateX(0)' },
        //   '100%': { transform: 'translateX(-100%)' },
        // },
        'scroll-rtl-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotation: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' }
        },
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' 
          },
          '100%': { 
            boxShadow: '0 0 25px #00FFFF, 0 0 50px #00FFFF, 0 0 75px #00FFFF' 
          }
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(48px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '2000': '2000px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
      });
    },
  ],
}
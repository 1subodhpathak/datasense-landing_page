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
        'scroll-rtl-text': 'scroll-rtl-text 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-ltr': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'scroll-rtl-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
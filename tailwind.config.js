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
        'scroll-rtl': 'scroll-rtl 12s linear infinite',
        'scroll-ltr': 'scroll-ltr 12s linear infinite',
      },
      keyframes: {
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 4rem))' }
        },
        'scroll-ltr': {
          '0%': { transform: 'translateX(calc(-100% - 4rem))' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}
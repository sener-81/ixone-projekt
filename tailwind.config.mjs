/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      colors: {
        'brand-orange': '#ec6a1b',
        'brand-orange-light': '#f47c2e',
        'brand-orange-dark': '#d15c17',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs':  ['0.75rem',  { lineHeight: '1rem' }],
        'sm':  ['0.875rem', { lineHeight: '1.25rem' }],
        'base':['1rem',     { lineHeight: '1.5rem' }],
        'lg':  ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':  ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl': ['3rem',     { lineHeight: '1' }],
        '6xl': ['3.75rem',  { lineHeight: '1' }],
        '7xl': ['4.5rem',   { lineHeight: '1' }],
        '8xl': ['6rem',     { lineHeight: '1' }],
        '9xl': ['8rem',     { lineHeight: '1' }],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out',
        'slide-up':     'slideUp 0.6s ease-out',
        'float':        'float 6s ease-in-out infinite',
        'float-delayed':'float 8s ease-in-out infinite 2s',
        'float-slow':   'float 10s ease-in-out infinite 1s',
        'blob':         'blob 7s infinite',
        'gradient-x':   'gradient-x 3s ease infinite',
        'bounce-slow':  'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-8px) rotate(1deg)' },
          '66%':      { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%':  { transform: 'translate(-15px, 15px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
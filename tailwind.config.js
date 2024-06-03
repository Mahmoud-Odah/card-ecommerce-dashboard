/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin')],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgb(var(--mui-palette-primary-mainChannel) / 0.7) 0%, var(--mui-palette-primary-main) 100%)',
      },
    }
  }
}

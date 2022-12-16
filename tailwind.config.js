// eslint-disable-next-line import/no-extraneous-dependencies
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      '1.5xl': '1440px',
      '3xl': '1600px',
      ...screens,
    },
    fontFamily: {
      // 'gotham-book': ['Gotham\\ Book', 'Arial', 'sans-serif'],
      'open-sans': ['Open\\ Sans', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'eplayment-black': '#3D3D3D',
        'eplayment-purple': '#994FD0',
        'eplayment-indigo': '#191430',
        'custom-cloudy': '#AAAAAA',
        'custom-red-100': '#e57373',
        'custom-danger': '#FF3056',
        'custom-orange-100': '#f8ac25',
        'custom-neon-green': '#3BFF34',
        'custom-solid-green': '#28A503',
        'custom-onyx': '#0B1025',
        'custom-dark-orchid': '#9446CE',
        'custom-oxford-blue': '#141C3D',
        'custom-black-velvet': '#201D36',
        'custom-corbeau': '#0C0F24',
        'custom-darkknight': '#191430',
        'custom-rangeland': '#5CC858',
        'custom-throat': '#221F3E',
        'custom-taurus-forest-fern': '#70C250',
        'custom-medium-slate-blue': '#7562E0',
        'custom-wash-me': '#FAFBFD',
        'custom-floppy-disk': '#110744',
        'custom-gentian-blue': '#5242AD',
        'custom-cyber-lavender': '#E8E3FF',
        'custom-ghost-white': '#F7F9FD',
      },
      backgroundImage: () => ({
        grid: "url('/redesign/backgrounds/bg-grid.png')",
        'home-4-white': "url('/home_4/bg_4.webp')",
        wallet: "url('/redesign/backgrounds/wallet-bg.png')",
        fintech: "url('/redesign/backgrounds/fintech-bg.webp')",
        success: "url('/success_bg.webp')",
        about: "url('/about/about_bg.webp')",
        creators: "url('/redesign/backgrounds/creators_bg.webp')",
        'curved-lines': "url('/redesign/backgrounds/curve_lines.png')",
        'entertainment-landing-bg': "url('/redesign/backgrounds/entertainment-landing-bg.png')",
      }),
      keyframes: {
        AnimCircles: {
          '0%': {
            '-webkit-transform': 'translate(0px, 0px)',
            transform: 'translate(0px, 0px)',
          },
          '100%': {
            '-webkit-transform': 'translate(-40px, 0px)',
            transform: 'translate(-40px, 0px)',
          },
        },
        Animtop: {
          '0%,100%': {
            ' -webkit-transform': 'rotate(0deg)',
            transform: 'rotate(0deg)',
          },
          '50%': {
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)',
          },
        },
        Animbottom: {
          '0%,100%': {
            '-webkit-transform': 'rotate(0deg)',
            transform: 'rotate(0deg)',
          },
          '50%': {
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)',
          },
        },
      },
      animation: {
        Animtop: 'Animtop 0.5s infinite',
        Animbottom: 'Animbottom 0.5s infinite',
        AnimCircles: 'AnimCircles 0.5s infinite linear',
      },
      filter: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

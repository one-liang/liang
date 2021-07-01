const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        notoSansTC: ["'Noto Sans TC', 'sans-serif'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)'
      },
      typography: {
        DEFAULT: {
          css: [{
            color: 'var(--ol)',
            h1: { color: 'var(--ol-deeper)' },
            h2: { color: 'var(--ol-deep)' },
            h3: { color: 'inherit' },
            a: {
              color: 'var(--ol-deeper)',
              textDecoration: 'none',
            },
          }],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

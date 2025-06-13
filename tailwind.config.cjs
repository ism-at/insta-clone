// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './app.html',
    './node_modules/mode-watcher/**/*.js'
  ],
  safelist: [/* your list... */],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        // ...etc
      },
      fontFamily: {
        sans: ['InterVariable', ...fontFamily.sans]
      }
    }
  }
};

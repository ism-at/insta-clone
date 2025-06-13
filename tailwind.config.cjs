// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './*.html',
    './app.html',
    './node_modules/**/*.{js,ts,svelte}'
  ],
  safelist: [
    'dark', 'bg-background', 'text-foreground', 'border-border',
    'bg-card', 'text-card-foreground', 'text-muted-foreground',
    'bg-muted', 'bg-popover', 'text-popover-foreground',
    'text-primary', 'bg-primary', 'text-secondary', 'bg-secondary',
    'text-destructive', 'bg-destructive', 'text-accent', 'bg-accent'
  ],
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
      },
      fontFamily: {
        sans: ['InterVariable', ...fontFamily.sans]
      }
    }
  }
};

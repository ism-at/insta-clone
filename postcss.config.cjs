// eslint-disable-next-line @typescript-eslint/no-require-imports
const tailwindConfig = require('./tailwind.config.cjs');

module.exports = {
  plugins: {
    tailwindcss: { config: tailwindConfig },
    autoprefixer: {}
  }
};



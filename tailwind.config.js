// tailwind.config.js
const colors = require('./src/tokens/colors.ts'); // Kalau error, copy-paste manual saja dulu

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/ichiversa-ui/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // override/extend Tailwind default jika perlu
      }
    }
  },
  plugins: [],
}

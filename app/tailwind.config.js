module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Times New Roman', 'Times', 'serif'],
      mono: ['monospace']
    },
    extend: {
        scale: {
        '115': '1.15',
        }
    },
  },
  plugins: [],
}

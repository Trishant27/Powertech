/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        navy: '#1A1E23',
        orange: '#FF6B00',
        darkGrey: '#2A2E33',
        lightGrey: '#E5E7EB',
      },
      fontFamily: {
        industrial: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'industrial-gradient': 'linear-gradient(135deg, #1A1E23 0%, #121212 100%)',
        'metallic-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue/white theme
        charcoal: '#F0F4FF',        // light blue-white page background
        navy: '#0A1628',            // deep navy — headers, footers, dark sections
        darkGrey: '#FFFFFF',        // card backgrounds — pure white
        lightGrey: '#E2E8F0',       // borders, dividers
        orange: '#60A5FA',          // primary blue accent (keeps all className refs working)
        lightBlue: '#60A5FA',       // secondary blue for hover states
        skyBlue: '#DBEAFE',         // light blue tint for badges
      },
      fontFamily: {
        industrial: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'industrial-gradient': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
        'metallic-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}

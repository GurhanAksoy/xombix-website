module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(255, 115, 0, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(255, 115, 0, 1)',
          },
        },
        pulseDrop: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px rgba(255, 115, 0, 0.6))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px rgba(255, 115, 0, 1))',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'pulse-drop': 'pulseDrop 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        glass: "rgba(255, 255, 255, 0.06)",
        "glass-border": "rgba(255, 255, 255, 0.12)",
        "signal-green": "#39FF88",
        "signal-yellow": "#F6E642",
        fog: "#9AA0A6",
      },
      fontFamily: {
        display: ['"Outfit"', '"General Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      dropShadow: {
        'signal': '0 0 8px rgba(57, 255, 136, 0.6)',
        'signal-yellow': '0 0 8px rgba(246, 230, 66, 0.6)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

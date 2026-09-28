/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boga: {
          navy: {
            DEFAULT: '#124285',
            light: '#1d5cb0',
            dark: '#0a2754',
            deep: '#061733',
            muted: '#183660',
          },
          sky: {
            DEFAULT: '#00AEEF',
            light: '#E6F7FE',
            soft: '#BAE6FD',
            dark: '#008EC4',
          },
          yellow: {
            DEFAULT: '#FBB034',
            light: '#FEF0D4',
            dark: '#D99119',
          },
          coral: {
            DEFAULT: '#EE4036',
            light: '#FDECEB',
            dark: '#CC2E25',
          },
          mist: '#F2F6FA',
          sand: '#FAF8F5',
          warm: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
          },
          accent: {
            amber: '#fef3c7',
            emerald: '#d1fae5',
            rose: '#ffe4e6',
          }
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        wave: 'wave 18s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

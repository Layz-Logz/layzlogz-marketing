/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mist: '#F3F7FA',
        navy: '#123047',
        accent: '#2D9CDB',
        teal: '#2FBF9B',
        coral: '#F47C6B',
      },
      boxShadow: {
        card: '0 20px 45px rgba(18, 48, 71, 0.08)',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}


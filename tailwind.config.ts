import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#e8e0d5',
          300: '#d6cfc7',
          400: '#b8a99a',
          500: '#9a8b7a',
          600: '#7d6f5f',
          700: '#524a44',
          800: '#3b3530',
          900: '#2f2a26',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
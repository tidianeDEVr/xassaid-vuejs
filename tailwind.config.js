/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Nunito', 'sans-serif'],
        body: ['PT Sans', 'monospace'],
      },
      colors: {
        'xassida-green': '#00BF63',
      },
    },
  },
  plugins: [],
};

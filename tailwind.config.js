/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#0D1520',
      'second-background': '#111927',
      'text' : '#eeeeee',
      'border': '#205D9E',
      'card': '#0D2847',
      'title' : '#C2E6FF',
      'important' : '#70B8FF',
      // 'text' : '#C2E6FF',
    }
  },
  plugins: [],
}


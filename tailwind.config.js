/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/src/assets/background-images/bg1.png')",
        'bg2': "url('/src/assets/background-images/bg1.png')",
        'bg3': "url('/src/assets/background-images/bg1.png')",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FEC62E',
      secondary: '#EFD6BF',
      tertiary: '#D9D9D9',
      panel: '#48433C',
      background: {
        light: '#85d7ff',
        DEFAULT: '#241D15',
        dark: '#009eeb',
      },
    }
    
  },
  plugins: [],
}
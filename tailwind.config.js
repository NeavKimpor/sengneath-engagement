/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'frame': `url('/lframe.png'), url('/rframe.png')`
      },
      fontFamily: {
        moulseda: ['MoulSeda', 'sans-serif']
      },
      colors: {
        sand: '#D3C8B3',
        nude1: '#d6c2b2',
        nude2: '#aa9788',
        nude3: '#806e60',
        nude4: '#58483b',
        nude5: '#332519',
        lightearth: '#ceaa9a',
        mediumearth: '#B5927F'
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        zoom: 'zoom 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Brand colors based on your icon
        primary: '#7F30E8', // Electric violet-purple base
        secondary: '#EC4899', // Hot pink highlight
        tertiary: '#6D28D9',  // Deep techy purple

        // Gradient stops (optional)
        'brand-purple': '#6D28D9',
        'brand-pink': '#EC4899',

        // Original + neutral palette
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        flashWhite: '#f4f4f6',
        platinum: '#e6e6e9',
        platinumLight: '#f4f4f5',
        timberWolf: '#d4d4d8',
        taupe: '#9999a1',
        silver: '#d6d6d6',
        dim: '#66666e',
        battleGray: '#858585',
        french: '#b5b5ba',
        night: '#141414',
        jet: '#292929',
        jetLight: '#333333',
        jetGray: '#6d6d74',
        richBlack: '#2e2e2e',
        eerieBlack: '#1f1f1f',
        onyx: '#5b5b5b',
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(109, 40, 217, 0.5)', // subtle glow using purple
        cardLight: '0px 19px 38px #ec4899, 0px 15px 12px #7f30e8',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about: 'linear-gradient(165deg, #3520a8 0%, #7f30e8 100%)',
        experience:
          "linear-gradient(135deg, rgba(127,48,232,0.5) 60%, rgba(236,72,153,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(127,48,232,0.9) 60%)',
        hero: 'linear-gradient(135deg, #091025cf 60%, #270623e3 60%)',
        'hero-mobile':
          'linear-gradient(135deg, #091025cf 60%, #270623e3 60%)',
        tech: "linear-gradient(277deg, #3520a87a, #3520a87a), url(/src/assets/backgrounds/nairobi.png)",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

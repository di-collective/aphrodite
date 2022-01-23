const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['.5rem', '0.75rem'],
      sm: ['.625rem', '0.875rem'],
      base: ['.75rem', '1rem'],
      lg: ['.875rem', '1.125rem'],
      xl: ['1rem', '1.25rem'],
      '2xl': ['1.125rem', '1.375rem'],
      '3xl': ['1.25rem', '1.5rem'],
      '4xl': ['1.5rem', '1.75rem'],
      '5xl': ['1.75rem', '2rem'],
      '6xl': ['2rem', '2.25rem'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B225F4',
          50: '#F2A8FA',
          100: '#EE99FA',
          200: '#E37CF8',
          300: '#D55FF7',
          400: '#C542F5',
          500: '#B225F4',
          600: '#950CE4',
          700: '#730ABD',
          800: '#550896',
          900: '#3A066F',
        },
      },
      animation: {
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1',
        'bounce-once': 'bounce 1s 1',
        'pulse-once': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 1',
        'beat-once': 'beat 300ms 1',
      },
      keyframes: {
        beat: {
          '50%': {transform: 'scale(0.6)'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({addUtilities}) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.scrollbar-none::-webkit-scrollbar': {
          display: 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.scrollbar-none': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      });
    }),
  ],
};

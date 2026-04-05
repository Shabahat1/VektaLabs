/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        'ink-2': '#1A1A1A',
        'ink-3': '#2A2A2A',
        stone: '#6B6B6B',
        'stone-2': '#9B9B9B',
        'stone-3': '#D4D4D4',
        paper: '#F5F5F3',
        white: '#FAFAFA',
        accent: '#AAEE88',
        'accent-hover': '#BBFF99',
        'accent-muted': 'rgba(170,238,136,0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}

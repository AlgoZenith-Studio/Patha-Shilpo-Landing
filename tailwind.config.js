/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          butter: '#fffbb6',
          sand: '#d4a262',
          clay: '#cc915c',
          wood: '#bb8f67',
          espresso: '#513a24',
        },
        paper: '#FDFBF7',
        paperAlt: '#F5EFE6',
        borderSoft: '#E8E2D8',
        inkMuted: '#7A6B5D',
      },
      fontFamily: {
        rowan: ['Rowan', 'serif'],
        lora: ['Lora', 'serif'],
        // Pally carries no Devanagari, so Hindi falls through to a Devanagari
        // face per-glyph rather than to an arbitrary system default.
        pally: ['Pally', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(81, 58, 36, 0.06), 0 2px 6px -1px rgba(81, 58, 36, 0.04)',
        'lift': '0 12px 30px -4px rgba(81, 58, 36, 0.12), 0 4px 10px -2px rgba(81, 58, 36, 0.06)',
        'clay': '0 10px 25px -3px rgba(204, 145, 92, 0.3)',
      },
      borderRadius: {
        'craft': '12px',
        'craft-lg': '20px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.18s ease-out',
      }
    },
  },
  plugins: [],
}

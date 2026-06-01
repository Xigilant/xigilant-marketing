/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        xi: {
          bg:     '#FDFCF8',
          bg2:    '#F5F3EE',
          nav:    '#1C2B1E',
          acc:    '#16A34A',
          accl:   '#4ADE80',
          accbg:  '#F0FDF4',
          accbd:  '#BBF7D0',
          t1:     '#1A1A14',
          t2:     '#4A4A3A',
          t3:     '#8B8878',
          bd:     '#E8E5DC',
          bd2:    '#CCC9BE',
          surf:   '#FFFFFF',
          crit:   '#DC2626',
          critbg: '#FEF2F2',
          critbd: '#FECACA',
          high:   '#B45309',
          highbg: '#FEF3C7',
          highbd: '#FDE68A',
          med:    '#15803D',
          medbg:  '#DCFCE7',
          medbd:  '#BBF7D0',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        'psai-blue': '#012e69',
        'psai-light-blue': '#0078d4',
      },
      animation: {
        'bounce-alt': 'bounce-alt 0.5s infinite alternate',
        'fade-in': 'fade-in 0.3s ease',
      },
      keyframes: {
        'bounce-alt': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(2px)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
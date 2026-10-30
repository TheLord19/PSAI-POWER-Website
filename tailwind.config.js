/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // PSAI Power tokens. Values live as CSS custom properties in
      // src/styles/globals.css; Tailwind only maps names onto them.
      colors: {
        porcelain: { DEFAULT: 'var(--porcelain)', 2: 'var(--porcelain-2)' },
        figure: 'var(--figure-ground)',
        tank: { DEFAULT: 'var(--tank)', deep: 'var(--tank-deep)' },
        steel: 'var(--steel)',
        rule: 'var(--rule)',
        ink: { 2: 'var(--ink-2)', 3: 'var(--ink-3)' },
        'on-tank': { DEFAULT: 'var(--on-tank)', 2: 'var(--on-tank-2)' },
        'tank-rule': 'var(--tank-rule)',
        live: {
          DEFAULT: 'var(--live)',
          ink: 'var(--live-ink)',
          line: 'var(--live-line)',
        },
        'phase-b': 'var(--phase-b)',
        fault: 'var(--fault)',
      },
      fontFamily: {
        sans: ['var(--sans)'],
        serif: ['var(--serif)'],
      },
      borderRadius: {
        // 0 is structural, 2px is interactive. Radius carries no other meaning.
        interactive: '2px',
      },
      maxWidth: {
        wrap: 'var(--wrap)',
      },
    },
  },
  plugins: [],
}

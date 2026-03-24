/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        'primary-dim': 'var(--primary-dim)',
        'primary-container': 'var(--primary-container)',
        secondary: 'var(--secondary)',
        'secondary-dim': 'var(--secondary-dim)',
        'secondary-container': 'var(--secondary-container)',
        tertiary: 'var(--tertiary)',
        'tertiary-container': 'var(--tertiary-container)',
        surface: 'var(--surface)',
        'surface-bright': 'var(--surface-bright)',
        'surface-dim': 'var(--surface-dim)',
        'surface-variant': 'var(--surface-variant)',
        'surface-container-lowest': 'var(--surface-container-lowest)',
        'surface-container-low': 'var(--surface-container-low)',
        'surface-container': 'var(--surface-container)',
        'surface-container-high': 'var(--surface-container-high)',
        'surface-container-highest': 'var(--surface-container-highest)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',
        'on-primary': 'var(--on-primary)',
        'on-secondary': 'var(--on-secondary)',
        outline: 'var(--outline)',
        'outline-variant': 'var(--outline-variant)',
      },
      fontFamily: {
        display: ['PlusJakartaSans-Bold'],
        headline: ['PlusJakartaSans-Regular'],
        title: ['Manrope-Bold'],
        body: ['Manrope-Regular'],
      },
    },
  },
  plugins: [],
};

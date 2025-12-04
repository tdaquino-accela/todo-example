/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      textColor: {
        default: 'var(--fuse-text-default, #333)',
        secondary: 'var(--fuse-text-secondary, #666)',
        hint: 'var(--fuse-text-hint, #999)',
        disabled: 'var(--fuse-text-disabled, #ccc)',
        primary: 'var(--fuse-primary, #1976d2)',
        accent: 'var(--fuse-accent, #ff4081)',
        warn: 'var(--fuse-warn, #ff9800)',
        'on-primary': 'var(--fuse-on-primary, #fff)',
        'on-accent': 'var(--fuse-on-accent, #fff)',
        'on-warn': 'var(--fuse-on-warn, #fff)',
      },
      backgroundColor: {
        default: 'var(--fuse-bg-default, #fff)',
      },
      borderColor: {
        primary: 'var(--fuse-primary, #1976d2)',
        accent: 'var(--fuse-accent, #ff4081)',
        warn: 'var(--fuse-warn, #ff9800)',
      },
      width: {
        'icon-size-6': '1.5rem',
      },
      height: {
        'icon-size-6': '1.5rem',
      },
    },
  },
  plugins: [],
}


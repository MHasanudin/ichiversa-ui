// tailwind.config.js - Playground
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Colors using CSS variables
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)',
          DEFAULT: 'var(--color-primary)',
        },
        secondary: {
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
          950: 'rgb(var(--color-secondary-950) / <alpha-value>)',
          DEFAULT: 'var(--color-secondary)',
        },
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          900: 'var(--color-success-900)',
          DEFAULT: 'var(--color-success)',
        },
        warning: {
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          900: 'var(--color-warning-900)',
          DEFAULT: 'var(--color-warning)',
        },
        error: {
          50: 'var(--color-error-50)',
          100: 'var(--color-error-100)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)',
          900: 'var(--color-error-900)',
          DEFAULT: 'var(--color-error)',
        },
        info: {
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          900: 'var(--color-info-900)',
          DEFAULT: 'var(--color-info)',
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        input: 'var(--color-input)',
        'input-border': 'var(--color-input-border)',
        ring: 'var(--color-ring)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
      },

      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },

      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
        modal: 'var(--radius-modal)',
        avatar: 'var(--radius-avatar)',
        badge: 'var(--radius-badge)',
      },

      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        button: 'var(--shadow-button)',
        'button-hover': 'var(--shadow-button-hover)',
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        modal: 'var(--shadow-modal)',
        dropdown: 'var(--shadow-dropdown)',
        focus: 'var(--shadow-focus)',
      },

      fontFamily: {
        sans: 'var(--font-family-sans)',
        serif: 'var(--font-family-serif)',
        mono: 'var(--font-family-mono)',
      },

      transitionDuration: {
        75: 'var(--duration-75)',
        100: 'var(--duration-100)',
        150: 'var(--duration-150)',
        200: 'var(--duration-200)',
        300: 'var(--duration-300)',
        500: 'var(--duration-500)',
        700: 'var(--duration-700)',
        1000: 'var(--duration-1000)',
      },

      transitionTimingFunction: {
        linear: 'var(--ease-linear)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        smooth: 'var(--ease-smooth)',
        bounce: 'var(--ease-bounce)',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center rounded-button px-4 py-2 text-sm font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': {},
        },
        '.btn-primary': {
          '@apply bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-button hover:shadow-button-hover': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-button hover:shadow-button-hover': {},
        },
        '.btn-outline': {
          '@apply border border-border bg-background text-foreground hover:bg-surface hover:border-border-hover': {},
        },
        '.card': {
          '@apply rounded-card bg-surface border border-border shadow-card': {},
        },
      });
    },
  ],
};

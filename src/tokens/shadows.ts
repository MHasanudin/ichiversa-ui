// src/tokens/shadows.ts

/**
 * Shadow Design Tokens
 * Elevation system for depth and hierarchy
 */

// Box shadow definitions with multiple elevation levels
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 6px 10px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '3xl': '0 35px 60px -12px rgb(0 0 0 / 0.35)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Colored shadows using brand colors
export const coloredShadows = {
  primary: '0 4px 14px 0 rgb(0 153 255 / 0.3)',
  secondary: '0 4px 14px 0 rgb(0 212 170 / 0.3)',
  success: '0 4px 14px 0 rgb(34 197 94 / 0.3)',
  warning: '0 4px 14px 0 rgb(245 158 11 / 0.3)',
  error: '0 4px 14px 0 rgb(239 68 68 / 0.3)',
} as const;

// Semantic shadow aliases for components
export const shadowAliases = {
  button: shadows.sm,          // For buttons
  buttonHover: shadows.md,     // For button hover state
  card: shadows.DEFAULT,       // For cards
  cardHover: shadows.lg,       // For card hover state
  modal: shadows['2xl'],       // For modals/overlays
  dropdown: shadows.lg,        // For dropdowns
  tooltip: shadows.md,         // For tooltips
  popover: shadows.xl,         // For popovers
  drawer: shadows['3xl'],      // For drawers/sidebars
  focus: '0 0 0 3px rgb(0 153 255 / 0.12)', // Focus ring using primary color
  focusError: '0 0 0 3px rgb(239 68 68 / 0.12)', // Error focus ring
} as const;

// Component specific shadow sets
export const componentShadows = {
  elevation: {
    0: shadows.none,
    1: shadows.xs,
    2: shadows.sm,
    3: shadows.DEFAULT,
    4: shadows.md,
    5: shadows.lg,
    6: shadows.xl,
    7: shadows['2xl'],
    8: shadows['3xl'],
  },
} as const;

export type Shadows = typeof shadows;
export type ColoredShadows = typeof coloredShadows;
export type ShadowAliases = typeof shadowAliases;
export type ComponentShadows = typeof componentShadows;

// src/tokens/radii.ts

/**
 * Border Radius Design Tokens
 * Modern radius scale for consistent rounded corners
 */

// Border radius scale
export const radii = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  DEFAULT: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
} as const;

// Semantic radius aliases for components
export const radiusAliases = {
  button: radii.DEFAULT,   // 6px - for buttons
  card: radii.lg,          // 12px - for cards
  input: radii.DEFAULT,    // 6px - for form inputs
  modal: radii.xl,         // 16px - for modals
  avatar: radii.full,      // full - for avatars
  badge: radii.full,       // full - for badges/pills
  tooltip: radii.md,       // 8px - for tooltips
  dropdown: radii.lg,      // 12px - for dropdown menus
} as const;

// Component specific radius sets
export const componentRadius = {
  button: {
    small: radii.sm,       // 4px for small buttons
    medium: radii.DEFAULT, // 6px for medium buttons
    large: radii.md,       // 8px for large buttons
  },
  card: {
    small: radii.md,       // 8px for small cards
    medium: radii.lg,      // 12px for medium cards
    large: radii.xl,       // 16px for large cards
  },
} as const;

export type Radii = typeof radii;
export type RadiusAliases = typeof radiusAliases;
export type ComponentRadius = typeof componentRadius;

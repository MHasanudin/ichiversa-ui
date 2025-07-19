// src/tokens/shadows.ts

/**
 * Shadow Design Tokens for iChiversa UI
 * Provides elevation and depth through consistent shadow system
 */

// Base shadow colors with opacity variants
const shadowColors = {
  gray: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.2)',
    darker: 'rgba(0, 0, 0, 0.3)',
  },
  primary: {
    light: 'rgba(0, 153, 255, 0.1)',
    medium: 'rgba(0, 153, 255, 0.2)',
    dark: 'rgba(0, 153, 255, 0.3)',
  },
  colored: {
    success: 'rgba(34, 197, 94, 0.2)',
    warning: 'rgba(245, 158, 11, 0.2)',
    error: 'rgba(239, 68, 68, 0.2)',
    info: 'rgba(59, 130, 246, 0.2)',
  },
} as const

// Elevation shadows (Material Design inspired)
export const elevations = {
  0: 'none',
  1: `0 1px 2px 0 ${shadowColors.gray.light}`,
  2: `0 1px 3px 0 ${shadowColors.gray.light}, 0 1px 2px 0 ${shadowColors.gray.medium}`,
  3: `0 4px 6px -1px ${shadowColors.gray.medium}, 0 2px 4px -1px ${shadowColors.gray.light}`,
  4: `0 10px 15px -3px ${shadowColors.gray.medium}, 0 4px 6px -2px ${shadowColors.gray.light}`,
  5: `0 20px 25px -5px ${shadowColors.gray.medium}, 0 10px 10px -5px ${shadowColors.gray.light}`,
  6: `0 25px 50px -12px ${shadowColors.gray.dark}`,
} as const

// Component-specific shadows
export const componentShadows = {
  // Button shadows
  'button-rest': elevations[1],
  'button-hover': elevations[2],
  'button-active': elevations[0],
  'button-focus': `${elevations[2]}, 0 0 0 3px ${shadowColors.primary.light}`,
  
  // Card shadows
  'card-sm': elevations[1],
  'card-md': elevations[2],
  'card-lg': elevations[3],
  'card-hover': elevations[4],
  
  // Input shadows
  'input-rest': `inset 0 1px 2px 0 ${shadowColors.gray.light}`,
  'input-focus': `inset 0 1px 2px 0 ${shadowColors.gray.light}, 0 0 0 3px ${shadowColors.primary.light}`,
  'input-error': `inset 0 1px 2px 0 ${shadowColors.gray.light}, 0 0 0 3px ${shadowColors.colored.error}`,
  
  // Modal and overlays
  'modal-backdrop': `0 0 0 1000px rgba(0, 0, 0, 0.5)`,
  'modal-content': elevations[6],
  'dropdown': elevations[4],
  'popover': elevations[3],
  'tooltip': elevations[2],
  
  // Navigation
  'navbar': elevations[1],
  'sidebar': elevations[2],
  'tab-active': elevations[1],
  
  // Interactive elements
  'floating-action': elevations[4],
  'floating-action-hover': elevations[5],
  'chip': elevations[1],
  'badge': elevations[1],
} as const

// Glow effects for special states
export const glowEffects = {
  'primary-sm': `0 0 5px ${shadowColors.primary.light}`,
  'primary-md': `0 0 10px ${shadowColors.primary.medium}`,
  'primary-lg': `0 0 20px ${shadowColors.primary.dark}`,
  
  'success-sm': `0 0 5px ${shadowColors.colored.success}`,
  'success-md': `0 0 10px ${shadowColors.colored.success}`,
  
  'warning-sm': `0 0 5px ${shadowColors.colored.warning}`,
  'warning-md': `0 0 10px ${shadowColors.colored.warning}`,
  
  'error-sm': `0 0 5px ${shadowColors.colored.error}`,
  'error-md': `0 0 10px ${shadowColors.colored.error}`,
} as const

// Inner shadows for pressed/inset effects
export const innerShadows = {
  'inset-sm': `inset 0 1px 2px 0 ${shadowColors.gray.light}`,
  'inset-md': `inset 0 2px 4px 0 ${shadowColors.gray.medium}`,
  'inset-lg': `inset 0 4px 8px 0 ${shadowColors.gray.dark}`,
  
  // Button pressed states
  'button-pressed': `inset 0 2px 4px 0 ${shadowColors.gray.medium}`,
  'button-pressed-dark': `inset 0 2px 4px 0 ${shadowColors.gray.darker}`,
} as const

// Combined shadows object
export const shadows = {
  none: 'none',
  ...elevations,
  ...componentShadows,
  ...glowEffects,
  ...innerShadows,
} as const

// Focus ring shadows for accessibility
export const focusRings = {
  default: `0 0 0 3px ${shadowColors.primary.light}`,
  error: `0 0 0 3px ${shadowColors.colored.error}`,
  success: `0 0 0 3px ${shadowColors.colored.success}`,
  warning: `0 0 0 3px ${shadowColors.colored.warning}`,
  info: `0 0 0 3px ${shadowColors.colored.info}`,
} as const

// Text shadows
export const textShadows = {
  sm: `0 1px 2px ${shadowColors.gray.medium}`,
  md: `0 2px 4px ${shadowColors.gray.medium}`,
  lg: `0 4px 8px ${shadowColors.gray.dark}`,
  none: 'none',
} as const

// Dark mode shadows (with lighter colors for dark backgrounds)
export const darkShadows = {
  1: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  2: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  3: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
  4: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
  5: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  6: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
} as const

export type Elevation = keyof typeof elevations
export type ComponentShadow = keyof typeof componentShadows
export type GlowEffect = keyof typeof glowEffects
export type InnerShadow = keyof typeof innerShadows
export type Shadow = keyof typeof shadows
export type FocusRing = keyof typeof focusRings
export type TextShadow = keyof typeof textShadows

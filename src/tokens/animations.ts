// src/tokens/animations.ts

/**
 * Animation Design Tokens
 * Consistent timing and easing for smooth interactions
 */

// Animation durations in milliseconds
export const duration = {
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
} as const;

// Easing functions for natural motion
export const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Custom easing curves for brand personality
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;

// Transition properties
export const transitionProperty = {
  none: 'none',
  all: 'all',
  DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
} as const;

// Keyframe animations
export const keyframes = {
  spin: {
    to: { transform: 'rotate(360deg)' },
  },
  ping: {
    '75%, 100%': { transform: 'scale(2)', opacity: '0' },
  },
  pulse: {
    '50%': { opacity: '.5' },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  slideIn: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideOut: {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
  },
} as const;

// Semantic animation aliases for common use cases
export const animationAliases = {
  // Micro-interactions
  buttonHover: `${duration[150]} ${easing.out}`,
  buttonPress: `${duration[100]} ${easing.inOut}`,
  
  // Form interactions
  inputFocus: `${duration[200]} ${easing.smooth}`,
  inputBlur: `${duration[150]} ${easing.out}`,
  
  // Modal and overlay animations
  modalEnter: `${duration[300]} ${easing.smooth}`,
  modalExit: `${duration[200]} ${easing.in}`,
  
  // Dropdown and tooltip animations
  dropdownOpen: `${duration[200]} ${easing.out}`,
  dropdownClose: `${duration[150]} ${easing.in}`,
  
  // Loading and skeleton animations
  skeleton: `${duration[1000]} ${easing.inOut}`,
  spin: `${duration[1000]} ${easing.linear}`,
  
  // Page transitions
  pageEnter: `${duration[300]} ${easing.smooth}`,
  pageExit: `${duration[200]} ${easing.in}`,
  
  // Toast notifications
  toastEnter: `${duration[300]} ${easing.bounce}`,
  toastExit: `${duration[200]} ${easing.in}`,
} as const;

export type Duration = typeof duration;
export type Easing = typeof easing;
export type AnimationAliases = typeof animationAliases;

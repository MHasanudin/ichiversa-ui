// src/tokens/animations.ts

/**
 * Animation Design Tokens for iChiversa UI
 * Provides consistent motion design and transitions
 */

// Duration tokens for consistent timing
export const durations = {
  instant: '0ms',
  fastest: '50ms',
  faster: '100ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '800ms',
  glacial: '1200ms',
} as const

// Timing functions for natural motion
export const timingFunctions = {
  // Standard easing curves
  linear: 'linear',
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
  
  // Custom cubic-bezier curves for brand personality
  'ease-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'ease-elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  
  // Material Design curves
  'ease-standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  'ease-decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  'ease-accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
  
  // Organic, human-like curves
  'ease-natural': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'ease-gentle': 'cubic-bezier(0.25, 0.25, 0.75, 0.75)',
  'ease-crisp': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  
  // UI-specific curves
  'ease-slide': 'cubic-bezier(0.25, 1, 0.5, 1)',
  'ease-fade': 'cubic-bezier(0.0, 0.0, 0.58, 1.0)',
  'ease-scale': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

// Common transition combinations
export const transitions = {
  // Basic property transitions
  'color': `color ${durations.fast} ${timingFunctions['ease-out']}`,
  'background': `background-color ${durations.fast} ${timingFunctions['ease-out']}`,
  'border': `border-color ${durations.fast} ${timingFunctions['ease-out']}`,
  'opacity': `opacity ${durations.normal} ${timingFunctions['ease-out']}`,
  'transform': `transform ${durations.normal} ${timingFunctions['ease-out']}`,
  'scale': `transform ${durations.fast} ${timingFunctions['ease-scale']}`,
  'rotate': `transform ${durations.normal} ${timingFunctions['ease-spring']}`,
  
  // Size and position
  'size': `width ${durations.normal} ${timingFunctions['ease-out']}, height ${durations.normal} ${timingFunctions['ease-out']}`,
  'position': `top ${durations.normal} ${timingFunctions['ease-out']}, left ${durations.normal} ${timingFunctions['ease-out']}`,
  'spacing': `margin ${durations.normal} ${timingFunctions['ease-out']}, padding ${durations.normal} ${timingFunctions['ease-out']}`,
  
  // Shadow and elevation
  'shadow': `box-shadow ${durations.normal} ${timingFunctions['ease-out']}`,
  'elevation': `box-shadow ${durations.normal} ${timingFunctions['ease-out']}, transform ${durations.normal} ${timingFunctions['ease-out']}`,
  
  // Combined common transitions
  'base': `color ${durations.fast} ${timingFunctions['ease-out']}, background-color ${durations.fast} ${timingFunctions['ease-out']}, border-color ${durations.fast} ${timingFunctions['ease-out']}`,
  'interactive': `all ${durations.fast} ${timingFunctions['ease-out']}`,
  'smooth': `all ${durations.normal} ${timingFunctions['ease-natural']}`,
  'bounce': `all ${durations.slow} ${timingFunctions['ease-bounce']}`,
  'spring': `all ${durations.normal} ${timingFunctions['ease-spring']}`,
} as const

// Component-specific animations
export const componentAnimations = {
  // Button animations
  'button-hover': `transform ${durations.fast} ${timingFunctions['ease-out']}, box-shadow ${durations.fast} ${timingFunctions['ease-out']}`,
  'button-press': `transform ${durations.fastest} ${timingFunctions['ease-in']}`,
  'button-release': `transform ${durations.fast} ${timingFunctions['ease-spring']}`,
  
  // Input animations
  'input-focus': `border-color ${durations.fast} ${timingFunctions['ease-out']}, box-shadow ${durations.fast} ${timingFunctions['ease-out']}`,
  'input-error': `border-color ${durations.fast} ${timingFunctions['ease-out']}, color ${durations.fast} ${timingFunctions['ease-out']}`,
  
  // Modal animations
  'modal-enter': `opacity ${durations.normal} ${timingFunctions['ease-out']}, transform ${durations.normal} ${timingFunctions['ease-out']}`,
  'modal-exit': `opacity ${durations.fast} ${timingFunctions['ease-in']}, transform ${durations.fast} ${timingFunctions['ease-in']}`,
  'backdrop-enter': `opacity ${durations.normal} ${timingFunctions['ease-out']}`,
  'backdrop-exit': `opacity ${durations.fast} ${timingFunctions['ease-in']}`,
  
  // Dropdown animations
  'dropdown-enter': `opacity ${durations.fast} ${timingFunctions['ease-out']}, transform ${durations.fast} ${timingFunctions['ease-slide']}`,
  'dropdown-exit': `opacity ${durations.fastest} ${timingFunctions['ease-in']}, transform ${durations.fastest} ${timingFunctions['ease-in']}`,
  
  // Tooltip animations
  'tooltip-enter': `opacity ${durations.fast} ${timingFunctions['ease-out']}, transform ${durations.fast} ${timingFunctions['ease-fade']}`,
  'tooltip-exit': `opacity ${durations.fastest} ${timingFunctions['ease-in']}`,
  
  // Toast animations
  'toast-enter': `opacity ${durations.normal} ${timingFunctions['ease-out']}, transform ${durations.normal} ${timingFunctions['ease-slide']}`,
  'toast-exit': `opacity ${durations.fast} ${timingFunctions['ease-in']}, transform ${durations.fast} ${timingFunctions['ease-in']}`,
  
  // Slide animations
  'slide-left': `transform ${durations.normal} ${timingFunctions['ease-slide']}`,
  'slide-right': `transform ${durations.normal} ${timingFunctions['ease-slide']}`,
  'slide-up': `transform ${durations.normal} ${timingFunctions['ease-slide']}`,
  'slide-down': `transform ${durations.normal} ${timingFunctions['ease-slide']}`,
  
  // Collapse/expand animations
  'collapse': `height ${durations.normal} ${timingFunctions['ease-out']}, opacity ${durations.fast} ${timingFunctions['ease-out']}`,
  'expand': `height ${durations.normal} ${timingFunctions['ease-out']}, opacity ${durations.normal} ${timingFunctions['ease-out']}`,
} as const

// Keyframe animations for CSS @keyframes
export const keyframes = {
  // Loading animations
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
  
  bounce: {
    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
  },
  
  // Enter/exit animations
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  
  slideInFromTop: {
    '0%': { transform: 'translateY(-100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  
  slideInFromBottom: {
    '0%': { transform: 'translateY(100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  
  slideInFromLeft: {
    '0%': { transform: 'translateX(-100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  
  slideInFromRight: {
    '0%': { transform: 'translateX(100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  
  scaleIn: {
    '0%': { transform: 'scale(0.9)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  
  scaleOut: {
    '0%': { transform: 'scale(1)', opacity: '1' },
    '100%': { transform: 'scale(0.9)', opacity: '0' },
  },
  
  // Attention animations
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
    '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
  },
  
  tada: {
    '0%': { transform: 'scale(1) rotate(0deg)' },
    '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
    '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
    '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
    '100%': { transform: 'scale(1) rotate(0deg)' },
  },
  
  rubberBand: {
    '0%': { transform: 'scale(1, 1)' },
    '30%': { transform: 'scale(1.25, 0.75)' },
    '40%': { transform: 'scale(0.75, 1.25)' },
    '50%': { transform: 'scale(1.15, 0.85)' },
    '65%': { transform: 'scale(0.95, 1.05)' },
    '75%': { transform: 'scale(1.05, 0.95)' },
    '100%': { transform: 'scale(1, 1)' },
  },
  
  // Progress animations
  progressIndeterminate: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  
  skeletonLoading: {
    '0%': { backgroundPosition: '-200px 0' },
    '100%': { backgroundPosition: '200px 0' },
  },
} as const

// Animation utilities for common patterns
export const animationUtilities = {
  // Quick animations for micro-interactions
  'hover-lift': `transform: translateY(-1px); transition: ${componentAnimations['button-hover']};`,
  'hover-scale': `transform: scale(1.02); transition: ${transitions.scale};`,
  'press-scale': `transform: scale(0.98); transition: ${componentAnimations['button-press']};`,
  
  // Loading states
  'spin-slow': `animation: spin ${durations.glacial} ${timingFunctions.linear} infinite;`,
  'spin-fast': `animation: spin ${durations.slow} ${timingFunctions.linear} infinite;`,
  'pulse-slow': `animation: pulse ${durations.slower} ${timingFunctions['ease-in-out']} infinite;`,
  'bounce-subtle': `animation: bounce ${durations.slow} ${timingFunctions['ease-bounce']} infinite;`,
  
  // Focus states
  'focus-ring': `outline: 2px solid transparent; outline-offset: 2px; box-shadow: 0 0 0 3px rgba(0, 153, 255, 0.1); transition: ${transitions.base};`,
  
  // Disabled states
  'disabled': `opacity: 0.5; pointer-events: none; transition: ${transitions.opacity};`,
} as const

export type Duration = keyof typeof durations
export type TimingFunction = keyof typeof timingFunctions
export type Transition = keyof typeof transitions
export type ComponentAnimation = keyof typeof componentAnimations
export type Keyframe = keyof typeof keyframes
export type AnimationUtility = keyof typeof animationUtilities

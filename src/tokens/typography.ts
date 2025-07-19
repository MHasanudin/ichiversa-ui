// src/tokens/typography.ts

/**
 * Typography Design Tokens for iChiversa UI
 */

// Font families
export const fontFamilies = {
  sans: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(', '),
  
  serif: [
    'ui-serif',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(', '),
  
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    '"Roboto Mono"',
    'Consolas',
    '"Liberation Mono"',
    'Menlo',
    'monospace',
  ].join(', '),
} as const

// Font weights
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const

// Font sizes with corresponding line heights
export const fontSizes = {
  xs: {
    fontSize: '0.75rem',    // 12px
    lineHeight: '1rem',     // 16px
  },
  sm: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.25rem',  // 20px
  },
  base: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.5rem',   // 24px
  },
  lg: {
    fontSize: '1.125rem',   // 18px
    lineHeight: '1.75rem',  // 28px
  },
  xl: {
    fontSize: '1.25rem',    // 20px
    lineHeight: '1.75rem',  // 28px
  },
  '2xl': {
    fontSize: '1.5rem',     // 24px
    lineHeight: '2rem',     // 32px
  },
  '3xl': {
    fontSize: '1.875rem',   // 30px
    lineHeight: '2.25rem',  // 36px
  },
  '4xl': {
    fontSize: '2.25rem',    // 36px
    lineHeight: '2.5rem',   // 40px
  },
  '5xl': {
    fontSize: '3rem',       // 48px
    lineHeight: '1',
  },
  '6xl': {
    fontSize: '3.75rem',    // 60px
    lineHeight: '1',
  },
  '7xl': {
    fontSize: '4.5rem',     // 72px
    lineHeight: '1',
  },
  '8xl': {
    fontSize: '6rem',       // 96px
    lineHeight: '1',
  },
  '9xl': {
    fontSize: '8rem',       // 128px
    lineHeight: '1',
  },
} as const

// Letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const

// Text styles - semantic combinations
export const textStyles = {
  // Headings
  'heading-1': {
    ...fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  'heading-2': {
    ...fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  'heading-3': {
    ...fontSizes['3xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.tight,
  },
  'heading-4': {
    ...fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  'heading-5': {
    ...fontSizes.xl,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  'heading-6': {
    ...fontSizes.lg,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },
  
  // Body text
  'body-large': {
    ...fontSizes.lg,
    fontWeight: fontWeights.normal,
  },
  'body-normal': {
    ...fontSizes.base,
    fontWeight: fontWeights.normal,
  },
  'body-small': {
    ...fontSizes.sm,
    fontWeight: fontWeights.normal,
  },
  
  // UI text
  'ui-large': {
    ...fontSizes.base,
    fontWeight: fontWeights.medium,
  },
  'ui-normal': {
    ...fontSizes.sm,
    fontWeight: fontWeights.medium,
  },
  'ui-small': {
    ...fontSizes.xs,
    fontWeight: fontWeights.medium,
  },
  
  // Labels and captions
  'label-large': {
    ...fontSizes.sm,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  'label-normal': {
    ...fontSizes.xs,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  'caption': {
    ...fontSizes.xs,
    fontWeight: fontWeights.normal,
  },
  
  // Code
  'code-inline': {
    fontSize: '0.875em',
    fontFamily: fontFamilies.mono,
    fontWeight: fontWeights.normal,
  },
  'code-block': {
    ...fontSizes.sm,
    fontFamily: fontFamilies.mono,
    fontWeight: fontWeights.normal,
    lineHeight: '1.7',
  },
} as const

export type FontFamily = keyof typeof fontFamilies
export type FontWeight = keyof typeof fontWeights
export type FontSize = keyof typeof fontSizes
export type LetterSpacing = keyof typeof letterSpacing
export type TextStyle = keyof typeof textStyles
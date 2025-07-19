// src/tokens/spacing.ts

/**
 * Spacing Design Tokens for iChiversa UI
 * Based on a consistent 4px base unit
 */

// Base unit for consistent spacing
const BASE_UNIT = 4 // 4px

// Core spacing scale
export const spacing = {
  px: '1px',
  0: '0px',
  0.5: `${BASE_UNIT * 0.125}px`, // 0.5px
  1: `${BASE_UNIT * 0.25}px`,    // 1px
  1.5: `${BASE_UNIT * 0.375}px`, // 1.5px
  2: `${BASE_UNIT * 0.5}px`,     // 2px
  2.5: `${BASE_UNIT * 0.625}px`, // 2.5px
  3: `${BASE_UNIT * 0.75}px`,    // 3px
  3.5: `${BASE_UNIT * 0.875}px`, // 3.5px
  4: `${BASE_UNIT}px`,           // 4px
  5: `${BASE_UNIT * 1.25}px`,    // 5px
  6: `${BASE_UNIT * 1.5}px`,     // 6px
  7: `${BASE_UNIT * 1.75}px`,    // 7px
  8: `${BASE_UNIT * 2}px`,       // 8px
  9: `${BASE_UNIT * 2.25}px`,    // 9px
  10: `${BASE_UNIT * 2.5}px`,    // 10px
  11: `${BASE_UNIT * 2.75}px`,   // 11px
  12: `${BASE_UNIT * 3}px`,      // 12px
  14: `${BASE_UNIT * 3.5}px`,    // 14px
  16: `${BASE_UNIT * 4}px`,      // 16px
  20: `${BASE_UNIT * 5}px`,      // 20px
  24: `${BASE_UNIT * 6}px`,      // 24px
  28: `${BASE_UNIT * 7}px`,      // 28px
  32: `${BASE_UNIT * 8}px`,      // 32px
  36: `${BASE_UNIT * 9}px`,      // 36px
  40: `${BASE_UNIT * 10}px`,     // 40px
  44: `${BASE_UNIT * 11}px`,     // 44px
  48: `${BASE_UNIT * 12}px`,     // 48px
  52: `${BASE_UNIT * 13}px`,     // 52px
  56: `${BASE_UNIT * 14}px`,     // 56px
  60: `${BASE_UNIT * 15}px`,     // 60px
  64: `${BASE_UNIT * 16}px`,     // 64px
  72: `${BASE_UNIT * 18}px`,     // 72px
  80: `${BASE_UNIT * 20}px`,     // 80px
  96: `${BASE_UNIT * 24}px`,     // 96px
} as const

// Semantic spacing names for consistent usage
export const spacingSemantic = {
  // Component internal spacing
  'component-xs': spacing[2],      // 2px
  'component-sm': spacing[4],      // 4px
  'component-md': spacing[8],      // 8px
  'component-lg': spacing[12],     // 12px
  'component-xl': spacing[16],     // 16px
  'component-2xl': spacing[20],    // 20px
  
  // Layout spacing
  'layout-xs': spacing[8],         // 8px
  'layout-sm': spacing[12],        // 12px
  'layout-md': spacing[16],        // 16px
  'layout-lg': spacing[24],        // 24px
  'layout-xl': spacing[32],        // 32px
  'layout-2xl': spacing[40],       // 40px
  'layout-3xl': spacing[48],       // 48px
  'layout-4xl': spacing[64],       // 64px
  'layout-5xl': spacing[80],       // 80px
  'layout-6xl': spacing[96],       // 96px
  
  // Content spacing
  'content-xs': spacing[4],        // 4px
  'content-sm': spacing[8],        // 8px
  'content-md': spacing[12],       // 12px
  'content-lg': spacing[16],       // 16px
  'content-xl': spacing[24],       // 24px
  'content-2xl': spacing[32],      // 32px
} as const

// Container sizes
export const containers = {
  xs: '20rem',     // 320px
  sm: '24rem',     // 384px
  md: '28rem',     // 448px
  lg: '32rem',     // 512px
  xl: '36rem',     // 576px
  '2xl': '42rem',  // 672px
  '3xl': '48rem',  // 768px
  '4xl': '56rem',  // 896px
  '5xl': '64rem',  // 1024px
  '6xl': '72rem',  // 1152px
  '7xl': '80rem',  // 1280px
  full: '100%',
  screen: '100vw',
} as const

// Content max widths for readability
export const maxWidths = {
  prose: '65ch',
  'prose-sm': '55ch',
  'prose-lg': '75ch',
  'prose-xl': '85ch',
  ...containers,
} as const

// Heights
export const heights = {
  auto: 'auto',
  ...spacing,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '5/6': '83.333333%',
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
} as const

// Widths
export const widths = {
  auto: 'auto',
  ...spacing,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
  screen: '100vw',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
} as const

export type Spacing = keyof typeof spacing
export type SpacingSemantic = keyof typeof spacingSemantic
export type Container = keyof typeof containers
export type MaxWidth = keyof typeof maxWidths
export type Height = keyof typeof heights
export type Width = keyof typeof widths

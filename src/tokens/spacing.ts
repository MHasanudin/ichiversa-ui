// src/tokens/spacing.ts

/**
 * Spacing Design Tokens
 * Based on 4px grid system for perfect pixel alignment
 */

// Spacing scale following 4px base grid system
export const spacing = {
  0: '0px',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
} as const;

// Semantic spacing aliases for components
export const spacingAliases = {
  xs: spacing[1],      // 4px - minimal spacing
  sm: spacing[2],      // 8px - small spacing
  md: spacing[4],      // 16px - medium spacing
  lg: spacing[6],      // 24px - large spacing
  xl: spacing[8],      // 32px - extra large spacing
  '2xl': spacing[12],  // 48px - 2x extra large
  '3xl': spacing[16],  // 64px - 3x extra large
  '4xl': spacing[20],  // 80px - 4x extra large
  '5xl': spacing[24],  // 96px - 5x extra large
} as const;

// Component specific spacing
export const componentSpacing = {
  button: {
    paddingX: spacing[4],    // 16px horizontal padding
    paddingY: spacing[2],    // 8px vertical padding
    gap: spacing[2],         // 8px gap between icon and text
  },
  input: {
    paddingX: spacing[3],    // 12px horizontal padding
    paddingY: spacing[2.5],  // 10px vertical padding
  },
  card: {
    padding: spacing[6],     // 24px padding
    gap: spacing[4],         // 16px gap between elements
  },
  modal: {
    padding: spacing[8],     // 32px padding
    gap: spacing[6],         // 24px gap between sections
  },
} as const;

export type Spacing = typeof spacing;
export type SpacingAliases = typeof spacingAliases;
export type ComponentSpacing = typeof componentSpacing;

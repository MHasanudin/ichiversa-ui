// src/tokens/radii.ts

/**
 * Border Radius Design Tokens for iChiversa UI
 * Provides consistent rounded corners and border styling
 */

// Core radius scale
export const radii = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  '4xl': '32px',
  '5xl': '40px',
  full: '9999px',
} as const

// Semantic radius names for specific use cases
export const semanticRadii = {
  // Component-specific radii
  'button': radii.md,         // 6px - Standard button radius
  'button-sm': radii.sm,      // 4px - Small button radius
  'button-lg': radii.lg,      // 8px - Large button radius
  'button-pill': radii.full,  // Full radius for pill buttons
  
  'input': radii.md,          // 6px - Standard input radius
  'input-sm': radii.sm,       // 4px - Small input radius
  'input-lg': radii.lg,       // 8px - Large input radius
  
  'card': radii.lg,           // 8px - Card container radius
  'card-sm': radii.md,        // 6px - Small card radius
  'card-lg': radii.xl,        // 12px - Large card radius
  
  'modal': radii.xl,          // 12px - Modal dialog radius
  'popover': radii.lg,        // 8px - Popover radius
  'tooltip': radii.sm,        // 4px - Tooltip radius
  'dropdown': radii.lg,       // 8px - Dropdown menu radius
  
  'badge': radii.full,        // Full radius for badges
  'chip': radii.full,         // Full radius for chips
  'tag': radii.sm,            // 4px - Tag radius
  
  'avatar': radii.full,       // Full radius for circular avatars
  'avatar-square': radii.lg,  // 8px - Square avatar radius
  
  'image': radii.lg,          // 8px - Image radius
  'image-sm': radii.md,       // 6px - Small image radius
  'image-lg': radii.xl,       // 12px - Large image radius
  
  'tab': radii.md,            // 6px - Tab radius
  'progress': radii.full,     // Full radius for progress bars
  'slider': radii.full,       // Full radius for slider tracks
  
  // Layout radii
  'container': radii.xl,      // 12px - Container radius
  'section': radii['2xl'],    // 16px - Section radius
  'panel': radii.lg,          // 8px - Panel radius
} as const

// Radius combinations for complex components
export const radiusCombinations = {
  // Directional radii for specific sides
  'top': {
    'border-top-left-radius': radii.lg,
    'border-top-right-radius': radii.lg,
    'border-bottom-left-radius': radii.none,
    'border-bottom-right-radius': radii.none,
  },
  'bottom': {
    'border-top-left-radius': radii.none,
    'border-top-right-radius': radii.none,
    'border-bottom-left-radius': radii.lg,
    'border-bottom-right-radius': radii.lg,
  },
  'left': {
    'border-top-left-radius': radii.lg,
    'border-top-right-radius': radii.none,
    'border-bottom-left-radius': radii.lg,
    'border-bottom-right-radius': radii.none,
  },
  'right': {
    'border-top-left-radius': radii.none,
    'border-top-right-radius': radii.lg,
    'border-bottom-left-radius': radii.none,
    'border-bottom-right-radius': radii.lg,
  },
  
  // Corner-specific radii
  'top-left': {
    'border-top-left-radius': radii.lg,
  },
  'top-right': {
    'border-top-right-radius': radii.lg,
  },
  'bottom-left': {
    'border-bottom-left-radius': radii.lg,
  },
  'bottom-right': {
    'border-bottom-right-radius': radii.lg,
  },
  
  // Complex component radii
  'modal-header': {
    'border-top-left-radius': radii.xl,
    'border-top-right-radius': radii.xl,
    'border-bottom-left-radius': radii.none,
    'border-bottom-right-radius': radii.none,
  },
  'modal-footer': {
    'border-top-left-radius': radii.none,
    'border-top-right-radius': radii.none,
    'border-bottom-left-radius': radii.xl,
    'border-bottom-right-radius': radii.xl,
  },
  
  'tab-active': {
    'border-top-left-radius': radii.md,
    'border-top-right-radius': radii.md,
    'border-bottom-left-radius': radii.none,
    'border-bottom-right-radius': radii.none,
  },
  'tab-inactive': {
    'border-radius': radii.none,
  },
  
  'dropdown-item': {
    'border-radius': radii.sm,
  },
  'dropdown-first': {
    'border-top-left-radius': radii.md,
    'border-top-right-radius': radii.md,
    'border-bottom-left-radius': radii.sm,
    'border-bottom-right-radius': radii.sm,
  },
  'dropdown-last': {
    'border-top-left-radius': radii.sm,
    'border-top-right-radius': radii.sm,
    'border-bottom-left-radius': radii.md,
    'border-bottom-right-radius': radii.md,
  },
} as const

// Border width tokens
export const borderWidths = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

// Border styles
export const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double',
  groove: 'groove',
  ridge: 'ridge',
  inset: 'inset',
  outset: 'outset',
  none: 'none',
  hidden: 'hidden',
} as const

// Common border combinations
export const borders = {
  none: 'none',
  thin: `${borderWidths[1]} ${borderStyles.solid}`,
  medium: `${borderWidths[2]} ${borderStyles.solid}`,
  thick: `${borderWidths[4]} ${borderStyles.solid}`,
  
  // Semantic borders
  'input': `${borderWidths[1]} ${borderStyles.solid}`,
  'input-focus': `${borderWidths[2]} ${borderStyles.solid}`,
  'input-error': `${borderWidths[2]} ${borderStyles.solid}`,
  
  'card': `${borderWidths[1]} ${borderStyles.solid}`,
  'card-hover': `${borderWidths[2]} ${borderStyles.solid}`,
  
  'button': `${borderWidths[1]} ${borderStyles.solid}`,
  'button-focus': `${borderWidths[2]} ${borderStyles.solid}`,
  
  'divider': `${borderWidths[1]} ${borderStyles.solid}`,
  'divider-thick': `${borderWidths[2]} ${borderStyles.solid}`,
  
  // Dashed borders for placeholders
  'dashed': `${borderWidths[1]} ${borderStyles.dashed}`,
  'dashed-thick': `${borderWidths[2]} ${borderStyles.dashed}`,
  
  // Dotted borders for focus indicators
  'dotted': `${borderWidths[1]} ${borderStyles.dotted}`,
  'dotted-thick': `${borderWidths[2]} ${borderStyles.dotted}`,
} as const

// Outline tokens for accessibility
export const outlines = {
  none: 'none',
  thin: `${borderWidths[1]} ${borderStyles.solid}`,
  medium: `${borderWidths[2]} ${borderStyles.solid}`,
  thick: `${borderWidths[4]} ${borderStyles.solid}`,
  
  // Focus outlines
  'focus': `${borderWidths[2]} ${borderStyles.solid}`,
  'focus-visible': `${borderWidths[2]} ${borderStyles.dashed}`,
  
  // Offset outlines
  'offset-1': `${borderWidths[2]} ${borderStyles.solid}`,
  'offset-2': `${borderWidths[2]} ${borderStyles.solid}`,
} as const

// Outline offset tokens
export const outlineOffsets = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

export type Radius = keyof typeof radii
export type SemanticRadius = keyof typeof semanticRadii
export type RadiusCombination = keyof typeof radiusCombinations
export type BorderWidth = keyof typeof borderWidths
export type BorderStyle = keyof typeof borderStyles
export type Border = keyof typeof borders
export type Outline = keyof typeof outlines
export type OutlineOffset = keyof typeof outlineOffsets

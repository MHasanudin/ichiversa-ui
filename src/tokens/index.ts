// src/tokens/index.ts

/**
 * iChiversa UI Design Tokens
 * Comprehensive design system tokens for consistent theming
 */

// Export all design tokens
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './animations'
export * from './radii'

// Re-export types for convenience
export type {
  Colors,
  ColorScale,
} from './colors'

export type {
  FontFamily,
  FontWeight,
  FontSize,
  LetterSpacing,
  TextStyle,
} from './typography'

export type {
  Spacing,
  SpacingSemantic,
  Container,
  MaxWidth,
  Height,
  Width,
} from './spacing'

export type {
  Elevation,
  ComponentShadow,
  GlowEffect,
  InnerShadow,
  Shadow,
  FocusRing,
  TextShadow,
} from './shadows'

export type {
  Duration,
  TimingFunction,
  Transition,
  ComponentAnimation,
  Keyframe,
  AnimationUtility,
} from './animations'

export type {
  Radius,
  SemanticRadius,
  RadiusCombination,
  BorderWidth,
  BorderStyle,
  Border,
  Outline,
  OutlineOffset,
} from './radii'

// Default theme configuration
import { colors } from './colors'
import { fontFamilies, fontWeights, fontSizes, textStyles } from './typography'
import { spacing, spacingSemantic, containers } from './spacing'
import { shadows, elevations, componentShadows } from './shadows'
import { durations, timingFunctions, transitions } from './animations'
import { radii, semanticRadii, borders } from './radii'

export const defaultTheme = {
  colors,
  typography: {
    fontFamilies,
    fontWeights,
    fontSizes,
    textStyles,
  },
  spacing: {
    spacing,
    semantic: spacingSemantic,
    containers,
  },
  shadows: {
    shadows,
    elevations,
    components: componentShadows,
  },
  animations: {
    durations,
    timingFunctions,
    transitions,
  },
  radii: {
    radii,
    semantic: semanticRadii,
    borders,
  },
} as const

export type DefaultTheme = typeof defaultTheme

// Helper function to create custom themes
export function createTheme(customTokens: Partial<DefaultTheme> = {}): DefaultTheme {
  return {
    ...defaultTheme,
    ...customTokens,
    colors: {
      ...defaultTheme.colors,
      ...customTokens.colors,
    },
    typography: {
      ...defaultTheme.typography,
      ...customTokens.typography,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...customTokens.spacing,
    },
    shadows: {
      ...defaultTheme.shadows,
      ...customTokens.shadows,
    },
    animations: {
      ...defaultTheme.animations,
      ...customTokens.animations,
    },
    radii: {
      ...defaultTheme.radii,
      ...customTokens.radii,
    },
  }
}

// src/tokens/colors.ts

/**
 * Design Tokens for iChiversa UI
 * Based on the logo's blue-to-teal gradient theme
 */

// Brand colors extracted from iChiversa logo
export const brandColors = {
  primary: '#0099ff',    // Main blue (vibrant blue from logo)
  secondary: '#00d4aa',  // Teal/mint green from logo
  tertiary: '#4dd4ff',   // Light blue accent
  dark: '#0066cc',       // Darker blue for contrast
  light: '#f0f9ff',      // Very light blue/white
  muted: '#64748b',      // Neutral gray-blue
} as const;

// Semantic colors with variants for better UX
export const semanticColors = {
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    900: '#14532d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    900: '#78350f',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    900: '#7f1d1d',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    900: '#1e3a8a',
  },
} as const;

// Primary color scale based on logo blue
export const primaryScale = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0099ff', // Main brand color
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
  950: '#082f49',
} as const;

// Secondary color scale based on teal/mint
export const secondaryScale = {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#00d4aa', // Main secondary color
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  950: '#042f2e',
} as const;

// Neutral grays
export const grayScale = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280', // Main muted color
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',
} as const;

// Base colors
export const baseColors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
} as const;

// Combined colors object for export
export const colors = {
  ...baseColors,
  ...brandColors,
  primary: primaryScale,
  secondary: secondaryScale,
  gray: grayScale,
  ...semanticColors,
  
  // Aliases for backward compatibility and convenience
  background: baseColors.white,
  foreground: grayScale[900],
  surface: grayScale[50],
  border: grayScale[200],
  input: grayScale[50],
  ring: primaryScale[500],
} as const;

export type ColorScale = typeof primaryScale;
export type Colors = typeof colors;

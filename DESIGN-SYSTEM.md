# iChiversa UI - Design System & Theming Guide

iChiversa UI adalah UI library modern berbasis Vue 3 + TailwindCSS 3 + TypeScript dengan sistem design token yang scalable dan theming yang fleksibel.

## 🎨 Design System Overview

### Struktur Token

```
src/tokens/
├── colors.ts          # Color tokens & scales
├── spacing.ts         # Spacing & layout tokens
├── font.ts           # Typography tokens
├── radii.ts          # Border radius tokens
├── shadows.ts        # Shadow & elevation tokens
├── animations.ts     # Animation & transition tokens
├── index.ts          # Token exports
└── *.js             # JavaScript versions for Tailwind
```

### Struktur Theme

```
src/assets/
└── theme.css         # CSS variables & theme system

src/composables/
└── useTheme.ts       # Theme management composable
```

## 🌈 Color System

### Brand Colors

Berdasarkan logo iChiversa dengan gradasi biru-hijau yang modern:

```typescript
const brandColors = {
  primary: '#0099ff',    // Main blue (vibrant blue)
  secondary: '#00d4aa',  // Teal/mint green
  tertiary: '#4dd4ff',   // Light blue accent
  dark: '#0066cc',       // Darker blue for contrast
  light: '#f0f9ff',      // Very light blue/white
  muted: '#64748b',      // Neutral gray-blue
}
```

### Color Scales

Setiap warna utama memiliki skala 50-950 untuk fleksibilitas:

```vue
<template>
  <!-- Menggunakan Tailwind classes -->
  <div class="bg-primary-500 text-white">Primary button</div>
  <div class="bg-secondary-100 text-secondary-900">Light secondary</div>
  
  <!-- Menggunakan CSS variables -->
  <div style="background: var(--color-primary); color: white">Custom component</div>
</template>
```

### Semantic Colors

- **Success**: `#22c55e` (Green)
- **Warning**: `#f59e0b` (Amber)  
- **Error**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

## 📏 Spacing System

Menggunakan 4px grid system untuk pixel-perfect alignment:

```typescript
const spacing = {
  xs: '4px',     // Minimal spacing
  sm: '8px',     // Small spacing  
  md: '16px',    // Medium spacing
  lg: '24px',    // Large spacing
  xl: '32px',    // Extra large spacing
  '2xl': '48px', // 2x extra large
  '3xl': '64px', // 3x extra large
}
```

### Penggunaan

```vue
<template>
  <!-- Tailwind classes -->
  <div class="p-md gap-sm">
    <button class="px-lg py-sm">Button</button>
  </div>
  
  <!-- CSS variables -->
  <div style="padding: var(--spacing-md); gap: var(--spacing-sm)">
    Custom layout
  </div>
</template>
```

## 🎯 Border Radius

Sistem radius yang konsisten untuk semua komponen:

```typescript
const radii = {
  xs: '2px',     // Minimal radius
  sm: '4px',     // Small radius
  md: '6px',     // Medium radius (default)
  lg: '8px',     // Large radius
  xl: '12px',    // Extra large radius
  '2xl': '16px', // 2x extra large
  '3xl': '20px', // 3x extra large  
  full: '9999px' // Full circle
}
```

### Component Radius

```typescript
const componentRadius = {
  button: 'var(--radius-md)',    // 6px for buttons
  card: 'var(--radius-lg)',      // 8px for cards  
  input: 'var(--radius-md)',     // 6px for inputs
  modal: 'var(--radius-xl)',     // 12px for modals
  avatar: 'var(--radius-full)',  // Full circle for avatars
  badge: 'var(--radius-full)',   // Full circle for badges
}
```

## 🎭 Shadow System

Elevation system untuk hierarchy visual:

```typescript
const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
}
```

### Component Shadows

```typescript
const shadowAliases = {
  button: 'var(--shadow-sm)',          // For buttons
  'button-hover': 'var(--shadow-md)',  // For button hover
  card: 'var(--shadow-md)',            // For cards
  'card-hover': 'var(--shadow-lg)',    // For card hover
  modal: 'var(--shadow-2xl)',          // For modals
  focus: '0 0 0 3px rgb(0 153 255 / 0.12)', // Focus ring
}
```

## ⚡ Animation System

Timing dan easing functions yang konsisten:

```typescript
const duration = {
  75: '75ms',    // Ultra fast
  100: '100ms',  // Very fast
  150: '150ms',  // Fast
  200: '200ms',  // Medium
  300: '300ms',  // Slow
  500: '500ms',  // Very slow
}

const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}
```

## 🌗 Theme System

### Menggunakan Theme Composable

```vue
<script setup>
import { useTheme } from '@/composables/useTheme'

const { theme, isDark, toggleTheme, setTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }} Toggle Theme
  </button>
  
  <select @change="setTheme($event.target.value)">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="system">System</option>
  </select>
</template>
```

### Theme Detection

```typescript
// Automatic system theme detection
const { effectiveTheme, isSystemTheme } = useTheme()

// Manual theme initialization (for SSR)
import { initializeTheme } from '@/composables/useTheme'
initializeTheme()
```

## 🛠️ Tailwind Integration

### Configuration

Tokens terintegrasi penuh dengan Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          500: 'var(--color-primary-500)',
          // ...
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        md: 'var(--spacing-md)',
        // ...
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        // ...
      }
    }
  }
}
```

### Utility Classes

```vue
<template>
  <!-- Menggunakan design tokens via Tailwind -->
  <div class="bg-surface border border-border rounded-card p-md shadow-card">
    <h2 class="text-foreground text-lg font-semibold mb-sm">Card Title</h2>
    <p class="text-muted-foreground text-sm mb-md">Card description</p>
    <button class="btn btn-primary">Action</button>
  </div>
</template>
```

## 🧩 Component Development

### Menggunakan Design Tokens

```vue
<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
const buttonClasses = computed(() => [
  // Base classes menggunakan CSS variables
  'inline-flex items-center justify-center',
  'rounded-button px-md py-sm',
  'font-medium transition-all duration-150',
  
  // Variant classes
  variant === 'primary' && [
    'bg-primary text-white',
    'hover:bg-primary-600 active:bg-primary-700',
    'shadow-button hover:shadow-button-hover'
  ],
  
  variant === 'outline' && [
    'border border-border bg-background text-foreground',
    'hover:bg-surface hover:border-border-hover'
  ]
])
</script>

<style scoped>
/* Atau menggunakan CSS variables langsung */
.custom-button {
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-button);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-button);
  transition: all var(--duration-150) var(--ease-out);
}

.custom-button:hover {
  background: var(--color-primary-600);
  box-shadow: var(--shadow-button-hover);
}

.custom-button:focus {
  box-shadow: var(--shadow-focus);
}
</style>
```

## 📦 Component Classes

Library menyediakan utility classes siap pakai:

```css
/* Button utilities */
.btn {
  @apply inline-flex items-center justify-center rounded-button px-4 py-2 text-sm font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-button hover:shadow-button-hover;
}

.btn-outline {
  @apply border border-border bg-background text-foreground hover:bg-surface hover:border-border-hover;
}

/* Card utilities */
.card {
  @apply rounded-card bg-surface border border-border shadow-card;
}

/* Input utilities */
.input {
  @apply flex w-full rounded-input border border-input-border bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring;
}
```

## 🎯 Best Practices

### 1. Konsistensi Token

```vue
<!-- ✅ Good: Menggunakan design tokens -->
<div class="p-md gap-sm rounded-card shadow-card">

<!-- ❌ Bad: Hard-coded values -->
<div class="p-4 gap-2 rounded-lg shadow-md">
```

### 2. Theme-aware Components

```vue
<!-- ✅ Good: Menggunakan semantic colors -->
<div class="bg-surface text-foreground border-border">

<!-- ❌ Bad: Hard-coded colors -->
<div class="bg-white text-gray-900 border-gray-200">
```

### 3. CSS Variable Usage

```css
/* ✅ Good: Menggunakan CSS variables */
.custom-component {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--spacing-md);
  transition: all var(--duration-200) var(--ease-out);
}

/* ❌ Bad: Hard-coded values */
.custom-component {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  transition: all 200ms ease-out;
}
```

### 4. Responsive Design

```vue
<template>
  <!-- Menggunakan responsive spacing -->
  <div class="p-sm md:p-md lg:p-lg">
    <h1 class="text-lg md:text-xl lg:text-2xl">Responsive Title</h1>
  </div>
</template>
```

## 🚀 Migration & Customization

### Custom Theme Override

```css
/* Override specific variables */
:root {
  --color-primary: #your-brand-color;
  --radius-card: 12px;
  --shadow-card: 0 8px 20px rgba(0,0,0,0.15);
}
```

### Extending Color Palette

```typescript
// tokens/colors.ts
export const customColors = {
  brand: {
    50: '#f0f9ff',
    500: '#your-color',
    900: '#your-dark-color',
  }
}
```

### Component Customization

```vue
<template>
  <Button 
    variant="custom"
    class="custom-button-override"
  >
    Custom Button
  </Button>
</template>

<style>
.custom-button-override {
  --local-bg: var(--color-custom);
  --local-hover: var(--color-custom-hover);
  
  background: var(--local-bg);
  border-radius: var(--radius-2xl);
}
</style>
```

## 🔧 Development Workflow

### 1. Token Development

1. Update tokens di `src/tokens/*.ts`
2. Regenerate JavaScript versions untuk Tailwind
3. Update CSS variables di `theme.css`
4. Test di playground

### 2. Component Development

1. Gunakan tokens melalui Tailwind classes atau CSS variables
2. Implement theme-aware styling
3. Test di light/dark modes
4. Dokumentasikan component API

### 3. Testing

```bash
# Run playground untuk testing visual
npm run dev

# Test di berbagai theme modes
npm run build && npm run preview
```

## 📋 Checklist Implementation

- ✅ Design tokens terstruktur dan scalable
- ✅ Warna berdasarkan logo iChiversa
- ✅ Integrasi penuh dengan Tailwind CSS
- ✅ CSS variables untuk theming fleksibel
- ✅ Dark/light mode support dengan `[data-theme]`
- ✅ Theme composable untuk Vue 3
- ✅ Component utilities siap pakai
- ✅ Sistem typography yang konsisten
- ✅ Animation tokens dan presets
- ✅ Dokumentasi lengkap dan examples

Design system ini ready untuk production dan dapat di-scale untuk tim besar dengan mudah! 🎉

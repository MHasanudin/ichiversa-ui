<template>
  <div class="min-h-screen bg-background text-foreground p-8">
    <!-- Theme Controls -->
    <div class="mb-8 flex items-center gap-4">
      <h1 class="text-3xl font-bold text-primary">iChiversa UI Demo</h1>
      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="btn btn-outline"
        >
          {{ isDark ? '☀️' : '🌙' }} 
          {{ theme === 'system' ? 'System' : theme }}
        </button>
        <button
          @click="resetToSystem"
          class="btn btn-outline"
        >
          Reset to System
        </button>
      </div>
    </div>

    <!-- Color Palette Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Color Palette</h2>
      
      <!-- Brand Colors -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Brand Colors</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div class="space-y-2">
            <div class="h-20 bg-primary rounded-lg shadow-card"></div>
            <p class="text-sm font-medium">Primary</p>
            <code class="text-xs text-muted-foreground">#0099ff</code>
          </div>
          <div class="space-y-2">
            <div class="h-20 bg-secondary rounded-lg shadow-card"></div>
            <p class="text-sm font-medium">Secondary</p>
            <code class="text-xs text-muted-foreground">#00d4aa</code>
          </div>
          <div class="space-y-2">
            <div class="h-20 bg-success rounded-lg shadow-card"></div>
            <p class="text-sm font-medium">Success</p>
            <code class="text-xs text-muted-foreground">#22c55e</code>
          </div>
          <div class="space-y-2">
            <div class="h-20 bg-warning rounded-lg shadow-card"></div>
            <p class="text-sm font-medium">Warning</p>
            <code class="text-xs text-muted-foreground">#f59e0b</code>
          </div>
          <div class="space-y-2">
            <div class="h-20 bg-error rounded-lg shadow-card"></div>
            <p class="text-sm font-medium">Error</p>
            <code class="text-xs text-muted-foreground">#ef4444</code>
          </div>
        </div>
      </div>

      <!-- Primary Scale -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Primary Scale</h3>
        <div class="grid grid-cols-11 gap-2">
          <div v-for="shade in primaryShades" :key="shade" class="space-y-1">
            <div 
              :class="`h-16 bg-primary-${shade} rounded-md shadow-sm`"
            ></div>
            <p class="text-xs text-center">{{ shade }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Button Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Button Components</h2>
      
      <!-- Button Variants -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Variants</h3>
        <div class="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <!-- Button Sizes -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Sizes</h3>
        <div class="flex items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      <!-- Button States -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">States</h3>
        <div class="flex flex-wrap gap-3">
          <Button>Normal</Button>
          <Button :loading="true">Loading</Button>
          <Button :disabled="true">Disabled</Button>
          <Button iconLeft="←">With Left Icon</Button>
          <Button iconRight="→">With Right Icon</Button>
          <Button :rounded="true">Rounded</Button>
          <Button :fullWidth="true" class="max-w-xs">Full Width</Button>
        </div>
      </div>
    </section>

    <!-- Typography Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Typography</h2>
      <div class="space-y-4">
        <h1 class="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
        <h2 class="text-3xl font-semibold">Heading 2 - 3xl Semibold</h2>
        <h3 class="text-2xl font-medium">Heading 3 - 2xl Medium</h3>
        <h4 class="text-xl font-medium">Heading 4 - xl Medium</h4>
        <p class="text-lg">Large text - lg Regular</p>
        <p class="text-base">Base text - base Regular</p>
        <p class="text-sm">Small text - sm Regular</p>
        <p class="text-xs">Extra small text - xs Regular</p>
        <p class="text-muted-foreground">Muted text color</p>
      </div>
    </section>

    <!-- Spacing Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Spacing Scale</h2>
      <div class="space-y-3">
        <div v-for="size in spacingSizes" :key="size" class="flex items-center gap-4">
          <code class="text-sm w-16">{{ size }}</code>
          <div 
            :class="`bg-primary h-4 rounded`"
            :style="{ width: spacingValues[size] }"
          ></div>
          <span class="text-sm text-muted-foreground">{{ spacingValues[size] }}</span>
        </div>
      </div>
    </section>

    <!-- Border Radius Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Border Radius</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div v-for="radius in radiusSizes" :key="radius" class="text-center">
          <div 
            :class="`w-16 h-16 bg-primary mx-auto mb-2 rounded-${radius}`"
          ></div>
          <code class="text-sm">{{ radius }}</code>
        </div>
      </div>
    </section>

    <!-- Shadow Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Shadows</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="shadow in shadowSizes" :key="shadow" class="text-center">
          <div 
            :class="`w-20 h-20 bg-surface rounded-lg mx-auto mb-2 shadow-${shadow} border border-border`"
          ></div>
          <code class="text-sm">{{ shadow }}</code>
        </div>
      </div>
    </section>

    <!-- Card Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Layout Components</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-2">Card Component</h3>
          <p class="text-muted-foreground mb-4">
            This is a card component with proper theming and spacing.
          </p>
          <Button variant="primary" size="sm">Action</Button>
        </div>
        
        <div class="bg-surface border border-border rounded-lg p-6 hover:shadow-card-hover transition-shadow">
          <h3 class="text-lg font-semibold mb-2">Interactive Card</h3>
          <p class="text-muted-foreground mb-4">
            This card has hover effects and uses design tokens.
          </p>
          <div class="flex gap-2">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Confirm</Button>
          </div>
        </div>

        <div class="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-primary-900 mb-2">Themed Card</h3>
          <p class="text-primary-700 mb-4">
            This card uses primary color theming for visual hierarchy.
          </p>
          <Button variant="primary" size="sm">Learn More</Button>
        </div>
      </div>
    </section>

    <!-- CSS Variables Demo -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">CSS Variables Integration</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Custom Component with CSS Variables</h3>
          <div class="custom-component">
            <div class="custom-component__header">
              <h4 class="custom-component__title">Custom Styled Component</h4>
            </div>
            <div class="custom-component__content">
              <p>This component uses CSS variables for consistent theming.</p>
            </div>
            <div class="custom-component__footer">
              <Button variant="primary" size="sm">Action</Button>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-4">Theme Variables</h3>
          <div class="space-y-2 text-sm font-mono">
            <div class="flex justify-between">
              <span>--color-primary:</span>
              <span class="text-muted-foreground">{{ getPrimaryColor() }}</span>
            </div>
            <div class="flex justify-between">
              <span>--color-background:</span>
              <span class="text-muted-foreground">{{ getBackgroundColor() }}</span>
            </div>
            <div class="flex justify-between">
              <span>--radius-md:</span>
              <span class="text-muted-foreground">6px</span>
            </div>
            <div class="flex justify-between">
              <span>--shadow-md:</span>
              <span class="text-muted-foreground">card shadow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../../src/composables/useTheme';
import { Button } from '../../src/components/button';

// Theme composable
const { theme, isDark, toggleTheme, resetToSystem } = useTheme();

// Demo data
const primaryShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const spacingSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const spacingValues: Record<string, string> = {
  xs: '4px',
  sm: '8px', 
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

const radiusSizes = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
const shadowSizes = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

// Helper functions to get CSS variable values
const getPrimaryColor = () => {
  try {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary').trim() || '#0099ff';
  } catch {
    return '#0099ff';
  }
};

const getBackgroundColor = () => {
  try {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--color-background').trim() || '#ffffff';
  } catch {
    return '#ffffff';
  }
};
</script>

<style scoped>
/* Custom component demo using CSS variables */
.custom-component {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  overflow: hidden;
  transition: all var(--duration-200) var(--ease-out);
}

.custom-component:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-card-hover);
}

.custom-component__header {
  padding: var(--spacing-md);
  background: var(--color-primary-50);
  border-bottom: 1px solid var(--color-border);
}

.custom-component__title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-900);
}

.custom-component__content {
  padding: var(--spacing-md);
  color: var(--color-foreground);
}

.custom-component__footer {
  padding: var(--spacing-md);
  background: var(--color-surface-hover);
  border-top: 1px solid var(--color-border);
}

/* Dark mode adjustments */
[data-theme="dark"] .custom-component__header {
  background: var(--color-primary-900);
}

[data-theme="dark"] .custom-component__title {
  color: var(--color-primary-100);
}
</style>

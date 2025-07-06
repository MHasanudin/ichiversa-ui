<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Icon placeholder - will be replaced with actual Icon component -->
    <span 
      v-if="iconLeft" 
      class="button-icon-left text-current"
      :style="{ fontSize: iconSize + 'px' }"
    >
      {{ iconLeft }}
    </span>
    
    <span v-if="$slots.default" class="button-content">
      <slot />
    </span>
    
    <!-- Icon placeholder - will be replaced with actual Icon component -->
    <span 
      v-if="iconRight" 
      class="button-icon-right text-current"
      :style="{ fontSize: iconSize + 'px' }"
    >
      {{ iconRight }}
    </span>
    
    <!-- Loading placeholder - will be replaced with actual Icon component -->
    <span 
      v-if="loading" 
      class="button-loading animate-spin text-current"
      :style="{ fontSize: iconSize + 'px' }"
    >
      ⟳
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
// import { Icon } from '../icon';

/**
 * Button Component - iChiversa UI
 * Modern, accessible button with comprehensive theming support
 */

// Button variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Props definition
const props = defineProps({
  /**
   * Button visual variant
   */
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
    validator: (value: string) => 
      ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'].includes(value)
  },
  
  /**
   * Button size
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
    validator: (value: string) => 
      ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  /**
   * HTML tag to render (button, a, router-link)
   */
  tag: {
    type: String,
    default: 'button'
  },
  
  /**
   * Disabled state
   */
  disabled: {
    type: Boolean,
    default: false
  },
  
  /**
   * Loading state
   */
  loading: {
    type: Boolean,
    default: false
  },
  
  /**
   * Icon on the left side
   */
  iconLeft: {
    type: String,
    default: null
  },
  
  /**
   * Icon on the right side
   */
  iconRight: {
    type: String,
    default: null
  },
  
  /**
   * Full width button
   */
  fullWidth: {
    type: Boolean,
    default: false
  },
  
  /**
   * Rounded button (pill shape)
   */
  rounded: {
    type: Boolean,
    default: false
  },
});

// Emits definition
const emit = defineEmits<{
  click: [event: MouseEvent]
}>();

// Computed classes
const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-ring',
    'focus:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ];

  // Size classes
  const sizeClasses = {
    xs: ['text-xs', 'px-2', 'py-1', 'gap-1', 'h-6'],
    sm: ['text-sm', 'px-3', 'py-1.5', 'gap-1.5', 'h-8'],
    md: ['text-sm', 'px-4', 'py-2', 'gap-2', 'h-10'],
    lg: ['text-base', 'px-6', 'py-2.5', 'gap-2', 'h-12'],
    xl: ['text-lg', 'px-8', 'py-3', 'gap-2.5', 'h-14'],
  };

  // Variant classes using CSS variables and Tailwind
  const variantClasses = {
    primary: [
      'bg-primary',
      'text-white',
      'hover:bg-primary-600',
      'active:bg-primary-700',
      'shadow-button',
      'hover:shadow-button-hover',
    ],
    secondary: [
      'bg-secondary',
      'text-white',
      'hover:bg-secondary-600',
      'active:bg-secondary-700',
      'shadow-button',
      'hover:shadow-button-hover',
    ],
    outline: [
      'border',
      'border-border',
      'bg-background',
      'text-foreground',
      'hover:bg-surface',
      'hover:border-border-hover',
      'active:bg-surface',
    ],
    ghost: [
      'text-foreground',
      'hover:bg-surface',
      'active:bg-surface',
    ],
    link: [
      'text-primary',
      'underline-offset-4',
      'hover:underline',
      'p-0',
      'h-auto',
    ],
    destructive: [
      'bg-error',
      'text-white',
      'hover:bg-error-600',
      'active:bg-error-700',
      'shadow-button',
      'hover:shadow-button-hover',
    ],
  };

  // Border radius classes
  const radiusClasses = props.rounded 
    ? ['rounded-full'] 
    : ['rounded-button'];

  // Width classes
  const widthClasses = props.fullWidth ? ['w-full'] : [];

  // Loading state classes
  const loadingClasses = props.loading ? ['pointer-events-none'] : [];

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...radiusClasses,
    ...widthClasses,
    ...loadingClasses,
  ];
});

// Icon size based on button size
const iconSize = computed(() => {
  const sizeMap = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };
  return sizeMap[props.size];
});

// Click handler
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>

<style scoped>
/* Custom styles using CSS variables */
.button-icon-left {
  margin-right: var(--spacing-xs);
}

.button-icon-right {
  margin-left: var(--spacing-xs);
}

.button-loading {
  position: absolute;
}

.button-content {
  opacity: 1;
  transition: opacity var(--duration-150) var(--ease-out);
}

/* Hide content when loading */
.button-loading ~ .button-content,
.button-loading ~ .button-icon-left,
.button-loading ~ .button-icon-right {
  opacity: 0;
}

/* Custom focus ring for better accessibility */
.focus\:ring-ring:focus {
  box-shadow: var(--shadow-focus);
}

/* Link variant specific styles */
.variant-link {
  height: auto !important;
  padding: 0 !important;
  box-shadow: none !important;
}

.variant-link:hover {
  box-shadow: none !important;
}
</style>

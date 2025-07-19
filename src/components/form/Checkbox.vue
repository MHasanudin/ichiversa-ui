<template>
  <div :class="wrapperClasses">
    <label :class="labelClasses" :for="checkboxId">
      <!-- Hidden native checkbox for accessibility -->
      <input
        :id="checkboxId"
        ref="inputRef"
        type="checkbox"
        :checked="isChecked"
        :disabled="disabled"
        :required="required"
        :value="value"
        :class="nativeCheckboxClasses"
        :aria-invalid="hasError"
        :aria-describedby="ariaDescribedBy"
        :aria-required="required"
        v-bind="$attrs"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <!-- Custom checkbox display -->
      <div :class="customCheckboxClasses">
        <!-- Check mark -->
        <span v-if="isChecked" :class="checkMarkClasses">
          <slot name="check-icon">
            ✓
          </slot>
        </span>

        <!-- Indeterminate mark -->
        <span v-else-if="indeterminate" :class="indeterminateMarkClasses">
          <slot name="indeterminate-icon">
            ―
          </slot>
        </span>
      </div>

      <!-- Label content -->
      <div v-if="$slots.default || label" :class="contentClasses">
        <slot>
          <span>{{ label }}</span>
        </slot>
        <span v-if="required" class="text-error ml-1" aria-label="required">*</span>
      </div>
    </label>

    <!-- Helper text or error message -->
    <div v-if="helperText || errorMessage" :class="messageClasses">
      <span v-if="hasError && errorMessage">{{ errorMessage }}</span>
      <span v-else-if="helperText">{{ helperText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId, type PropType } from 'vue'

/**
 * Checkbox Component - iChiversa UI
 * Accessible checkbox with indeterminate state and custom styling
 */

export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type CheckboxVariant = 'default' | 'outline' | 'solid'

// Props definition
const props = defineProps({
  /**
   * Checkbox value (v-model)
   */
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | (string | number)[]>,
    default: false
  },
  
  /**
   * Checkbox value when checked (for array model)
   */
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  
  /**
   * Checkbox size
   */
  size: {
    type: String as PropType<CheckboxSize>,
    default: 'md',
    validator: (value: string) => 
      ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  /**
   * Checkbox variant
   */
  variant: {
    type: String as PropType<CheckboxVariant>,
    default: 'default',
    validator: (value: string) => 
      ['default', 'outline', 'solid'].includes(value)
  },
  
  /**
   * Checkbox label
   */
  label: {
    type: String,
    default: ''
  },
  
  /**
   * Helper text
   */
  helperText: {
    type: String,
    default: ''
  },
  
  /**
   * Error message
   */
  errorMessage: {
    type: String,
    default: ''
  },
  
  /**
   * Disabled state
   */
  disabled: {
    type: Boolean,
    default: false
  },
  
  /**
   * Required field
   */
  required: {
    type: Boolean,
    default: false
  },
  
  /**
   * Indeterminate state
   */
  indeterminate: {
    type: Boolean,
    default: false
  },
  
  /**
   * Custom checkbox ID
   */
  id: {
    type: String,
    default: ''
  }
})

// Emits definition
const emit = defineEmits<{
  'update:modelValue': [value: boolean | (string | number)[]]
  'change': [checked: boolean, value?: string | number]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

// Refs
const inputRef = ref<HTMLInputElement>()

// Computed properties
const checkboxId = computed(() => props.id || useId())
const hasError = computed(() => !!props.errorMessage)

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }
  return !!props.modelValue
})

const ariaDescribedBy = computed(() => {
  const ids = []
  if (props.helperText || props.errorMessage) {
    ids.push(`${checkboxId.value}-message`)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})

// Size-based classes
const sizeClasses = {
  xs: {
    checkbox: ['w-3', 'h-3'],
    text: 'text-xs',
    icon: 'text-xs',
    gap: 'gap-1',
  },
  sm: {
    checkbox: ['w-4', 'h-4'],
    text: 'text-sm',
    icon: 'text-xs',
    gap: 'gap-1.5',
  },
  md: {
    checkbox: ['w-5', 'h-5'],
    text: 'text-sm',
    icon: 'text-sm',
    gap: 'gap-2',
  },
  lg: {
    checkbox: ['w-6', 'h-6'],
    text: 'text-base',
    icon: 'text-base',
    gap: 'gap-2.5',
  },
  xl: {
    checkbox: ['w-7', 'h-7'],
    text: 'text-lg',
    icon: 'text-lg',
    gap: 'gap-3',
  },
}

// Component classes
const wrapperClasses = computed(() => [
  'cv-checkbox-wrapper',
  'flex',
  'flex-col',
])

const labelClasses = computed(() => [
  'cv-checkbox-label',
  'inline-flex',
  'items-start',
  'cursor-pointer',
  'select-none',
  sizeClasses[props.size].gap,
  {
    'cursor-not-allowed': props.disabled,
    'opacity-50': props.disabled,
  },
])

const nativeCheckboxClasses = computed(() => [
  'sr-only', // Screen reader only
])

const customCheckboxClasses = computed(() => {
  const baseClasses = [
    'cv-checkbox-custom',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'border-2',
    'rounded',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus-within:ring-2',
    'focus-within:ring-ring',
    'focus-within:ring-offset-1',
    'flex-shrink-0',
  ]

  const sizeSpecificClasses = sizeClasses[props.size].checkbox

  const variantClasses = {
    default: [
      'border-border',
      'bg-background',
      {
        'border-primary': isChecked.value || props.indeterminate,
        'bg-primary': isChecked.value || props.indeterminate,
        'border-error': hasError.value,
        'hover:border-primary': !props.disabled && !hasError.value,
        'hover:bg-primary-50': !props.disabled && !isChecked.value && !props.indeterminate,
      },
    ],
    outline: [
      'border-border',
      'bg-transparent',
      {
        'border-primary': isChecked.value || props.indeterminate,
        'bg-transparent': true,
        'border-error': hasError.value,
        'hover:border-primary': !props.disabled && !hasError.value,
      },
    ],
    solid: [
      'border-primary',
      'bg-primary',
      {
        'opacity-100': isChecked.value || props.indeterminate,
        'opacity-30': !isChecked.value && !props.indeterminate,
        'border-error': hasError.value,
        'bg-error': hasError.value,
      },
    ],
  }

  return [
    ...baseClasses,
    ...sizeSpecificClasses,
    ...variantClasses[props.variant],
  ]
})

const checkMarkClasses = computed(() => [
  'cv-checkbox-check',
  'text-white',
  'font-bold',
  'leading-none',
  sizeClasses[props.size].icon,
  {
    'text-primary': props.variant === 'outline',
  },
])

const indeterminateMarkClasses = computed(() => [
  'cv-checkbox-indeterminate',
  'text-white',
  'font-bold',
  'leading-none',
  sizeClasses[props.size].icon,
  {
    'text-primary': props.variant === 'outline',
  },
])

const contentClasses = computed(() => [
  'cv-checkbox-content',
  'flex',
  'flex-col',
  'justify-center',
  sizeClasses[props.size].text,
])

const messageClasses = computed(() => [
  'cv-checkbox-message',
  'text-xs',
  'mt-1',
  'ml-6', // Align with checkbox content
  {
    'text-error': hasError.value,
    'text-gray-500': !hasError.value,
  },
])

// Event handlers
const handleChange = (event: Event) => {
  if (props.disabled) return

  const target = event.target as HTMLInputElement
  const checked = target.checked

  if (Array.isArray(props.modelValue)) {
    const newValue = checked
      ? [...props.modelValue, props.value]
      : props.modelValue.filter(v => v !== props.value)
    
    emit('update:modelValue', newValue)
    emit('change', checked, props.value)
  } else {
    emit('update:modelValue', checked)
    emit('change', checked)
  }
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

// Public methods
const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

// Expose public methods
defineExpose({
  focus,
  blur,
})
</script>

<style scoped>
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Custom checkbox animations */
.cv-checkbox-custom {
  transition: all 150ms ease-out;
}

.cv-checkbox-check,
.cv-checkbox-indeterminate {
  transition: all 150ms ease-out;
}

/* Focus ring enhancement */
.cv-checkbox-label:focus-within .cv-checkbox-custom {
  box-shadow: 0 0 0 2px var(--ring-color, rgba(59, 130, 246, 0.1));
}

/* Hover effects */
.cv-checkbox-label:hover .cv-checkbox-custom:not(.disabled) {
  transform: scale(1.05);
}

/* Active effects */
.cv-checkbox-label:active .cv-checkbox-custom:not(.disabled) {
  transform: scale(0.95);
}

/* Error state */
.cv-checkbox-custom.error {
  border-color: var(--error-color);
}

/* Disabled state */
.cv-checkbox-label.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.cv-checkbox-label.disabled .cv-checkbox-custom {
  cursor: not-allowed;
}
</style>
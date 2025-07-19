<template>
  <div :class="wrapperClasses">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1" aria-label="required">*</span>
    </label>

    <!-- Input container -->
    <div :class="inputContainerClasses">
      <!-- Left icon/slot -->
      <div v-if="$slots.leftIcon || iconLeft" class="input-left-icon">
        <slot name="leftIcon">
          <span :style="{ fontSize: iconSize + 'px' }">{{ iconLeft }}</span>
        </slot>
      </div>

      <!-- Input element -->
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :minlength="minlength"
        :min="min"
        :max="max"
        :step="step"
        :pattern="pattern"
        :class="inputClasses"
        :aria-invalid="hasError"
        :aria-describedby="ariaDescribedBy"
        :aria-required="required"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <!-- Right icon/slot -->
      <div v-if="$slots.rightIcon || iconRight || type === 'password'" class="input-right-icon">
        <slot name="rightIcon">
          <!-- Password toggle -->
          <button
            v-if="type === 'password'"
            type="button"
            :class="passwordToggleClasses"
            @click="togglePasswordVisibility"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
          >
            <span :style="{ fontSize: iconSize + 'px' }">
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </span>
          </button>
          <!-- Regular right icon -->
          <span v-else-if="iconRight" :style="{ fontSize: iconSize + 'px' }">
            {{ iconRight }}
          </span>
        </slot>
      </div>

      <!-- Clear button -->
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        :class="clearButtonClasses"
        @click="handleClear"
        aria-label="Clear input"
      >
        <span :style="{ fontSize: iconSize + 'px' }">✕</span>
      </button>

      <!-- Loading indicator -->
      <div v-if="loading" class="input-loading">
        <span class="animate-spin" :style="{ fontSize: iconSize + 'px' }">⟳</span>
      </div>
    </div>

    <!-- Helper text or error message -->
    <div v-if="helperText || errorMessage" :class="messageClasses">
      <span v-if="hasError && errorMessage">{{ errorMessage }}</span>
      <span v-else-if="helperText">{{ helperText }}</span>
    </div>

    <!-- Character count -->
    <div v-if="showCount && maxlength" :class="countClasses">
      {{ characterCount }}/{{ maxlength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId, type PropType } from 'vue'

/**
 * Input Component - iChiversa UI
 * Modern, accessible input with comprehensive features
 */

export type InputType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type InputVariant = 'default' | 'filled' | 'flushed' | 'unstyled'

// Props definition
const props = defineProps({
  /**
   * Input value (v-model)
   */
  modelValue: {
    type: [String, Number],
    default: ''
  },
  
  /**
   * Input type
   */
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  
  /**
   * Input size
   */
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
    validator: (value: string) => 
      ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  /**
   * Input variant
   */
  variant: {
    type: String as PropType<InputVariant>,
    default: 'default',
    validator: (value: string) => 
      ['default', 'filled', 'flushed', 'unstyled'].includes(value)
  },
  
  /**
   * Input label
   */
  label: {
    type: String,
    default: ''
  },
  
  /**
   * Placeholder text
   */
  placeholder: {
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
   * Readonly state
   */
  readonly: {
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
   * Loading state
   */
  loading: {
    type: Boolean,
    default: false
  },
  
  /**
   * Show clear button
   */
  clearable: {
    type: Boolean,
    default: false
  },
  
  /**
   * Left icon
   */
  iconLeft: {
    type: String,
    default: ''
  },
  
  /**
   * Right icon
   */
  iconRight: {
    type: String,
    default: ''
  },
  
  /**
   * Show character count
   */
  showCount: {
    type: Boolean,
    default: false
  },
  
  /**
   * Autocomplete attribute
   */
  autocomplete: {
    type: String,
    default: ''
  },
  
  /**
   * Maximum length
   */
  maxlength: {
    type: Number,
    default: undefined
  },
  
  /**
   * Minimum length
   */
  minlength: {
    type: Number,
    default: undefined
  },
  
  /**
   * Minimum value (for number inputs)
   */
  min: {
    type: [String, Number],
    default: undefined
  },
  
  /**
   * Maximum value (for number inputs)
   */
  max: {
    type: [String, Number],
    default: undefined
  },
  
  /**
   * Step value (for number inputs)
   */
  step: {
    type: [String, Number],
    default: undefined
  },
  
  /**
   * Pattern for validation
   */
  pattern: {
    type: String,
    default: ''
  },
  
  /**
   * Custom input ID
   */
  id: {
    type: String,
    default: ''
  }
})

// Emits definition
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'input': [event: Event]
  'change': [event: Event]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
  'clear': []
  'keydown': [event: KeyboardEvent]
}>()

// Local state
const isFocused = ref(false)
const showPassword = ref(false)

// Computed properties
const inputId = computed(() => props.id || useId())

const hasError = computed(() => !!props.errorMessage)

const characterCount = computed(() => 
  String(props.modelValue || '').length
)

const ariaDescribedBy = computed(() => {
  const ids = []
  if (props.helperText || props.errorMessage) {
    ids.push(`${inputId.value}-message`)
  }
  if (props.showCount && props.maxlength) {
    ids.push(`${inputId.value}-count`)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})

// Size-based classes
const sizeClasses = {
  xs: {
    input: ['text-xs', 'px-2', 'py-1', 'h-6'],
    icon: 12,
    label: 'text-xs',
  },
  sm: {
    input: ['text-sm', 'px-3', 'py-1.5', 'h-8'],
    icon: 14,
    label: 'text-sm',
  },
  md: {
    input: ['text-sm', 'px-3', 'py-2', 'h-10'],
    icon: 16,
    label: 'text-sm',
  },
  lg: {
    input: ['text-base', 'px-4', 'py-2.5', 'h-12'],
    icon: 18,
    label: 'text-base',
  },
  xl: {
    input: ['text-lg', 'px-5', 'py-3', 'h-14'],
    icon: 20,
    label: 'text-lg',
  },
}

const iconSize = computed(() => sizeClasses[props.size].icon)

// Wrapper classes
const wrapperClasses = computed(() => [
  'cv-input-wrapper',
  'flex',
  'flex-col',
  'gap-1',
])

// Label classes
const labelClasses = computed(() => [
  'cv-input-label',
  'font-medium',
  'text-foreground',
  sizeClasses[props.size].label,
  {
    'text-error': hasError.value,
    'opacity-50': props.disabled,
  },
])

// Input container classes
const inputContainerClasses = computed(() => [
  'cv-input-container',
  'relative',
  'flex',
  'items-center',
])

// Input classes
const inputClasses = computed(() => {
  const baseClasses = [
    'cv-input',
    'w-full',
    'font-normal',
    'text-foreground',
    'placeholder-gray-400',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-ring',
    'focus:ring-offset-0',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-50',
    'read-only:bg-gray-50',
    'read-only:cursor-default',
  ]

  const sizeSpecificClasses = sizeClasses[props.size].input

  const variantClasses = {
    default: [
      'bg-background',
      'border',
      'border-border',
      'rounded-input',
      'hover:border-border-hover',
      'focus:border-ring',
      {
        'border-error': hasError.value,
        'focus:border-error': hasError.value,
        'focus:ring-error': hasError.value,
      },
    ],
    filled: [
      'bg-surface',
      'border',
      'border-transparent',
      'rounded-input',
      'hover:bg-gray-100',
      'focus:bg-background',
      'focus:border-ring',
      {
        'bg-error-50': hasError.value,
        'focus:border-error': hasError.value,
        'focus:ring-error': hasError.value,
      },
    ],
    flushed: [
      'bg-transparent',
      'border-0',
      'border-b-2',
      'border-border',
      'rounded-none',
      'px-0',
      'focus:border-ring',
      {
        'border-error': hasError.value,
        'focus:border-error': hasError.value,
      },
    ],
    unstyled: [
      'bg-transparent',
      'border-none',
      'rounded-none',
      'px-0',
      'focus:ring-0',
    ],
  }

  // Handle icon padding
  const iconPadding = []
  if (props.iconLeft || props.$slots.leftIcon) {
    iconPadding.push('pl-10')
  }
  if (props.iconRight || props.$slots.rightIcon || props.clearable || props.loading || props.type === 'password') {
    iconPadding.push('pr-10')
  }

  return [
    ...baseClasses,
    ...sizeSpecificClasses,
    ...variantClasses[props.variant],
    ...iconPadding,
  ]
})

// Icon classes
const iconClasses = computed(() => [
  'absolute',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'text-gray-400',
  'pointer-events-none',
])

// Message classes
const messageClasses = computed(() => [
  'cv-input-message',
  'text-xs',
  'mt-1',
  {
    'text-error': hasError.value,
    'text-gray-500': !hasError.value,
  },
])

// Count classes
const countClasses = computed(() => [
  'cv-input-count',
  'text-xs',
  'text-gray-500',
  'text-right',
  'mt-1',
])

// Button classes
const passwordToggleClasses = computed(() => [
  'absolute',
  'right-2',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'p-1',
  'text-gray-400',
  'hover:text-gray-600',
  'focus:outline-none',
  'focus:text-gray-600',
  'transition-colors',
])

const clearButtonClasses = computed(() => [
  'absolute',
  'right-2',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'p-1',
  'text-gray-400',
  'hover:text-gray-600',
  'focus:outline-none',
  'focus:text-gray-600',
  'transition-colors',
])

// Event handlers
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
  // Update input type
  const input = document.getElementById(inputId.value) as HTMLInputElement
  if (input) {
    input.type = showPassword.value ? 'text' : 'password'
  }
}
</script>

<style scoped>
/* Input container positioning */
.input-left-icon {
  @apply absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none;
}

.input-right-icon {
  @apply absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none;
}

.input-loading {
  @apply absolute right-2 top-1/2 transform -translate-y-1/2 text-primary;
}

/* Focus states */
.cv-input:focus + .input-left-icon,
.cv-input:focus + .input-right-icon {
  @apply text-ring;
}

/* Error states */
.cv-input[aria-invalid="true"] + .input-left-icon,
.cv-input[aria-invalid="true"] + .input-right-icon {
  @apply text-error;
}

/* Multiple right elements positioning */
.cv-input-container:has(.input-right-icon):has(.clear-button) .input-right-icon {
  @apply right-8;
}

.cv-input-container:has(.input-loading):has(.clear-button) .input-loading {
  @apply right-8;
}

/* Transition for smooth interactions */
.cv-input {
  transition: border-color 150ms ease-out, box-shadow 150ms ease-out, background-color 150ms ease-out;
}

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
</style>
<template>
  <div :class="wrapperClasses">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="selectId"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1" aria-label="required">*</span>
    </label>

    <!-- Select container -->
    <div :class="selectContainerClasses">
      <!-- Native select for accessibility -->
      <select
        :id="selectId"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :multiple="multiple"
        :class="nativeSelectClasses"
        :aria-invalid="hasError"
        :aria-describedby="ariaDescribedBy"
        :aria-required="required"
        v-bind="$attrs"
        @change="handleNativeChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <option v-if="placeholder && !multiple" value="" disabled>
          {{ placeholder }}
        </option>
        <template v-for="option in normalizedOptions" :key="getOptionKey(option)">
          <optgroup v-if="option.group" :label="option.label">
            <option
              v-for="groupOption in option.options"
              :key="getOptionKey(groupOption)"
              :value="getOptionValue(groupOption)"
              :disabled="groupOption.disabled"
            >
              {{ getOptionLabel(groupOption) }}
            </option>
          </optgroup>
          <option
            v-else
            :value="getOptionValue(option)"
            :disabled="option.disabled"
          >
            {{ getOptionLabel(option) }}
          </option>
        </template>
      </select>

      <!-- Custom select overlay -->
      <div 
        v-if="!native"
        :class="customSelectClasses"
        @click="toggleDropdown"
        @keydown="handleKeydown"
        tabindex="0"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-haspopup="'listbox'"
        :aria-labelledby="label ? selectId + '-label' : undefined"
      >
        <!-- Selected value display -->
        <div :class="selectedValueClasses">
          <span v-if="selectedOption" class="truncate">
            {{ getOptionLabel(selectedOption) }}
          </span>
          <span v-else-if="placeholder" class="text-gray-400 truncate">
            {{ placeholder }}
          </span>
          <span v-else class="text-gray-400">Select option...</span>
        </div>

        <!-- Dropdown arrow -->
        <div :class="arrowClasses">
          <span :class="{ 'rotate-180': isOpen }" class="transition-transform duration-200">
            ▼
          </span>
        </div>

        <!-- Loading indicator -->
        <div v-if="loading" class="absolute right-8 top-1/2 transform -translate-y-1/2">
          <span class="animate-spin text-primary">⟳</span>
        </div>
      </div>

      <!-- Dropdown content -->
      <Teleport to="body">
        <div
          v-if="!native && isOpen"
          ref="dropdownRef"
          :class="dropdownClasses"
          :style="dropdownStyle"
          role="listbox"
          :aria-labelledby="label ? selectId + '-label' : undefined"
          @click.stop
        >
          <!-- Search input -->
          <div v-if="searchable" class="p-2 border-b border-border">
            <input
              ref="searchInputRef"
              v-model="searchQuery"
              type="text"
              placeholder="Search options..."
              class="w-full px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-1 focus:ring-ring"
              @click.stop
              @keydown.stop
            />
          </div>

          <!-- Options list -->
          <div class="max-h-60 overflow-y-auto">
            <template v-for="option in filteredOptions" :key="getOptionKey(option)">
              <!-- Group header -->
              <div v-if="option.group" class="px-3 py-1 text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                {{ option.label }}
              </div>
              
              <!-- Group options -->
              <template v-if="option.group">
                <div
                  v-for="groupOption in option.options"
                  :key="getOptionKey(groupOption)"
                  :class="getOptionClasses(groupOption)"
                  role="option"
                  :aria-selected="isSelected(groupOption)"
                  @click="selectOption(groupOption)"
                  @mouseenter="highlightedIndex = getOptionIndex(groupOption)"
                >
                  <!-- Custom option slot -->
                  <slot name="option" :option="groupOption" :selected="isSelected(groupOption)">
                    <span class="block truncate">{{ getOptionLabel(groupOption) }}</span>
                  </slot>
                  
                  <!-- Selection indicator -->
                  <span v-if="isSelected(groupOption)" class="absolute inset-y-0 right-0 flex items-center pr-2">
                    ✓
                  </span>
                </div>
              </template>
              
              <!-- Regular option -->
              <div
                v-else
                :class="getOptionClasses(option)"
                role="option"
                :aria-selected="isSelected(option)"
                @click="selectOption(option)"
                @mouseenter="highlightedIndex = getOptionIndex(option)"
              >
                <!-- Custom option slot -->
                <slot name="option" :option="option" :selected="isSelected(option)">
                  <span class="block truncate">{{ getOptionLabel(option) }}</span>
                </slot>
                
                <!-- Selection indicator -->
                <span v-if="isSelected(option)" class="absolute inset-y-0 right-0 flex items-center pr-2">
                  ✓
                </span>
              </div>
            </template>

            <!-- No options message -->
            <div v-if="filteredOptions.length === 0" class="px-3 py-2 text-sm text-gray-500">
              <slot name="no-options">
                {{ searchQuery ? 'No options found' : 'No options available' }}
              </slot>
            </div>
          </div>
        </div>
      </Teleport>
    </div>

    <!-- Helper text or error message -->
    <div v-if="helperText || errorMessage" :class="messageClasses">
      <span v-if="hasError && errorMessage">{{ errorMessage }}</span>
      <span v-else-if="helperText">{{ helperText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onBeforeUnmount, useId, type PropType } from 'vue'

/**
 * Select Component - iChiversa UI
 * Accessible select with search, grouping, and custom options
 */

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  group?: boolean
  options?: SelectOption[]
}

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SelectVariant = 'default' | 'filled' | 'flushed' | 'unstyled'

// Props definition
const props = defineProps({
  /**
   * Select value (v-model)
   */
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    default: ''
  },
  
  /**
   * Select options
   */
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
    required: true
  },
  
  /**
   * Select size
   */
  size: {
    type: String as PropType<SelectSize>,
    default: 'md',
    validator: (value: string) => 
      ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  
  /**
   * Select variant
   */
  variant: {
    type: String as PropType<SelectVariant>,
    default: 'default',
    validator: (value: string) => 
      ['default', 'filled', 'flushed', 'unstyled'].includes(value)
  },
  
  /**
   * Select label
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
   * Required field
   */
  required: {
    type: Boolean,
    default: false
  },
  
  /**
   * Multiple selection
   */
  multiple: {
    type: Boolean,
    default: false
  },
  
  /**
   * Searchable options
   */
  searchable: {
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
   * Use native select
   */
  native: {
    type: Boolean,
    default: false
  },
  
  /**
   * Custom select ID
   */
  id: {
    type: String,
    default: ''
  }
})

// Emits definition
const emit = defineEmits<{
  'update:modelValue': [value: string | number | (string | number)[]]
  'change': [value: string | number | (string | number)[]]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
  'open': []
  'close': []
  'search': [query: string]
}>()

// Local state
const isOpen = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(-1)
const dropdownRef = ref<HTMLElement>()
const searchInputRef = ref<HTMLInputElement>()

// Computed properties
const selectId = computed(() => props.id || useId())
const hasError = computed(() => !!props.errorMessage)

const ariaDescribedBy = computed(() => {
  const ids = []
  if (props.helperText || props.errorMessage) {
    ids.push(`${selectId.value}-message`)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})

// Normalize options to handle groups
const normalizedOptions = computed(() => {
  return props.options.map(option => {
    if (option.group && option.options) {
      return {
        ...option,
        options: option.options.filter(opt => !opt.disabled || opt.disabled === false)
      }
    }
    return option
  })
})

// Filter options based on search
const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return normalizedOptions.value
  }
  
  const query = searchQuery.value.toLowerCase()
  
  return normalizedOptions.value.map(option => {
    if (option.group && option.options) {
      const filteredGroupOptions = option.options.filter(opt =>
        getOptionLabel(opt).toLowerCase().includes(query)
      )
      return {
        ...option,
        options: filteredGroupOptions
      }
    }
    
    return getOptionLabel(option).toLowerCase().includes(query) ? option : null
  }).filter(Boolean) as SelectOption[]
})

// Get selected option for display
const selectedOption = computed(() => {
  if (props.multiple) return null
  
  const findOption = (options: SelectOption[]): SelectOption | null => {
    for (const option of options) {
      if (option.group && option.options) {
        const found = findOption(option.options)
        if (found) return found
      } else if (getOptionValue(option) === props.modelValue) {
        return option
      }
    }
    return null
  }
  
  return findOption(normalizedOptions.value)
})

// Helper functions
const getOptionValue = (option: SelectOption) => option.value
const getOptionLabel = (option: SelectOption) => option.label
const getOptionKey = (option: SelectOption) => `${option.value}-${option.label}`

const isSelected = (option: SelectOption) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(getOptionValue(option))
  }
  return getOptionValue(option) === props.modelValue
}

const getOptionIndex = (option: SelectOption) => {
  const flatOptions = getFlatOptions()
  return flatOptions.findIndex(opt => getOptionKey(opt) === getOptionKey(option))
}

const getFlatOptions = (): SelectOption[] => {
  const flat: SelectOption[] = []
  normalizedOptions.value.forEach(option => {
    if (option.group && option.options) {
      flat.push(...option.options)
    } else {
      flat.push(option)
    }
  })
  return flat
}

// Size-based classes
const sizeClasses = {
  xs: {
    select: ['text-xs', 'px-2', 'py-1', 'h-6'],
    label: 'text-xs',
  },
  sm: {
    select: ['text-sm', 'px-3', 'py-1.5', 'h-8'],
    label: 'text-sm',
  },
  md: {
    select: ['text-sm', 'px-3', 'py-2', 'h-10'],
    label: 'text-sm',
  },
  lg: {
    select: ['text-base', 'px-4', 'py-2.5', 'h-12'],
    label: 'text-base',
  },
  xl: {
    select: ['text-lg', 'px-5', 'py-3', 'h-14'],
    label: 'text-lg',
  },
}

// Component classes
const wrapperClasses = computed(() => [
  'cv-select-wrapper',
  'flex',
  'flex-col',
  'gap-1',
])

const labelClasses = computed(() => [
  'cv-select-label',
  'font-medium',
  'text-foreground',
  sizeClasses[props.size].label,
  {
    'text-error': hasError.value,
    'opacity-50': props.disabled,
  },
])

const selectContainerClasses = computed(() => [
  'cv-select-container',
  'relative',
])

const nativeSelectClasses = computed(() => {
  const baseClasses = [
    'cv-select-native',
    'w-full',
    'font-normal',
    'text-foreground',
    'bg-background',
    'border',
    'border-border',
    'rounded-input',
    'transition-all',
    'duration-150',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-ring',
    'focus:ring-offset-0',
    'focus:border-ring',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-50',
  ]

  const sizeSpecificClasses = sizeClasses[props.size].select

  return [
    ...baseClasses,
    ...sizeSpecificClasses,
    {
      'border-error': hasError.value,
      'focus:border-error': hasError.value,
      'focus:ring-error': hasError.value,
      'sr-only': !props.native,
    },
  ]
})

const customSelectClasses = computed(() => {
  const baseClasses = [
    'cv-select-custom',
    'w-full',
    'font-normal',
    'text-foreground',
    'cursor-pointer',
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
    'flex',
    'items-center',
    'justify-between',
  ]

  const sizeSpecificClasses = sizeClasses[props.size].select

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
    ],
    flushed: [
      'bg-transparent',
      'border-0',
      'border-b-2',
      'border-border',
      'rounded-none',
      'px-0',
      'focus:border-ring',
    ],
    unstyled: [
      'bg-transparent',
      'border-none',
      'rounded-none',
      'px-0',
      'focus:ring-0',
    ],
  }

  return [
    ...baseClasses,
    ...sizeSpecificClasses,
    ...variantClasses[props.variant],
  ]
})

const selectedValueClasses = computed(() => [
  'flex-1',
  'truncate',
])

const arrowClasses = computed(() => [
  'ml-2',
  'text-gray-400',
  'text-xs',
])

const dropdownClasses = computed(() => [
  'absolute',
  'z-50',
  'w-full',
  'bg-background',
  'border',
  'border-border',
  'rounded-lg',
  'shadow-dropdown',
  'py-1',
  'max-h-60',
  'overflow-hidden',
])

const dropdownStyle = ref({})

const messageClasses = computed(() => [
  'cv-select-message',
  'text-xs',
  'mt-1',
  {
    'text-error': hasError.value,
    'text-gray-500': !hasError.value,
  },
])

const getOptionClasses = (option: SelectOption) => [
  'cv-select-option',
  'relative',
  'cursor-pointer',
  'select-none',
  'py-2',
  'pl-3',
  'pr-9',
  'text-sm',
  'hover:bg-surface',
  'focus:bg-surface',
  {
    'bg-primary': isSelected(option),
    'text-white': isSelected(option),
    'text-foreground': !isSelected(option),
    'opacity-50': option.disabled,
    'cursor-not-allowed': option.disabled,
    'bg-surface': highlightedIndex.value === getOptionIndex(option) && !isSelected(option),
  },
]

// Event handlers
const toggleDropdown = () => {
  if (props.disabled) return
  
  if (isOpen.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

const openDropdown = async () => {
  isOpen.value = true
  emit('open')
  
  await nextTick()
  updateDropdownPosition()
  
  if (props.searchable && searchInputRef.value) {
    searchInputRef.value.focus()
  }
}

const closeDropdown = () => {
  isOpen.value = false
  searchQuery.value = ''
  highlightedIndex.value = -1
  emit('close')
}

const updateDropdownPosition = () => {
  if (!dropdownRef.value) return
  
  const trigger = dropdownRef.value.previousElementSibling as HTMLElement
  if (!trigger) return
  
  const rect = trigger.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const dropdownHeight = 240 // max-h-60 = 240px
  
  const spaceBelow = viewportHeight - rect.bottom
  const spaceAbove = rect.top
  
  const shouldOpenUpward = spaceBelow < dropdownHeight && spaceAbove > spaceBelow
  
  dropdownStyle.value = {
    position: 'fixed',
    top: shouldOpenUpward ? `${rect.top - dropdownHeight}px` : `${rect.bottom}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    zIndex: 50,
  }
}

const selectOption = (option: SelectOption) => {
  if (option.disabled) return
  
  const value = getOptionValue(option)
  
  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? props.modelValue : []
    const newValue = currentValue.includes(value)
      ? currentValue.filter(v => v !== value)
      : [...currentValue, value]
    
    emit('update:modelValue', newValue)
    emit('change', newValue)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
    closeDropdown()
  }
}

const handleNativeChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const value = props.multiple 
    ? Array.from(target.selectedOptions).map(opt => opt.value)
    : target.value
  
  emit('update:modelValue', value)
  emit('change', value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return
  
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      if (!isOpen.value) {
        openDropdown()
      } else if (highlightedIndex.value >= 0) {
        const flatOptions = getFlatOptions()
        const option = flatOptions[highlightedIndex.value]
        if (option) {
          selectOption(option)
        }
      }
      break
      
    case 'Escape':
      if (isOpen.value) {
        event.preventDefault()
        closeDropdown()
      }
      break
      
    case 'ArrowDown':
      event.preventDefault()
      if (!isOpen.value) {
        openDropdown()
      } else {
        const flatOptions = getFlatOptions()
        highlightedIndex.value = Math.min(highlightedIndex.value + 1, flatOptions.length - 1)
      }
      break
      
    case 'ArrowUp':
      event.preventDefault()
      if (isOpen.value) {
        highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      }
      break
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

// Watch search query
const handleSearch = () => {
  emit('search', searchQuery.value)
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', updateDropdownPosition)
  window.addEventListener('scroll', updateDropdownPosition)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', updateDropdownPosition)
  window.removeEventListener('scroll', updateDropdownPosition)
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

/* Transition for smooth interactions */
.cv-select-custom {
  transition: border-color 150ms ease-out, box-shadow 150ms ease-out, background-color 150ms ease-out;
}

/* Custom scrollbar for options */
.cv-select-options::-webkit-scrollbar {
  width: 4px;
}

.cv-select-options::-webkit-scrollbar-track {
  background: transparent;
}

.cv-select-options::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.cv-select-options::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
</style>
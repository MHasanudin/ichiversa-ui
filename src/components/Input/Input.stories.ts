import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { ref } from 'vue'
import Input from './Input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive input component with support for various types, states, icons, and accessibility features. Built with modern web standards and keyboard navigation.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
      description: 'Input type',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'flushed', 'unstyled'],
      description: 'Visual variant of the input',
    },
    label: {
      control: { type: 'text' },
      description: 'Input label',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Readonly state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Required field',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Show clear button',
    },
    showCount: {
      control: { type: 'boolean' },
      description: 'Show character count',
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'Left icon',
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Right icon',
    },
    maxlength: {
      control: { type: 'number' },
      description: 'Maximum length',
    },
  },
  args: {
    'onUpdate:modelValue': fn(),
    onInput: fn(),
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onClear: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

// With Label
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

// Variants
export const Variants: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const defaultValue = ref('Default variant')
      const filledValue = ref('Filled variant')
      const flushedValue = ref('Flushed variant')
      const unstyledValue = ref('Unstyled variant')
      return { defaultValue, filledValue, flushedValue, unstyledValue }
    },
    template: `
      <div class="space-y-4 w-80">
        <Input variant="default" label="Default" v-model="defaultValue" />
        <Input variant="filled" label="Filled" v-model="filledValue" />
        <Input variant="flushed" label="Flushed" v-model="flushedValue" />
        <Input variant="unstyled" label="Unstyled" v-model="unstyledValue" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the input component.',
      },
    },
  },
}

// Sizes
export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const values = ref({
        xs: 'Extra Small',
        sm: 'Small',
        md: 'Medium',
        lg: 'Large',
        xl: 'Extra Large',
      })
      return { values }
    },
    template: `
      <div class="space-y-4 w-80">
        <Input size="xs" label="Extra Small" v-model="values.xs" />
        <Input size="sm" label="Small" v-model="values.sm" />
        <Input size="md" label="Medium" v-model="values.md" />
        <Input size="lg" label="Large" v-model="values.lg" />
        <Input size="xl" label="Extra Large" v-model="values.xl" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the input component.',
      },
    },
  },
}

// Input Types
export const InputTypes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const values = ref({
        text: '',
        email: '',
        password: '',
        number: '',
        tel: '',
        url: '',
        search: '',
        date: '',
      })
      return { values }
    },
    template: `
      <div class="space-y-4 w-80">
        <Input type="text" label="Text" placeholder="Enter text" v-model="values.text" />
        <Input type="email" label="Email" placeholder="Enter email" v-model="values.email" />
        <Input type="password" label="Password" placeholder="Enter password" v-model="values.password" />
        <Input type="number" label="Number" placeholder="Enter number" v-model="values.number" />
        <Input type="tel" label="Telephone" placeholder="Enter phone" v-model="values.tel" />
        <Input type="url" label="URL" placeholder="Enter URL" v-model="values.url" />
        <Input type="search" label="Search" placeholder="Search..." v-model="values.search" />
        <Input type="date" label="Date" v-model="values.date" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different input types supported by the component.',
      },
    },
  },
}

// With Icons
export const WithIcons: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const values = ref({
        left: '',
        right: '',
        both: '',
      })
      return { values }
    },
    template: `
      <div class="space-y-4 w-80">
        <Input 
          label="With Left Icon" 
          icon-left="👤" 
          placeholder="Username"
          v-model="values.left" 
        />
        <Input 
          label="With Right Icon" 
          icon-right="🔍" 
          placeholder="Search"
          v-model="values.right" 
        />
        <Input 
          label="With Both Icons" 
          icon-left="📧" 
          icon-right="✓" 
          placeholder="Email with validation"
          v-model="values.both" 
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input with icons on the left, right, or both sides.',
      },
    },
  },
}

// States
export const States: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const values = ref({
        normal: 'Normal state',
        disabled: 'Disabled state',
        readonly: 'Readonly state',
        loading: 'Loading state',
        error: 'Error state',
      })
      return { values }
    },
    template: `
      <div class="space-y-4 w-80">
        <Input label="Normal" v-model="values.normal" />
        <Input label="Disabled" v-model="values.disabled" disabled />
        <Input label="Readonly" v-model="values.readonly" readonly />
        <Input label="Loading" v-model="values.loading" loading />
        <Input 
          label="Error" 
          v-model="values.error" 
          error-message="This field is required" 
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the input component.',
      },
    },
  },
}

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long',
    required: true,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

// With Character Count
export const WithCharacterCount: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helperText: 'Keep it short and sweet',
    showCount: true,
    maxlength: 160,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

// Clearable
export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    iconLeft: '🔍',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Clear me!')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input with clearable functionality.',
      },
    },
  },
}

// Validation Example
export const ValidationExample: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const email = ref('')
      const emailError = ref('')
      
      const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email.value) {
          emailError.value = 'Email is required'
        } else if (!emailRegex.test(email.value)) {
          emailError.value = 'Please enter a valid email address'
        } else {
          emailError.value = ''
        }
      }
      
      return { email, emailError, validateEmail }
    },
    template: `
      <div class="w-80">
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="Enter your email"
          v-model="email"
          :error-message="emailError"
          required
          @blur="validateEmail"
          @input="emailError = ''"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Example showing email validation with error states.',
      },
    },
  },
}

// Interactive Example
export const Interactive: Story = {
  args: {
    label: 'Interactive Input',
    type: 'text',
    size: 'md',
    variant: 'default',
    placeholder: 'Enter something...',
    helperText: '',
    errorMessage: '',
    disabled: false,
    readonly: false,
    required: false,
    loading: false,
    clearable: false,
    showCount: false,
    iconLeft: '',
    iconRight: '',
    maxlength: undefined,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<div class="w-80"><Input v-bind="args" v-model="value" /></div>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive example where you can modify all props using the controls panel.',
      },
    },
  },
}
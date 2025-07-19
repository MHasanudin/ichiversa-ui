import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Built with accessibility in mind and supports icons, loading states, and custom styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
      description: 'HTML tag to render',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state with spinner',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width button',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Rounded (pill) style',
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'Icon on the left side',
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Icon on the right side',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    default: 'Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

// Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Link Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    default: 'Destructive Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

// Sizes
export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the button component.',
      },
    },
  },
}

// With Icons
export const WithIcons: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button icon-left="←">Back</Button>
        <Button icon-right="→">Next</Button>
        <Button icon-left="+" icon-right="→">Add Item</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can have icons on the left, right, or both sides.',
      },
    },
  },
}

// States
export const States: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button loading disabled>Loading Disabled</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the button component including disabled and loading states.',
      },
    },
  },
}

// Full Width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    default: 'Full Width Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<div class="w-80"><Button v-bind="args">{{ args.default }}</Button></div>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button can take the full width of its container.',
      },
    },
  },
}

// Rounded
export const Rounded: Story = {
  args: {
    rounded: true,
    default: 'Rounded Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button with pill/rounded style.',
      },
    },
  },
}

// All Variants Grid
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="grid grid-cols-2 gap-4 max-w-md">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all available button variants.',
      },
    },
  },
}

// Interactive Example
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    rounded: false,
    iconLeft: '',
    iconRight: '',
    default: 'Interactive Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive example where you can modify all props using the controls panel.',
      },
    },
  },
}
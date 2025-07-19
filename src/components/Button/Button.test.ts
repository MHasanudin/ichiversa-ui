import { describe, it, expect, vi } from 'vitest'
import { renderComponent, setupUserEvent } from '../../test/utils'
import Button from './Button.vue'

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      const { getByRole } = renderComponent(Button, {
        slots: {
          default: 'Click me'
        }
      })

      const button = getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Click me')
      expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center')
    })

    it('renders with different variants', () => {
      const variants = ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive']
      
      variants.forEach(variant => {
        const { getByRole } = renderComponent(Button, {
          props: { variant },
          slots: { default: 'Button' }
        })
        
        const button = getByRole('button')
        expect(button).toBeInTheDocument()
      })
    })

    it('renders with different sizes', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      
      sizes.forEach(size => {
        const { getByRole } = renderComponent(Button, {
          props: { size },
          slots: { default: 'Button' }
        })
        
        const button = getByRole('button')
        expect(button).toBeInTheDocument()
      })
    })

    it('renders as different HTML tags', () => {
      const { container } = renderComponent(Button, {
        props: { tag: 'a' },
        slots: { default: 'Link' }
      })

      const link = container.querySelector('a')
      expect(link).toBeInTheDocument()
      expect(link).toHaveTextContent('Link')
    })
  })

  describe('Props', () => {
    it('applies disabled state correctly', () => {
      const { getByRole } = renderComponent(Button, {
        props: { disabled: true },
        slots: { default: 'Disabled' }
      })

      const button = getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:opacity-50')
    })

    it('shows loading state', () => {
      const { getByRole, getByText } = renderComponent(Button, {
        props: { loading: true },
        slots: { default: 'Loading' }
      })

      const button = getByRole('button')
      expect(button).toBeInTheDocument()
      expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('renders with icons', () => {
      const { getByRole } = renderComponent(Button, {
        props: { 
          iconLeft: '←',
          iconRight: '→'
        },
        slots: { default: 'With Icons' }
      })

      const button = getByRole('button')
      expect(button).toHaveTextContent('←')
      expect(button).toHaveTextContent('→')
      expect(button).toHaveTextContent('With Icons')
    })

    it('applies full width correctly', () => {
      const { getByRole } = renderComponent(Button, {
        props: { fullWidth: true },
        slots: { default: 'Full Width' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('w-full')
    })

    it('applies rounded style correctly', () => {
      const { getByRole } = renderComponent(Button, {
        props: { rounded: true },
        slots: { default: 'Rounded' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('rounded-full')
    })
  })

  describe('Events', () => {
    it('emits click event when clicked', async () => {
      const user = setupUserEvent()
      const onClick = vi.fn()

      const { getByRole } = renderComponent(Button, {
        props: { onClick },
        slots: { default: 'Click me' }
      })

      const button = getByRole('button')
      await user.click(button)

      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('does not emit click when disabled', async () => {
      const user = setupUserEvent()
      const onClick = vi.fn()

      const { getByRole } = renderComponent(Button, {
        props: { 
          disabled: true,
          onClick 
        },
        slots: { default: 'Disabled' }
      })

      const button = getByRole('button')
      await user.click(button)

      expect(onClick).not.toHaveBeenCalled()
    })

    it('does not emit click when loading', async () => {
      const user = setupUserEvent()
      const onClick = vi.fn()

      const { getByRole } = renderComponent(Button, {
        props: { 
          loading: true,
          onClick 
        },
        slots: { default: 'Loading' }
      })

      const button = getByRole('button')
      await user.click(button)

      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      const { getByRole } = renderComponent(Button, {
        slots: { default: 'Accessible Button' }
      })

      const button = getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('shows loading state to screen readers', () => {
      const { getByText } = renderComponent(Button, {
        props: { loading: true },
        slots: { default: 'Loading Button' }
      })

      const srText = getByText('Loading...')
      expect(srText).toHaveClass('sr-only')
    })

    it('supports keyboard navigation', async () => {
      const user = setupUserEvent()
      const onClick = vi.fn()

      const { getByRole } = renderComponent(Button, {
        props: { onClick },
        slots: { default: 'Keyboard Button' }
      })

      const button = getByRole('button')
      button.focus()
      
      await user.keyboard('{Enter}')
      expect(onClick).toHaveBeenCalledTimes(1)

      await user.keyboard('{Space}')
      expect(onClick).toHaveBeenCalledTimes(2)
    })
  })

  describe('Variants', () => {
    it('applies primary variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'primary' },
        slots: { default: 'Primary' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('bg-primary', 'text-white')
    })

    it('applies secondary variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'secondary' },
        slots: { default: 'Secondary' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('bg-secondary', 'text-white')
    })

    it('applies outline variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'outline' },
        slots: { default: 'Outline' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('border', 'border-border', 'bg-background')
    })

    it('applies ghost variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'ghost' },
        slots: { default: 'Ghost' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('text-foreground', 'hover:bg-surface')
    })

    it('applies link variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'link' },
        slots: { default: 'Link' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('text-primary', 'underline-offset-4')
    })

    it('applies destructive variant classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'destructive' },
        slots: { default: 'Destructive' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('bg-error', 'text-white')
    })
  })

  describe('Sizes', () => {
    it('applies xs size classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { size: 'xs' },
        slots: { default: 'XS' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('text-xs', 'px-2', 'py-1', 'h-6')
    })

    it('applies xl size classes', () => {
      const { getByRole } = renderComponent(Button, {
        props: { size: 'xl' },
        slots: { default: 'XL' }
      })

      const button = getByRole('button')
      expect(button).toHaveClass('text-lg', 'px-8', 'py-3', 'h-14')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty content gracefully', () => {
      const { getByRole } = renderComponent(Button)

      const button = getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('validates variant prop', () => {
      const { getByRole } = renderComponent(Button, {
        props: { variant: 'invalid' as any },
        slots: { default: 'Invalid' }
      })

      // Should fallback to default variant
      const button = getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('validates size prop', () => {
      const { getByRole } = renderComponent(Button, {
        props: { size: 'invalid' as any },
        slots: { default: 'Invalid' }
      })

      // Should fallback to default size
      const button = getByRole('button')
      expect(button).toBeInTheDocument()
    })
  })
})
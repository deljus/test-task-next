// @vitest-environment happy-dom
import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Button } from './index'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders with children', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  test('renders with string children', () => {
    render(<Button>Submit</Button>)
    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toBeInTheDocument()
  })

  test('renders with ReactNode children', () => {
    render(<Button><span>Custom content</span></Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.innerHTML).toContain('<span>Custom content</span>')
  })

  test('applies default classes', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    
    // Default color is "brand"
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('bg-brand')
    expect(button.className).toContain('hover:bg-brand-strong')
    
    // Default size is "medium"
    expect(button.className).toContain('text-sm')
    expect(button.className).toContain('px-4')
    expect(button.className).toContain('py-2.5')
    
    // Default display is "default"
    expect(button.className).toContain('rounded')
    expect(button.className).toContain('box-border')
    expect(button.className).toContain('border')
    expect(button.className).toContain('shadow-xs')
    expect(button.className).toContain('focus:ring-2')
  })

  test('applies custom color classes', () => {
    const { rerender } = render(<Button color="secondary">Test</Button>)
    let button = screen.getByRole('button')
    expect(button.className).toContain('text-body')
    expect(button.className).toContain('bg-neutral-secondary-medium')
    expect(button.className).toContain('hover:bg-neutral-tertiary-medium')

    rerender(<Button color="success">Test</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('bg-success')
    expect(button.className).toContain('hover:bg-success-strong')

    rerender(<Button color="danger">Test</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('bg-danger')
    expect(button.className).toContain('hover:bg-danger-strong')

    rerender(<Button color="ghost">Test</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('text-heading')
    expect(button.className).toContain('bg-transparent')
    expect(button.className).toContain('hover:bg-neutral-secondary-medium')
  })

  test('applies custom size classes', () => {
    const { rerender } = render(<Button sizeBtn="large">Test</Button>)
    let button = screen.getByRole('button')
    expect(button.className).toContain('text-base')
    expect(button.className).toContain('px-5')
    expect(button.className).toContain('py-3')

    rerender(<Button sizeBtn="small">Test</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('text-sm')
    expect(button.className).toContain('px-3')
    expect(button.className).toContain('py-2')
  })

  test('applies custom display classes', () => {
    const { rerender } = render(<Button display="rounded">Test</Button>)
    let button = screen.getByRole('button')
    expect(button.className).toContain('rounded-full')
    // Проверяем, что 'rounded' не присутствует как отдельный класс
    // rounded-full содержит подстроку 'rounded', поэтому проверяем по регулярному выражению
    const classNames = button.className.split(' ')
    expect(classNames).toContain('rounded-full')
    expect(classNames).not.toContain('rounded')
  })

  test('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('passes additional props to button element', () => {
    render(
      <Button 
        type="submit" 
        disabled 
        data-testid="custom-button"
        aria-label="Custom label"
      >
        Test
      </Button>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('data-testid', 'custom-button')
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })

  test('merges custom className with default classes', () => {
    render(<Button className="custom-class another-class">Test</Button>)
    const button = screen.getByRole('button')
    
    expect(button.className).toContain('custom-class')
    expect(button.className).toContain('another-class')
    // Should still contain default classes
    expect(button.className).toContain('bg-brand')
    expect(button.className).toContain('text-sm')
  })

  test('has cursor-pointer class for clickability', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('cursor-pointer')
  })

  test('has focus styles for accessibility', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('focus:ring-2')
    expect(button.className).toContain('focus:outline-none')
  })
})
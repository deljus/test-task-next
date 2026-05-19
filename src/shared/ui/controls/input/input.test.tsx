// @vitest-environment happy-dom
import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Input } from './index'

describe('Input', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders input element with default props', () => {
    render(<Input />)
    const input = screen.getByTestId('form-field')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
  })

  test('applies default classes', () => {
    render(<Input />)
    const input = screen.getByTestId('form-field')
    
    // Check default Tailwind classes from the component
    expect(input.className).toContain('bg-neutral-secondary-medium')
    expect(input.className).toContain('border')
    expect(input.className).toContain('border-default-medium')
    expect(input.className).toContain('text-heading')
    expect(input.className).toContain('text-sm')
    expect(input.className).toContain('rounded')
    expect(input.className).toContain('focus:ring-brand')
    expect(input.className).toContain('focus:border-brand')
    expect(input.className).toContain('block')
    expect(input.className).toContain('w-full')
    expect(input.className).toContain('px-2.5')
    expect(input.className).toContain('py-2')
    expect(input.className).toContain('shadow-xs')
    expect(input.className).toContain('placeholder:text-body')
  })

  test('merges custom className with default classes', () => {
    render(<Input className="custom-class another-class" />)
    const input = screen.getByTestId('form-field')
    
    expect(input.className).toContain('custom-class')
    expect(input.className).toContain('another-class')
    // Should still contain default classes
    expect(input.className).toContain('bg-neutral-secondary-medium')
    expect(input.className).toContain('border')
  })

  test('passes additional props to input element', () => {
    render(
      <Input 
        type="email"
        placeholder="Enter your email"
        disabled
        value="test@example.com"
        name="email"
        id="email-input"
        data-testid="custom-input"
        aria-label="Email address"
      />
    )
    
    const input = screen.getByTestId('custom-input')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
    expect(input).toBeDisabled()
    expect(input).toHaveValue('test@example.com')
    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('id', 'email-input')
    expect(input).toHaveAttribute('aria-label', 'Email address')
  })

  test('handles change events', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByTestId('form-field')
    
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('handles focus and blur events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    render(<Input onFocus={handleFocus} onBlur={handleBlur} />)
    const input = screen.getByTestId('form-field')
    
    fireEvent.focus(input)
    expect(handleFocus).toHaveBeenCalledTimes(1)
    
    fireEvent.blur(input)
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  test('handles key events', () => {
    const handleKeyDown = vi.fn()
    const handleKeyUp = vi.fn()
    render(<Input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />)
    const input = screen.getByTestId('form-field')
    
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(handleKeyDown).toHaveBeenCalledTimes(1)
    
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' })
    expect(handleKeyUp).toHaveBeenCalledTimes(1)
  })

  test('supports different input types', () => {
    const { rerender } = render(<Input type="text" />)
    let input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('type', 'text')

    rerender(<Input type="password" />)
    input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('type', 'password')

    rerender(<Input type="number" />)
    input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('type', 'number')

    rerender(<Input type="search" />)
    input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('type', 'search')
  })

  test('supports required attribute', () => {
    render(<Input required />)
    const input = screen.getByTestId('form-field')
    expect(input).toBeRequired()
  })

  test('supports readOnly attribute', () => {
    render(<Input readOnly />)
    const input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('readonly')
  })

  test('supports autoComplete attribute', () => {
    render(<Input autoComplete="email" />)
    const input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('autocomplete', 'email')
  })

  test('supports min and max attributes for number type', () => {
    render(<Input type="number" min="0" max="100" />)
    const input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('min', '0')
    expect(input).toHaveAttribute('max', '100')
  })

  test('supports pattern attribute', () => {
    render(<Input pattern="[A-Za-z]{3}" />)
    const input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('pattern', '[A-Za-z]{3}')
  })

  test('has proper accessibility attributes when provided', () => {
    render(
      <Input 
        aria-describedby="description-id"
        aria-invalid="true"
        aria-required="true"
      />
    )
    const input = screen.getByTestId('form-field')
    expect(input).toHaveAttribute('aria-describedby', 'description-id')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-required', 'true')
  })

  test('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Input ref={ref} />)
    const input = screen.getByTestId('form-field')
    expect(ref).toHaveBeenCalledWith(input)
  })

  test('maintains data-testid="form-field" by default', () => {
    render(<Input />)
    const input = screen.getByTestId('form-field')
    expect(input).toBeInTheDocument()
  })

  test('allows overriding data-testid', () => {
    render(<Input data-testid="custom-test-id" />)
    const input = screen.getByTestId('custom-test-id')
    expect(input).toBeInTheDocument()
    // Should not find the default test id
    expect(screen.queryByTestId('form-field')).toBeNull()
  })
})
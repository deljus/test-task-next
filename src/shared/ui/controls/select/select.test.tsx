// @vitest-environment happy-dom
import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Select } from './index'

describe('Select', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders select element with default props', () => {
    render(<Select />)
    const select = screen.getByTestId('form-field')
    expect(select).toBeInTheDocument()
    expect(select.tagName).toBe('SELECT')
  })

  test('applies default classes', () => {
    render(<Select />)
    const select = screen.getByTestId('form-field')
    
    // Check default Tailwind classes from the component
    expect(select.className).toContain('bg-neutral-secondary-medium')
    expect(select.className).toContain('border')
    expect(select.className).toContain('border-default-medium')
    expect(select.className).toContain('text-heading')
    expect(select.className).toContain('text-sm')
    expect(select.className).toContain('rounded')
    expect(select.className).toContain('focus:ring-brand')
    expect(select.className).toContain('focus:border-brand')
    expect(select.className).toContain('block')
    expect(select.className).toContain('w-full')
    expect(select.className).toContain('px-2.5')
    expect(select.className).toContain('py-2')
    expect(select.className).toContain('shadow-xs')
    expect(select.className).toContain('appearance-none')
  })

  test('merges custom className with default classes', () => {
    render(<Select className="custom-class another-class" />)
    const select = screen.getByTestId('form-field')
    
    expect(select.className).toContain('custom-class')
    expect(select.className).toContain('another-class')
    // Should still contain default classes
    expect(select.className).toContain('bg-neutral-secondary-medium')
    expect(select.className).toContain('border')
  })

  test('passes additional props to select element', () => {
    render(
      <Select 
        placeholder="Select an option"
        disabled
        value="option1"
        name="category"
        id="category-select"
        data-testid="custom-select"
        aria-label="Category selection"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    
    const select = screen.getByTestId('custom-select')
    expect(select).toHaveAttribute('placeholder', 'Select an option')
    expect(select).toBeDisabled()
    expect(select).toHaveValue('option1')
    expect(select).toHaveAttribute('name', 'category')
    expect(select).toHaveAttribute('id', 'category-select')
    expect(select).toHaveAttribute('aria-label', 'Category selection')
  })

  test('handles change events', () => {
    const handleChange = vi.fn()
    render(<Select onChange={handleChange} />)
    const select = screen.getByTestId('form-field')
    
    fireEvent.change(select, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('handles focus and blur events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    render(<Select onFocus={handleFocus} onBlur={handleBlur} />)
    const select = screen.getByTestId('form-field')
    
    fireEvent.focus(select)
    expect(handleFocus).toHaveBeenCalledTimes(1)
    
    fireEvent.blur(select)
    expect(handleBlur).toHaveBeenCalledTimes(1)
  })

  test('renders children options', () => {
    render(
      <Select>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    
    const select = screen.getByTestId('form-field')
    expect(select.children).toHaveLength(3)
    expect(select.children[0]).toHaveValue('')
    expect(select.children[0]).toHaveTextContent('Select an option')
    expect(select.children[1]).toHaveValue('option1')
    expect(select.children[1]).toHaveTextContent('Option 1')
    expect(select.children[2]).toHaveValue('option2')
    expect(select.children[2]).toHaveTextContent('Option 2')
  })

  test('supports required attribute', () => {
    render(<Select required />)
    const select = screen.getByTestId('form-field')
    expect(select).toBeRequired()
  })

  test('supports multiple attribute', () => {
    render(<Select multiple />)
    const select = screen.getByTestId('form-field')
    expect(select).toHaveAttribute('multiple')
  })

  test('supports size attribute', () => {
    render(<Select size={3} />)
    const select = screen.getByTestId('form-field')
    expect(select).toHaveAttribute('size', '3')
  })

  test('supports autoComplete attribute', () => {
    render(<Select autoComplete="country" />)
    const select = screen.getByTestId('form-field')
    expect(select).toHaveAttribute('autocomplete', 'country')
  })

  test('has proper accessibility attributes when provided', () => {
    render(
      <Select 
        aria-describedby="description-id"
        aria-invalid="true"
        aria-required="true"
      />
    )
    const select = screen.getByTestId('form-field')
    expect(select).toHaveAttribute('aria-describedby', 'description-id')
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveAttribute('aria-required', 'true')
  })

  test('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Select ref={ref} />)
    const select = screen.getByTestId('form-field')
    expect(ref).toHaveBeenCalledWith(select)
  })

  test('maintains data-testid="form-field" by default', () => {
    render(<Select />)
    const select = screen.getByTestId('form-field')
    expect(select).toBeInTheDocument()
  })

  test('allows overriding data-testid', () => {
    render(<Select data-testid="custom-test-id" />)
    const select = screen.getByTestId('custom-test-id')
    expect(select).toBeInTheDocument()
    // Should not find the default test id
    expect(screen.queryByTestId('form-field')).toBeNull()
  })
})
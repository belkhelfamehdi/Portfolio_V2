import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import GlitchText from '../components/GlitchText'

describe('GlitchText', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders and eventually displays the correct text', async () => {
    render(<GlitchText text="Hello World" />)
    
    // Fast-forward through the glitch animation
    vi.advanceTimersByTime(5000)
    
    await waitFor(() => {
      expect(screen.getByText('Hello World')).toBeDefined()
    })
  })

  it('applies custom className', async () => {
    render(<GlitchText text="Test" className="custom-class" />)
    
    // Fast-forward through the glitch animation
    vi.advanceTimersByTime(5000)
    
    await waitFor(() => {
      const element = screen.getByText('Test')
      expect(element).toHaveClass('custom-class')
    })
  })
})

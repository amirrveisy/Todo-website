import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  test('renders heading and description', () => {
    render(<HeroSection />)

    expect(
      screen.getByText('Clarity, finally.')
    ).toBeInTheDocument()

    expect(
      screen.getByText('A simple Website to Show my Coding Skills')
    ).toBeInTheDocument()
  })

  test('renders image with correct alt text', () => {
    render(<HeroSection />)

    const img = screen.getByAltText('Todo app preview')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '../../1.png')
  })
})
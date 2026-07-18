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

  test('renders decorative hero card', () => {
    render(<HeroSection />)

    expect(screen.getByText('Alien task intelligence online')).toBeInTheDocument()
  })
})
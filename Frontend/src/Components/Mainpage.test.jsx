import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import MainPage from './MainPage'

vi.mock('./NavigationComponent', () => ({
  default: () => <div data-testid="navigation-bar">NavigationBar</div>,
}))

vi.mock('./HeroSection', () => ({
  default: () => <div data-testid="hero-section">HeroSection</div>,
}))

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}))

describe('MainPage', () => {
  test('renders navigation bar, hero section, and footer', () => {
    const stateChanger = vi.fn()

    render(<MainPage stateChanger={stateChanger} />)

    expect(screen.getByTestId('navigation-bar')).toBeInTheDocument()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
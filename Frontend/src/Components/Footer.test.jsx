import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  test('renders brand and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('TodoList')).toBeInTheDocument()
    expect(
      screen.getByText(/© 2026 All rights reserved/i)
    ).toBeInTheDocument()
  })

  test('renders GitHub and LinkedIn links with correct URLs', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(2)

    expect(links[0]).toHaveAttribute(
      'href',
      'https://github.com/amirrveisy'
    )

    expect(links[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/amirrveisy/'
    )
  })
})
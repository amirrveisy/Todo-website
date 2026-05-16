import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import NavigationBar from './NavigationComponent'
import util from '../util'

describe('NavigationBar', () => {
  test('renders logo text and buttons', () => {
    const stateChanger = vi.fn()

    render(<NavigationBar stateChanger={stateChanger} />)

    expect(screen.getByText('TodoList')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /signup/i })).toBeInTheDocument()
  })

  test('login button changes view to LOGIN', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    render(<NavigationBar stateChanger={stateChanger} />)

    await user.click(screen.getByRole('button', { name: /login/i }))

    expect(stateChanger).toHaveBeenCalledWith(util.VIEWS.LOGIN)
  })

  test('signup button changes view to SIGNUP', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    render(<NavigationBar stateChanger={stateChanger} />)

    await user.click(screen.getByRole('button', { name: /signup/i }))

    expect(stateChanger).toHaveBeenCalledWith(util.VIEWS.SIGNUP)
  })
})
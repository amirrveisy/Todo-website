import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import LoginForm from './LoginForm'
import loginRoute from '../services/Login'
import taskService from '../services/Task'
import util from '../util'

vi.mock('../services/Login', () => ({
  default: {
    create: vi.fn(),
  },
}))

vi.mock('../services/Task', () => ({
  default: {
    setToken: vi.fn(),
  },
}))

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.localStorage.clear()
  })

  test('Login form is created ', () => {
    const stateChanger = vi.fn()

    render(<LoginForm stateChanger={stateChanger} />)

    expect(screen.getByText('Welcome back')).toBeInTheDocument()
    expect(screen.getByTestId('username-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
    expect(screen.getByTestId('logform-login-button')).toBeInTheDocument()
    expect(screen.getByTestId('logform-cancel-button')).toBeInTheDocument()
  })

  test('cancel button changes view to HOME', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    render(<LoginForm stateChanger={stateChanger} />)

    await user.click(screen.getByTestId('logform-cancel-button'))

    expect(stateChanger).toHaveBeenCalledWith(util.VIEWS.HOME)
  })

  test('submits username and password correctly', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    const fakeResponse = {
      username: 'amir',
      token: 'fake-token-123',
    }

    loginRoute.create.mockResolvedValue(fakeResponse)

    render(<LoginForm stateChanger={stateChanger} />)

    await user.type(screen.getByTestId('username-input'), 'test')
    await user.type(screen.getByTestId('password-input'), 'test')
    await user.click(screen.getByTestId('logform-login-button'))

    expect(loginRoute.create).toHaveBeenCalledWith({
      username: 'test',
      password: 'test',
    })
  })

  test('successful login saves token, saves user, and changes view to TASKS', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    const fakeResponse = {
      username: 'amir',
      token: 'fake-token-123',
    }

    loginRoute.create.mockResolvedValue(fakeResponse)

    render(<LoginForm stateChanger={stateChanger} />)

    await user.type(screen.getByTestId('username-input'), 'amir')
    await user.type(screen.getByTestId('password-input'), 'secret')
    await user.click(screen.getByTestId('logform-login-button'))

    expect(taskService.setToken).toHaveBeenCalledWith('fake-token-123')

    expect(window.localStorage.getItem('loggedNoteappUser')).toBe(
      JSON.stringify(fakeResponse)
    )

    expect(stateChanger).toHaveBeenCalledWith(util.VIEWS.TASKS)
  })

  test('clears inputs after successful login', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    loginRoute.create.mockResolvedValue({
      username: 'amir',
      token: 'fake-token-123',
    })

    render(<LoginForm stateChanger={stateChanger} />)

    const usernameInput = screen.getByTestId('username-input')
    const passwordInput = screen.getByTestId('password-input')

    await user.type(usernameInput, 'amir')
    await user.type(passwordInput, 'secret')
    await user.click(screen.getByTestId('logform-login-button'))

    expect(usernameInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
  })

  test('failed login clears inputs and does not change view', async () => {
    const stateChanger = vi.fn()
    const user = userEvent.setup()

    loginRoute.create.mockRejectedValue({ response: { status: 401 } })

    render(<LoginForm stateChanger={stateChanger} />)

    const usernameInput = screen.getByTestId('username-input')
    const passwordInput = screen.getByTestId('password-input')

    await user.type(usernameInput, 'amir')
    await user.type(passwordInput, 'wrongpassword')
    await user.click(screen.getByTestId('logform-login-button'))

    expect(usernameInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(taskService.setToken).not.toHaveBeenCalled()
    expect(stateChanger).not.toHaveBeenCalledWith(util.VIEWS.TASKS)
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Incorrect username or password. Please try again.'
    )
  })
})

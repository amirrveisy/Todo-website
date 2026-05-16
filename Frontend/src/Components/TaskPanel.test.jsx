import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import TaskPanel from './TaskPanel'
import util from '../util'
import useTasks from './useTasks'

vi.mock('./useTasks', () => ({
  default: vi.fn(),
}))

vi.mock('./Display', () => ({
  default: ({ tasks, remover }) => (
    <div data-testid="display">
      {tasks.map((task) => (
        <button key={task.id} onClick={() => remover(task.id)}>
          {task.task}
        </button>
      ))}
    </div>
  ),
}))

describe('TaskPanel', () => {
  const mockUseTasks = {
    tasks: [
      {
        id: 1,
        task: 'Study React',
        date: '2026-05-16',
      },
    ],
    input: '',
    changeInput: vi.fn(),
    addTask: vi.fn((event) => event.preventDefault()),
    remTask: vi.fn(),
    dateInput: '',
    changeDateInput: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    window.localStorage.clear()
    useTasks.mockReturnValue(mockUseTasks)
  })

  test('renders task panel content', () => {
    const stateChanger = vi.fn()

    render(<TaskPanel stateChanger={stateChanger} />)

    expect(screen.getByText('My Tasks')).toBeInTheDocument()
    expect(screen.getByText('Manage your daily tasks in one place')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('date input')).toBeInTheDocument()
    expect(screen.getByTestId('add button')).toBeInTheDocument()
    expect(screen.getByText('Task List')).toBeInTheDocument()
  })

  test('typing in task input calls changeInput', async () => {
    const user = userEvent.setup()
    const stateChanger = vi.fn()

    render(<TaskPanel stateChanger={stateChanger} />)

    await user.type(screen.getByTestId('input'), 'New task')

    expect(mockUseTasks.changeInput).toHaveBeenCalled()
  })

  test('changing date input calls changeDateInput', async () => {
    const user = userEvent.setup()
    const stateChanger = vi.fn()

    render(<TaskPanel stateChanger={stateChanger} />)

    await user.type(screen.getByTestId('date input'), '2026-05-16')

    expect(mockUseTasks.changeDateInput).toHaveBeenCalled()
  })

  test('clicking add button calls addTask', async () => {
    const user = userEvent.setup()
    const stateChanger = vi.fn()

    render(<TaskPanel stateChanger={stateChanger} />)

    await user.click(screen.getByTestId('add button'))

    expect(mockUseTasks.addTask).toHaveBeenCalled()
  })

  test('logout removes user from localStorage and changes view to HOME', async () => {
    const user = userEvent.setup()
    const stateChanger = vi.fn()

    window.localStorage.setItem('loggedNoteappUser', 'fake-user')

    render(<TaskPanel stateChanger={stateChanger} />)

    await user.click(screen.getByRole('button', { name: /logout/i }))

    expect(window.localStorage.getItem('loggedNoteappUser')).toBe(null)
    expect(stateChanger).toHaveBeenCalledWith(util.VIEWS.HOME)
  })

  test('passes tasks and remover to Display', async () => {
    const user = userEvent.setup()
    const stateChanger = vi.fn()

    render(<TaskPanel stateChanger={stateChanger} />)

    expect(screen.getByTestId('display')).toBeInTheDocument()
    expect(screen.getByText('Study React')).toBeInTheDocument()

    await user.click(screen.getByText('Study React'))

    expect(mockUseTasks.remTask).toHaveBeenCalledWith(1)
  })
})
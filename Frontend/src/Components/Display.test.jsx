import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import Display from './Display'


vi.mock('./Task', () => ({
    default: ({ task, fun }) => <li>{task} <button onClick={fun}>remover </button> </li>
}))




test('the response to an empty array', () => {

    render(<Display tasks={[]} />)

    expect(screen.getByText("Nothing to do! chill")).toBeVisible()


})


test('It passes the array correctly to the child component', () => {
    const tasks = [
        { id: 1, task: 'Study' },
        { id: 2, task: 'Gym' }
    ]

    render(<Display tasks={tasks} remover={() => { }} />)


    expect(screen.getByText('Study')).toBeVisible()
    expect(screen.getByText('Gym')).toBeVisible()

})


test('Passes Remover correctly',async () => {
    const user = userEvent.setup()

    const removerfun = vi.fn()

    const tasks = [
        { id: 1, task: 'Study' }
    ]


    render(<Display tasks={tasks} remover={removerfun} />)

    await user.click(screen.getByText('remover'))


    expect(removerfun).toHaveBeenCalledWith(1)


})
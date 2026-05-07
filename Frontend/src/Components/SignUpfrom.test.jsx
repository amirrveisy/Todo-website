import SUForm from "./SignUpform";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import route from '../../services/SignUp'

vi.mock('../../services/SignUp', () => ({
    default: {
        create: vi.fn()
    }
}))


test('Testing that the skeleton exists', () => {

    render(<SUForm />)

    expect(screen.getByTestId('signup-form')).toBeVisible()
    expect(screen.getByText('username')).toBeVisible()
    expect(screen.getByText('password')).toBeVisible()
    expect(screen.getByTestId('siform-login-button')).toBeVisible()
    expect(screen.getByTestId('siform-cancel-button')).toBeVisible()

})


test('Testing that the password input is responsive', async () => {

    const user = userEvent.setup()
    render(<SUForm />)

    const passwordInpt = screen.getByTestId('password-input') 

    await user.type(passwordInpt, '1234')
    expect(passwordInpt.value).toBe('1234')

})


test('Testing that the username input is responsive', async () => {

    const user = userEvent.setup()
    render(<SUForm />)

    const  usernameInpt= screen.getByTestId('username-input') 

    await user.type(usernameInpt, '1234')
    expect(usernameInpt.value).toBe('1234')

})


test('cancel button calls cancelFunc', async () => {

    const cancelFunc = vi.fn()
    const user = userEvent.setup()

    render(<SUForm cancelFunc={cancelFunc} />)

    await user.click(screen.getByTestId('siform-cancel-button'))

    expect(cancelFunc).toHaveBeenCalled()

})


test('Making sure that the Signup Button works', async () => {

    route.create.mockResolvedValue({
        username: 'amir'
    })

    const user = userEvent.setup()

    render(<SUForm />)

    const  usernameInpt= screen.getByTestId('username-input')
    const passwordInpt = screen.getByTestId('password-input')  

    await user.type(usernameInpt, 'amir')
    await user.type(passwordInpt, '1234')

    await user.click(screen.getByTestId('siform-login-button'))

    expect(route.create).toHaveBeenCalledWith({
        username: 'amir',
        password: '1234'
    })

})
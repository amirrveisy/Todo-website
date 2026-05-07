import LoginForm from "./LoginForm";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import loginRoute from '../../services/Login'

vi.mock('../../services/Login', () => ({
    default: {
        create: vi.fn()
    }
}))


test('Testing that the skeletoon exists ', () => {

    render(<LoginForm />)

    expect(screen.getByTestId('login-form')).toBeVisible()
    expect(screen.getByTestId('username-input')).toBeVisible()
    expect(screen.getByTestId('password-input')).toBeVisible()
    expect(screen.getByTestId('logform-login-button')).toBeVisible()
    expect(screen.getByTestId('logform-cancel-button')).toBeVisible()

})

test('Testing that the password input is responsive', async () => {


    const testText = "1234"
    const user = userEvent.setup()
    render(<LoginForm />)
    const inp = screen.getByTestId('password-input')

    
    await user.type(inp, testText)
    expect(inp.value).toBe(testText)


})

test('Testing that the username input is responsive', async () => {


    const testText = "1234"
    const user = userEvent.setup()
    render(<LoginForm />)
    const inp = screen.getByTestId('username-input')

    await user.type(inp, testText)
    expect(inp.value).toBe(testText)


})

test('cancel button calls cancelFunc', async () => {
    const cancelFunc = vi.fn()
    const authSetter = vi.fn()
    const user = userEvent.setup()

    render(<LoginForm cancelFunc={cancelFunc} authSetter={authSetter} />)

    await user.click(screen.getByTestId('logform-cancel-button'))

    expect(cancelFunc).toHaveBeenCalled()
})

test('Making sure that the Login Button works', async () => {

    loginRoute.create.mockResolvedValue({
        token: '123',
        username: 'amir'
    })

    const authset= vi.fn()

    const user = userEvent.setup()

    render(<LoginForm authSetter={authset} />)

    await user.type(screen.getByTestId('username-input'), 'amir')
    await user.type(screen.getByTestId('password-input'), '1234')

    await user.click(screen.getByTestId('logform-login-button'))

    expect(loginRoute.create).toHaveBeenCalledWith({
        username: "amir",
        password: '1234'

    })

    expect(authset).toHaveBeenCalled()

})





import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'


import AuthPanel from './AuthPanel'



test(" Buttons are there! ", () => {

    render(<AuthPanel />)

    const loginButton = screen.getByTestId("login-button")
    expect(loginButton).toBeVisible()

    const signupButton = screen.getByTestId("signup-button")
    expect(signupButton).toBeVisible()

})


test("Login button works", async () => {

    render(<AuthPanel />)
    const user = userEvent.setup()

    const loginButton = screen.getByTestId("login-button")
    await user.click(loginButton)
    

    expect(screen.getByTestId('login-form')).toBeVisible()
    expect(screen.getByTestId('logform-login-button')).toBeVisible()
    expect(screen.getByTestId('logform-cancel-button')).toBeVisible()


    expect(screen.queryByTestId("login-button")).not.toBeInTheDocument()
    expect(screen.queryByTestId("signup-button")).not.toBeInTheDocument()


})

test("SignUp button works", async () => {

    render(<AuthPanel />)
    const user = userEvent.setup()

    const signupButton = screen.getByTestId("signup-button")
    await user.click(signupButton)

    expect(screen.getByTestId('signup-form')).toBeVisible()
    expect(screen.getByTestId('siform-login-button')).toBeVisible()
    expect(screen.getByTestId('siform-cancel-button')).toBeVisible()


    expect(screen.queryByTestId("login-button")).not.toBeInTheDocument()
    expect(screen.queryByTestId("signup-button")).not.toBeInTheDocument()


})
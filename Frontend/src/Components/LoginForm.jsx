import { useState } from "react"
import loginRoute from '../../services/Login'
import taskService from '../../services/Task'
import useTasks from "./useTasks"


const LoginForm = ({ cancelFunc, authSetter }) => {

    const [newUser, setNewUser] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleLogin = () => {
        authSetter(true)
    }




    const sendUserObject = async (event) => {
        event.preventDefault()

        const newUserObj = {
            username: newUser,
            password: newPassword
        }

        try {

            const response = await loginRoute.create(newUserObj)
            taskService.setToken(response.token)
            
            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(response)
            )

            handleLogin()
            setNewUser('')
            setNewPassword('')

        } catch (error) {
            console.log(error)
            setNewUser('')
            setNewPassword('')
        }
    }


    return (

        <div>
            <form data-testid='login-form' onSubmit={sendUserObject}>
                <div>
                    <p>username</p>
                    <input  data-testid='username-input' value={newUser} onChange={event => setNewUser(event.target.value)} />
                </div>
                <div>
                    <p>password</p>
                    <input data-testid='password-input' value={newPassword} onChange={event => setNewPassword(event.target.value)} />
                </div>
                <button data-testid='logform-login-button' type="submit">login</button>
                <button data-testid='logform-cancel-button' type="button" onClick={() => cancelFunc()}> cancel </button>

            </form>

        </div>

    )

}
export default LoginForm
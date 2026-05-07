import { useState } from "react"
import route from '../../services/SignUp'


const SUForm = ({ cancelFunc }) => {

    const [newUser, setNewUser] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const sendUserObject = (event) => {
        event.preventDefault()

        const newUserObj = {
            username: newUser,
            password: newPassword
        }
        route.create(newUserObj)

        setNewUser('')
        setNewPassword('')

    }


    return (

        <div>
            <form data-testid="signup-form" onSubmit={sendUserObject}>
                <div>
                    <p>username</p>
                    <input value={newUser}  data-testid='username-input' onChange={event => setNewUser(event.target.value)} />
                </div>
                <div>
                    <p>password</p>
                    <input value={newPassword} data-testid='password-input' onChange={event => setNewPassword(event.target.value)} />
                </div>
                <button data-testid='siform-login-button'type="submit">signUp</button>
                <button data-testid='siform-cancel-button'onClick={() => cancelFunc()}> cancel </button>
            </form>

        </div>


    )

}
export default SUForm
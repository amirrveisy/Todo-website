import { useState } from 'react'
import loginRoute from '../../services/Login'
import taskService from '../../services/Task'
import util from '../util'


const LoginForm = ({ stateChanger }) => {
    const [newUser, setNewUser] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleLogin = () => {
        stateChanger(util.VIEWS.TASKS)
    }

    const sendUserObject = async (event) => {
        event.preventDefault()
        console.log("we have reached here successfully")

        const newUserObj = {
            username: newUser,
            password: newPassword,
        }

        try {
            const response = await loginRoute.create(newUserObj)

            taskService.setToken(response.token)

            window.localStorage.setItem(
                'loggedNoteappUser',
                JSON.stringify(response)
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
        <section className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <div
                className="card shadow-lg border-0"
                style={{
                    width: '420px',
                    borderRadius: '24px',
                }}
            >
                <div className="card-body p-5">
                    <h2 className="text-center fw-bold mb-2">Welcome Back</h2>
                    <p className="text-center text-muted mb-4">
                        Login to manage your tasks
                    </p>

                    <form data-testid="login-form" onSubmit={sendUserObject}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Username</label>
                            <input
                                className="form-control form-control-lg"
                                data-testid="username-input"
                                value={newUser}
                                onChange={(event) => setNewUser(event.target.value)}
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                data-testid="password-input"
                                value={newPassword}
                                onChange={(event) => setNewPassword(event.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="d-flex gap-3">
                            <button
                                className="btn btn-primary btn-lg w-100"
                                data-testid="logform-login-button"
                                type="submit"

                            >
                                Login
                            </button>

                            <button
                                className="btn btn-outline-secondary btn-lg w-100"
                                data-testid="logform-cancel-button"
                                type="button"
                                onClick={() => { stateChanger(util.VIEWS.HOME) }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginForm
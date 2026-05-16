import { useState } from "react"
import route from '../services/SignUp'
import util from '../util'

const SUForm = ({ stateChanger }) => {
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const sendUserObject = async (event) => {
    event.preventDefault()

    const newUserObj = {
      username: newUser,
      password: newPassword
    }

    try {
      await route.create(newUserObj)

      setNewUser('')
      setNewPassword('')
      stateChanger(util.VIEWS.LOGIN)
    } catch (error) {
      console.log(error)
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
          <h2 className="text-center fw-bold mb-2">Create Account</h2>
          <p className="text-center text-muted mb-4">
            Sign up to start managing your tasks
          </p>

          <form data-testid="signup-form" onSubmit={sendUserObject}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                className="form-control form-control-lg"
                data-testid="username-input"
                value={newUser}
                onChange={(event) => setNewUser(event.target.value)}
                placeholder="Choose a username"
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
                placeholder="Choose a password"
              />
            </div>

            <div className="d-flex gap-3">
              <button
                className="btn btn-primary btn-lg w-100"
                style={{ backgroundColor: '#fc6A03', color: 'white' }}
                data-testid="signup-button"
                type="submit"
              >
                Sign Up
              </button>

              <button
                className="btn btn-outline-secondary btn-lg w-100"
                data-testid="signup-cancel-button"
                type="button"
                onClick={() => stateChanger(util.VIEWS.HOME)}
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

export default SUForm
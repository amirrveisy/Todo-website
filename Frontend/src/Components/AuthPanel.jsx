
import SUForm from './SignUpform'
import LoginForm from './LoginForm'
import { useState } from 'react'

const AuthPanel = ({authochanger}) => {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [showButton, setShowButton] = useState(true)



    const loginClicked = () => {
        setShowLogin(true)
        setShowSignup(false)
        setShowButton(false)
    }

    const signupClicked = () => {
        setShowSignup(true)
        setShowLogin(false)
        setShowButton(false)
    }

    const Buttons = () => {
        return (
            <div>
                <button onClick={loginClicked}>login</button>
                <button onClick={signupClicked}>signup</button>
            </div>
        )
    }

    const cancel = () => {
        setShowButton(true)
        setShowLogin(false)
        setShowSignup(false)
    }



    return (

        <div>

            {showButton && <Buttons />}
            {showLogin && <LoginForm cancelFunc={cancel} authSetter={authochanger} />}
            {showSignup && <SUForm cancelFunc={cancel} />}

        </div>

    )

}
export default AuthPanel
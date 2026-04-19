import { useState } from "react"
import route from '../../services/SignUp'


const SUForm=({cancelFunc})=>{

    const [newUser, setNewUser]=useState('')
    const [newPassword, setNewPassword]=useState('')

    const sendUserObject=(event)=>{
        event.preventDefault()
        
        const newUserObj={
            username: newUser,
            password: newPassword
        }
        route.create(newUserObj)

        setNewUser('')
        setNewPassword('')

    }


    return(

        <div>
            <form  onSubmit={ sendUserObject}>
                <div>
                    <p>username</p>
                <input value={newUser} onChange={event=> setNewUser(event.target.value)}/>
                </div>
                <div>
                <p>password</p>
                <input value={newPassword} onChange={event=> setNewPassword(event.target.value)}/> 
                </div>
                <button type="submit">signUp</button>
                <button onClick={()=>cancelFunc() }> cancel </button>
            </form>

        </div>


    )

}
export default SUForm
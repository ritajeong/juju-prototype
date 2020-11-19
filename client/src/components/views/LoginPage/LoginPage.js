import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event)=>{
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event)=>{
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event)=>{
        event.preventDefault();

        let body = {
            email : Email,
            password : Password
        }
        
        dispatch(loginUser(body))
            .then(response =>{
                if(response.payload.logiSuccess){
                    props.history.push('/')
                }else{
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            diplay:'flex', justifyContent : 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
            }}>

            <form style={{display:'flex', flexDirection:'column'}}
                onSUbmit={onSubmitHandler}
            >

                <label>Email</label>
                <input type = "email" value={Email} value onChange={onEmailHandler}/>
                <label>password</label>
                <input type = "password" value={Password} value onChange={onPasswordHandler}/>
                <br/>
                <button >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
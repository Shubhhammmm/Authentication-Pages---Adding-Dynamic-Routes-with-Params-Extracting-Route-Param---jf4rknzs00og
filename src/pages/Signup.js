import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { signup } from '../api/auth';
export const Signup = () =>{
    const navigate=useNavigate()
    const emailref=useRef()
    const passRef =useRef()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = emailref.current.value
        const password = passRef.current.value
        signup({email,password}).then(()=>navigate('/signin'))

    }
    return(
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailref} placeholder='email' required/>
                <br/>
                <input type="password" ref={passRef} placeholder='password' required/>
                <br/>
                <button type="submit">Sign up</button>

            </form>

        </div>
    )
}

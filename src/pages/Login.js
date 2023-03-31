import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async()=> {
        try {
            const res = await fetch('https://pharmacy-register-cyt4.onrender.com/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email, password})
            })
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) window.location.href = `/Dashboard?email=${email}`
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='container'>

        <div>
            <h1 className='heading'>User Login</h1>
        </div>

        <div className='form'>
            <label>Enter your E-mail :</label>
            <input type="email" value={email} onInput={e=>setEmail(e.target.value)} /><br/>

            <label>Enter Your password :</label>
            <input type="password" value={password} onInput={e=>setPassword(e.target.value)}/><br/>

            <button onClick={login}>login</button>
        </div>

        <div className='fBtn'>
            <label className='lbl'>Not Register yet :</label>
            <a href='./'>Register</a>
        </div>
        
        

    </div>
  )
}

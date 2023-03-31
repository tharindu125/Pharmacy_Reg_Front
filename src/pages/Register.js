import React, { useState } from 'react'
import '../styles/Register.css'


export default function AddFirstContact() {

    const [f_name,setNamef] = useState('') 
    const [l_name,setNamel] = useState('')
    const [m_number,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
    //add contact
    const addContact = async()=>{
        try {
            
            const res = await fetch('/api/workouts',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                
                body:JSON.stringify({f_name, l_name, m_number, email, password})
               
            })
            console.log("hhhh");
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) window.location.href = "/Login"
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
  return (
    <div>
                 
            <div className='container'>

                <h1 className='heading'>New User Registration</h1>

                <div className='form'>
                
                    <label className='label'>Enter Your First Name :</label>
                    <input type="text" value={f_name} onInput={e=>setNamef(e.target.value)} placeholder="   First name"/><br/>
                    <label className='label'>Enter Your Last Name :</label>
                    <input type="text" value={l_name} onInput={e=>setNamel(e.target.value)} placeholder="   Last name"/><br/>
                    <label className='label'>Enter Your Mobile Number :</label>
                    <input type="text" value={m_number} onInput={e=>setPhone(e.target.value)} placeholder="   Mobile number"/><br/>
                    <label className='label'>Enter Your E-mail :</label>
                    <input type="email" value={email} onInput={e=>setEmail(e.target.value)}  placeholder="   E-mail"/><br/>
                    <label className='label'>Enter your password :</label>
                    <input type="text" value={password} onInput={e=>setPassword(e.target.value)}  placeholder="   Password"/><br/>
                    
                    <div className='btn'>
                        <button onClick={addContact} >Register</button>
                    </div>
                </div>
             
                
            </div>
          
       
    </div> 
  )
}



import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('')
    const register = () =>{
        axios.post("http://localhost:5000/",{
            username : username
        })
    }
    return (      
        <div>
           <Form method="POST" action="/">
               <div className="form-group">
                   <label for="username">Username</label>
                   <input type="text" id="username" name="username" autoComplete="off" required value={username} onChange={e=>setUsername(e.target.value)}></input>
               </div>
               <div className="form-group">
                   <button type="submit" className="btn btn-primary" onClick={register}>Register Me</button>
               </div>
               <div className="form-group">
                   <button type="submit">SignIn</button>
               </div>
           </Form>
        </div>
    )
}

export default Register

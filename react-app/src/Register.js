import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('')
    const register = () =>{
        axios.post("http://localhost:5000/",{
            username : username
        })
    }
    return (      
        <div className="container">
           <div className="box">
           <Form method="POST" action="/">
               <div className="form-group-1">
                   {/*<label for="username">Username</label>*/}
                   <input type="text" id="username" placeholder="Username" name="username" autoComplete="off" required value={username} onChange={e=>setUsername(e.target.value)}></input>
               </div>
               <div className="form-group">
                   <button type="submit" className="btn" onClick={register}>Register Me</button>
               </div>
               <div className="form-group">
                   <button type="submit" className="btn" >SignIn</button>
               </div>
           </Form>
           </div>
        </div>
    )
}

export default Register

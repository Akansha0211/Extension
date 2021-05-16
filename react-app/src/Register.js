import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

function Register() {
    const [usrename, setUsername] = useState('')
    const register = () =>{
        
    }
    return (      
        <div>
           <Form method="POST" action="">
               <div className="form-group">
                   <label for="username">Username</label>
                   <input type="text" name="username" autoComplete="off" required></input>
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

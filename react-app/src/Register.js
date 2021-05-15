import React from 'react';
import {Form} from 'react-bootstrap'

function Register() {
    
    return (
        <div>
           <Form>
               <div className="form-group">
                   <label for="username">Username</label>
                   <input type="text" name="username" autoComplete="off" required></input>
               </div>
               <div className="form-group">
                   <button type="submit" className="btn btn-primary">Register Me</button>
               </div>
           </Form>
        </div>
    )
}

export default Register

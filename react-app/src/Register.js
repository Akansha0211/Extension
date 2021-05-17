import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';
import data from "bootstrap/js/src/dom/data";


function Register() {
    const [username, setUsername] = useState('')
    const register = () =>{
        axios.post("http://localhost:5000/",{
            username : username
        })
    }



    var today = new Date();
    var date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var day = today.getDay();
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var weekday = dayOfWeek[day]

    return (      
        <div className="container">
           <div className="box">
           <Form method="POST" action="">
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
            <div >
                <img src="{{ url_for('video_feed') }}" width="100%"/>
            </div>
           <div className="dt">
                <h1>{time}</h1>
                <h2>{date}</h2>
                <h3>{weekday}</h3>
           </div>

        </div>
    )
}

export default Register

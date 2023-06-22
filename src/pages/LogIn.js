import React, { useState,useContext,useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LogInPageAnimation from './LogInPageAnimation';
import Navbar from './Navbar';

function LogInPage()
{
    const [pageValue,SetPageValue]=useState(0)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [retypePassword,setRetypePassword]=useState('')
    const [email,setEmail]=useState('')
    const [description,setDescription]=useState('')
    const navigate=useNavigate()
    const UsernameChange=(event)=>{
        setUsername(event.target.value)
    };
    const PasswordChange=(event)=>{
        setPassword(event.target.value)
    };

    const DescriptionChange=(event)=>{
        setDescription(event.target.value)
    }
    const EmailChange=(event)=>{
        setEmail(event.target.value)
    }
    const LogInFunc=()=>
    {
        alert(username)
        alert(email)
        alert(description)
        fetch("http://localhost:5000/NewJob",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':username,"password":password,"email":email,"description":description})
        }).then
        (

        )

    }

    if(pageValue===0)
    {

        return (
            <div id="LogIn" className='Log In'>
                <Navbar></Navbar>
                <div id="MainLogIn">
                    <button id="GrLogInButton" >Tutor</button>
                    <h2>Sign up for being a new tutor</h2>
                    <form>
                        <label for="Username"><b>Name:</b></label>
                        <br></br>
                        <input id="Username" type="text" onChange={UsernameChange}></input>
                        <br></br>
                        <br></br>
                        <label for="Password"><b>Password:</b></label>
                        <br></br>
                        <input id="Password" type="text" onChange={PasswordChange}></input>
                        <br></br>
                        <br></br>
                        <label for="Password" ><b>Email:</b></label>
                        <br></br>
                        <input id="Password" type="text" onChange={EmailChange}></input>
                        <br></br>
                        <br></br>
                        <label for="Password" ><b>Description:</b></label>
                        <br></br>
                        <input id="Password" type="text" onChange={DescriptionChange}></input>
                    </form>
                    <button id="GrButton" onClick={LogInFunc}><b>Sign Up</b></button>
                    <br></br>
                 
                </div>
            </div>
        )
    }

}



export default LogInPage;
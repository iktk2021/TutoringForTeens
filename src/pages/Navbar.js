import React, { useState,useContext,useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
function Navbar()
{
    const navigate=useNavigate()
    return(
        <div class="topnav">
            <button type="button" id="NavButton" onClick={()=>{navigate("/")}}>Home</button>
            <button type="button" id="NavButton" onClick={()=>{navigate("/Home")}}>SignUp</button>
            <button type="button" id="NavButton" onClick={()=>{navigate("/LFT")}}>Look for tutors</button>
            <button type="button" id="NavButton" onClick={()=>{navigate("/MOV")}}>Meet for Volunteers</button>
        </div> 
    )
}
export default Navbar;
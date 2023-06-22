import React, { useState,useContext,useEffect,Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import TutureDescription from './Tutordescription';
import Navbar from './Navbar';
function LookForTutor()
{
    const navigate=useNavigate();
    return (
        <div className='LookForTutor'>

            
            <div id="LFTB">
                <div id="LFTH">
                    <Navbar></Navbar>
                    <h1>Look For Tutor</h1>
                </div>
            </div>
            <TutureDescription></TutureDescription>

        </div>
    )
}
export default LookForTutor;
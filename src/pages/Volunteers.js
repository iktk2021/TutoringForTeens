import React, { useState,useContext,useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LogInPageAnimation from './LogInPageAnimation';
import Navbar from './Navbar';

function MeetOurVolunteers()
{
    return(
        <div className='Volunteers'>
            <div id="VH">
                <Navbar></Navbar>
                <h1>Meet our volunteers</h1>
                <img src="https://photos.google.com/photo/AF1QipMVLgl9HYgtfLNFSWWxMszVzVTb5GHtoUO4XMqn"></img>
            </div>
        </div>
    )
}
export default MeetOurVolunteers;
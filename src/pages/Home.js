import React, { useState,useContext} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import LogInPage from './LogIn';
function Home()
{
    const [pageValue,SetPageValue]=useState(0);
    const navigate=useNavigate();

    return (
        <div className='Home'>
            <LogInPage></LogInPage>
            
            
        </div>
    )
}
export default Home;
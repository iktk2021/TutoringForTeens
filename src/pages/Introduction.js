import React, { useState,useContext,useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPageAnimation from './LogInPageAnimation';

function Introduction()
{
    return(
        <div className='Introduction'>
            <div id="Intro">
                <LogInPageAnimation></LogInPageAnimation>
            </div>

        </div>
    )
}
export default Introduction;
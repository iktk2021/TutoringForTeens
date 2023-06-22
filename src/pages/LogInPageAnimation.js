import React, { useState,useContext,useEffect} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
function LogInPageAnimation()
{
    const [texts, setTexts] = useState([['Welcome to','Tutoring by Teens',"Empowering global students by academic successes",""], ['Who We Are?',"","","Tutoring by Teens is a youth-led, non-profit organization committed to delivering free, inclusive, and high-quality educational resources to students and families in need."], ['Our Mission',"","","Our FREE tutoring program offers one-on-one academic support to elementary school students, alleviating learning stress. High school and university students can access FREE seminars, workshops, and panels for valuable guidance in achieving their academic goals, while volunteer tutors earn community service hours from the safety and convenience of their own homes.",]]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate=useNavigate();
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000); // Change the text every 1 second
  
      return () => {
        clearInterval(interval);
      };
    }, [texts.length]);
    return (
        <div className='LIPA' id="LIPA">
            <Navbar></Navbar>
            <div id="LIPATXT">
        
                <h1>{texts[currentIndex][0]}</h1>
                <h1>{texts[currentIndex][1]}</h1>
                <h5><i>{texts[currentIndex][2]}</i></h5>
                <p style={{fontSize:30}}>{texts[currentIndex][3]}</p>
            </div>
            <div id="LIPAIMG">
                <img id="LIMG" src={require("../Images/Tutor.jpg")}></img>
            </div>
            
        </div>
        
    )
}
export default LogInPageAnimation;
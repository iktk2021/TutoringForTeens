import React, { useState,useContext,useEffect,Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class TutureDescription extends Component {
  constructor() {
    super();
    this.state = {
      tutors: null,
      times: 0
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/Tutors")
      .then(res => res.json())
      .then(data => {
        this.setState({
          tutors: data.tutors,
          times: data.len
        });
      });
  }

  render() {
    const { tutors } = this.state; // Access tutors from the state

    return (
      <div className='TutureDescription'>


        {tutors && tutors.map((tutor, index) => (
            <div id="Tutor">
                <h1>Name: {tutor.split(":")[0]}</h1>
                <h2>Description</h2>
                <p>{tutor.split(":")[3]}</p>
                <h2>Contact</h2>
                <h4>Email:{tutor.split(":")[2]}</h4>
                <p></p>
                <p></p>
            </div>
        ))}
      </div>
    );
  }
}



export default TutureDescription;
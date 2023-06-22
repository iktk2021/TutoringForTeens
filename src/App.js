import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LookForTutor from './pages/LookForTutor';
import Introduction from './pages/Introduction';
import MeetOurVolunteers from './pages/Volunteers';
function App() {
  return (
    <Router>

      <Routes>
          <Route exact path='/' exact element={<Introduction/>} />
          <Route exact path='/Home' exact element={<Home />} />
          <Route exact path="/LFT" exact element={<LookForTutor/>}/>
          <Route exact path="/MOV" exact element={<MeetOurVolunteers/>}/>
      </Routes>
    </Router>
  );
}

export default App;

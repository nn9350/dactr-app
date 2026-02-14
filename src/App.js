import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Dentist from './Dentist';
import Patient from './Patient';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">Dactr 🦷</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dentist">For Dentists</Link></li>
          <li><Link to="/patient">For Patients</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentist" element={<Dentist />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

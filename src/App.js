import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CardList from './components/CardList';
import SubmitCard from './components/SubmitCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/submit-card">Submit Card</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="/submit-card" element={<SubmitCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
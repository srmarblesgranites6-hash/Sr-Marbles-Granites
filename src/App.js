import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Footer from './pages/Footer';
import WhatsappIcon from './pages/WhatsappIcon';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} /> 
      </Routes>
      <WhatsappIcon />
    </Router>
  );
}

export default App;

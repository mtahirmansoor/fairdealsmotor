// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Dummy Components for Home, Stock, and Contact Pages
const Home = () => <div className="p-8"><h1 className="text-4xl">Home Page</h1></div>;
const Stock = () => <div className="p-8"><h1 className="text-4xl">Stock Page</h1></div>;
const Finance = () => <div className="p-8"><h1 className="text-4xl">Finance Page</h1></div>;
const Contact = () => <div className="p-8"><h1 className="text-4xl">Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

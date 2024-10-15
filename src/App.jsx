// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Components/Navbar";
import Header from "./Components/Home/Header";
import About from "./Components/Home/About";
import Footer from "./Components/Footer";

// Dummy Components for Stock, Finance, and Contact Pages
const Stock = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold">Stock Page</h1>
    <p>This is the stock page where you can find stock information.</p>
  </div>
);

const Finance = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold">Finance Page</h1>
    <p>This is the finance page where you can find financial information.</p>
  </div>
);

const Contact = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold">Contact Page</h1>
    <p>This is the contact page where you can find contact information.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          {/* Home route to display Header and About */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          {/* Other routes without Header and About */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

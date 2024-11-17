// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Components/Navbar";
import Header from "./Components/Home/Header";
import About from "./Components/Home/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Home/Contact";
import Login from './Components/Home/Login';
import Stock from "./Components/Home/Stock";
import Finance from "./Components/Home/Finance";
import Warranty from "./Components/Home/Warranty";
import SellYourCar from "./Components/Home/SellYourCar";
import MoreInfo from "./Components/Home/MoreInfo";
// Admin side

import AddCar from "./Components/Admin/AddCars";
import CarList from "./Components/Admin/CarsList";
import EditCar from "./Components/Admin/EditCars";
// Dummy Components for Stock and Finance Pages

function App() {
  const [showCarList, setShowCarList] = useState(false);
  const [carToEdit, setCarToEdit] = useState(null);
  
  const toggleView = () => {
    setShowCarList(!showCarList); // Toggle between Add Cars and Car List
    setCarToEdit(null); // Reset edit state when toggling view
  };

  

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <Routes>
          {/* Home route to display Header and About */}
          <Route path="/" element={<><Header /><About /></>} />
          
          {/* Other routes */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/SellYourCar" element={<SellYourCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stock" element={<Stock />} /> {/* Added Stock route */}
          <Route path="/warranty" element={<Warranty />} /> {/* Added Stock route */}
          <Route path="/MoreInfo/:id" element={<MoreInfo />} /> {/* Added Stock route */}
          <Route
          path="/admin"
          element={
            // If not logged in, redirect to the login page
            !localStorage.getItem("loggedIn") ? (
              <Navigate to="/login" />
            ) : (
              <>
                <button
                  onClick={toggleView}
                  className="mb-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  {showCarList ? "Add New Car" : "Show Car List"}
                </button>

                {!showCarList ? (
                  <AddCar /> // Show Add Cars form by default
                ) : carToEdit ? (
                  <EditCar carId={carToEdit} /> // Show Edit Cars if a car is selected for editing
                ) : (
                  <CarList onEdit={setCarToEdit} /> // Show Car List if no car is being edited
                )}
              </>
            )
          }
        />
         <Route path="/" element={<Navigate to="/login" />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Added 404 route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

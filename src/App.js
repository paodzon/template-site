import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

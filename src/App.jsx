import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/home";
import Features from "./pages/features";
import FeatureDetail from "./pages/FeatureDeteal";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";
import Trainers from "./pages/Trainers";
import TrainerDetail from "./pages/TrainerDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/feature/:id" element={<FeatureDetail />} />
          <Route path="/contact" element={<Contact />} />
         < Route path="/trainers" element={<Trainers />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

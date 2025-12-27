import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">HealthTrack</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/dynamic">Trainers</Link></li>
        <li><Link to="/mybooking">My Booking</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
//momomo
//lololo
//lplplplp
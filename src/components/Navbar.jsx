import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 
  const showBackButton = location.pathname !== "/";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-2">

      
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="self-start px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
          >
            ← Back
          </button>
        )}

        <div className="flex items-center justify-between w-full">

      
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Health<span className="text-cyan-400">Track</span>
          </Link>

          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

       
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li><Link className="hover:text-cyan-400 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-cyan-400 transition" to="/trainers">Trainers</Link></li>
            <li><Link className="hover:text-cyan-400 transition" to="/about">About</Link></li>
            <li><Link className="hover:text-cyan-400 transition" to="/features">Features</Link></li>
            <li><Link className="hover:text-cyan-400 transition" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

   
      {open && (
        <div className="md:hidden bg-gray-800 text-white shadow-md">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-lg font-medium">
            <li><Link onClick={() => setOpen(false)} className="hover:text-cyan-400 transition" to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} className="hover:text-cyan-400 transition" to="/trainers">Trainers</Link></li>
            <li><Link onClick={() => setOpen(false)} className="hover:text-cyan-400 transition" to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} className="hover:text-cyan-400 transition" to="/features">Features</Link></li>
            <li><Link onClick={() => setOpen(false)} className="hover:text-cyan-400 transition" to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
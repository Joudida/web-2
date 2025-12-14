import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-center items-center gap-6">

    
        <ul className="flex flex-row gap-6 text-lg font-medium">
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

   
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} HealthTrack. All rights reserved.
      </div>
    </footer>
    
  );
};

export default Footer;
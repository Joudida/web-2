import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Features from "./pages/features";
import Contact from "./pages/contact";
import DynamicPage from "./pages/DynamicPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
       <Route path="/dynamic" element={<DynamicPage />} />
    <Route path="/contact" element={<Contact />} />
       

      </Routes>
    </Router>
  );
}


export default App;

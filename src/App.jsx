import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Features from "./pages/features";
import Contact from "./pages/contact";
import ActivityDetails from "./pages/ActivityDetails";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />

      </Routes>
    </Router>
  );
}


export default App;

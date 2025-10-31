
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Features from '../pages/features';
import Contact from '../pages/contact'; 
import Dynamicpage from "../pages/Dynamicpage";
function app() {
  return(
    <Router>
    <navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Features" element={<Features />}/>
      gi<Route path="/contact" element={<Contact />}/> 
      <Route path="/Dynamicpage" element={<Dynamicpage />}/> 
    </Routes>
    <footer/>
    </Router>
  );
}
export default app;

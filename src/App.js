import React from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import FoodBanks from "./components/foodbanks/FoodBanks";
import Partners from "./components/partners/Partners";
import Contact from "./components/contact/Contact";
import Donate from "./components/donate/Donate";

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodbanks" element={<FoodBanks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

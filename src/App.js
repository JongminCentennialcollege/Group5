import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FoodBanks from "./components/pages/Foodbanks";
import Partners from "./components/pages/Partner";
import Contact from "./components/pages/Contact";
import Donate from "./components/pages/Donate";

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


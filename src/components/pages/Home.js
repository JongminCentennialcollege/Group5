import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Import the global CSS file (adjust the path as needed)
import '../../App.css';

function Home() {
  useEffect(() => {
    // Simple animation using GSAP
    gsap.from('.intro', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  }, []);

  // Give me your intagram id :)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="intro">Find Nearest Foodbank Locations</h1>
        <p>Join us in the fight against hunger.</p>
      </header>
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// css for home page not for the whole app
import './Home.css';

function Home() {
  useEffect(() => {
    // Simple animation using GSAP
    gsap.from('.intro', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  }, []);

  // Give me your intagram id :)
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 className="intro">Find Nearest Foodbank Locations</h1>
        <p>Join us in the fight against hunger.</p>
      </header>
    </div>
  );
}

export default Home;

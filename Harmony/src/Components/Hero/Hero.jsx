import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-box">
          <h1 className="hero-title">WELCOME TO HARMONY</h1>
          <p className="hero-subtitle">Healing minds,<br />transforming lives.</p>
        </div>
        <button className="get-started-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;

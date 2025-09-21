import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Capture Your Adventures</h1>
        <p className="hero-subtitle">
          Track your journeys, memorable moments, and inspiring places all in one beautiful Travel Journal.
        </p>
        <button className="hero-button">Start Your Journey</button>
      </div>
      <div className="hero-image" aria-label="Travel adventure">
       <img src="/hero-section.png" alt="Person with backpack looking at a scenic view" />
      </div>
    </section>
  );
};

export default HeroSection;

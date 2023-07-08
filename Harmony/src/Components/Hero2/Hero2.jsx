import React from 'react';
import './Hero2.css';

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-content">
      <div className="right-content">
        <h5 className="title">WHO WE ARE</h5>
        <p className="hero2-title">
            Mental health is <br />
            a human right, not <br />
            a privilege.
          </p>
          <p className="hero2-description">
          Dui imperdiet nisi dolor ligula nunc nisl
           arcu aliquam phasellus felis proin. Consectetuer
            ligula justo id ut inceptos mauris ultricies eros.
            arcu aliquam phasellus felis proin. Consectetuer
            Dui imperdiet nisi dolor ligula nunc nisl.
          </p>
          <button className="know-more-btn">See More</button>
        </div>
        <div className="right-content">
          <img src="./About.png" alt="Hero" className="hero2-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;

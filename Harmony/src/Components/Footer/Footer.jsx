import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerNav">
          <h2>
          <img src="./lotus.png" alt="logo" width={60} height={60} className="logo" />
          </h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="borderLine" />
        <div className="footerLast">
          <div className="footerText">
            <p>
              Copyright © 2023 Harmony, All rights reserved. Powered
              by BUG SLAYERS.
            </p>
          </div>
          <div className="socialIcons">
            <button>
              <img src="./icons/github.png" alt="" />
            </button>
            <button>
              <img src="./icons/linkedin.png" alt="" />
            </button>
            <button>
              <img src="./icons/facebook-app-symbol.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

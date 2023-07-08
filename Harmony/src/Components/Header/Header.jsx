import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <nav className="navbar">
      <img src="./lotus.png" alt="logo" width={60} height={60} className="logo" />
      <a
        href="#"
        className={`toggle-button ${showMediaIcons ? 'active' : ''}`}
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`h-menu ${showMediaIcons ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <button className="appointment-btn">
              <div className="appointment-btn-left">
                <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
              </div>
              <div className="appointment-btn-right">Book an <br /> appointment</div>
            </button>
          </li>
          <li>
            <img
              src="./loginicon.png"
              alt="logo"
              className="profile-avatar"
              onClick={togglePopUp}
            />
            {showPopUp && (
              <div className="pop-up">
                <button>Login</button>
                <button>Sign Up</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

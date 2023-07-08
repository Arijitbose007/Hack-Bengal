import React from 'react';
import './Demovid.css';
const Demovid = () => {
  return (
    <div className="bodyContainer">
      <div className="bodyText">
        <h5>QUICK MEDITATION</h5>
        <h3>10 Minute Mindfulness Meditation to heal and relax</h3>
        <p>
          This is highly recommended for you to relax and calm yourself before
          proceeding with any other activity on this website. It will only take
          a few minutes.
        </p>
      </div>
      <div className="bodyVideo">
        <embed
          width="50%"
          height="345"
          src="https://www.youtube.com/embed/ZToicYcHIOU"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Demovid;

import React from 'react';
import './Therapy.css';

const Therapy = () => {
  return (
    <section className="therapy">
      <div className="therapy-content">
        <h2 className="therapy-title">WHAT WE OFFER</h2>
        <p className="therapy-description">Get therapies for all your mental <br /> healthcare needs.</p>
        <div className="therapy-catalog">
          <div className="therapy-box">
            <img src="./Audio.png" alt="Audio Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Audio Therapy</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="./Reading.png" alt="Reading Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Reading Therapy</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Meditation.png" alt="Meditation Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Meditation</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Laughing.png" alt="Laughing Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Laughing Therapy</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Yoga.png" alt="Yoga Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Yoga Therapy</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Others.png" alt="Other Therapy" class="f-box-icon"/>
            <h3 class="f-box-heading">Others</h3>
            <p class="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          {/* Add more therapy boxes here */}
        </div>
      </div>
    </section>
  );
};

export default Therapy;

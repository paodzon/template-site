import React from "react";
import "./Herosection.css";

const Herosection = () => {
  return (
    <div className="hero__container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <div className="hero__content">
        <h1>ADVENTURE AWAITS</h1>
        <h3>What are you waiting for?</h3>
        <div className="hero__buttons">
          <button className="btn__primary">Get Started</button>
          <button className="btn__secondary">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

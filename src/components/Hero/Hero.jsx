import React, { useEffect, useState } from "react";
import { heroImages } from "../../data/siteData.js";
import "./Hero.css";

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!heroImages.length) return;

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroImages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="heroMedia" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            src={image}
            alt=""
            key={image}
            className={index === active ? "isActive" : ""}
          />
        ))}
      </div>

      <div className="heroOverlay" />
      <div className="heroBlur" />

      <div className="heroContent">

        <h1 className="heroTitle">
          <span>Capturing the magic of </span>
          <span>your special day.</span>
        </h1>

        <p className="heroDescription">
          At JB Photography, we believe every love story deserves to be told
          beautifully. With an artistic eye and a passion for timeless
          storytelling, we create frames that celebrate love, style, and life’s
          most meaningful occasions.
        </p>

        <div className="heroActions">
          <a href="#portfolio" className="heroBtn heroBtnDark">
            View Portfolio <span>›</span>
          </a>

          <a href="#services" className="heroBtn heroBtnOutline">
            Our Services <span>›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

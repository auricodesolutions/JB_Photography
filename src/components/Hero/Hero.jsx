import React, { useEffect, useState } from "react";
import { heroImages } from "../../data/siteData.js";
import "./Hero.css";

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!heroImages.length) return;

    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroImages.length);
    }, 4000);

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
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      <div className="heroOverlay" />
      <div className="heroBlur" />

      <div className="heroDots" aria-label="Choose hero photograph">
        {heroImages.map((image, index) => (
          <button
            type="button"
            className={index === active ? "isActive" : ""}
            aria-label={`Show photograph ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            key={`dot-${image}`}
          />
        ))}
      </div>

      <div className="heroContent">

        <h1 className="heroTitle">
          <span>Capturing the magic of </span>
          <span>your special day.</span>
        </h1>

        <p className="heroDescription">
          At JB WEDDINGS, we believe every love story deserves to be told
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

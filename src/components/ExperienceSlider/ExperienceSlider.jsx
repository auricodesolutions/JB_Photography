import React from "react";
import {
  experienceMainImages,
  experienceFloatingImages,
} from "../../data/siteData.js";
import "./ExperienceSlider.css";

function ExperienceSlider() {
  return (
    <section className="experience" data-animate>
      <div className="experienceLeft">
        <div className="experienceMainSlider">
          <div className="experienceMainTrack">
            {experienceMainImages.map((image) => (
              <img
                src={image.src}
                alt={image.alt}
                key={`main-${image.src}`}
              />
            ))}
          </div>
        </div>

        <div className="experienceFloatingImage">
          <div className="experienceSliderTrack">
            {experienceFloatingImages.map((image) => (
              <img
                src={image.src}
                alt={image.alt}
                key={`floating-${image.src}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="experienceContent">
        <p className="eyebrow">The JB Experience</p>

        <h2>Experience the art of photography</h2>

        <p>
          Our photography process is designed to be seamless and enjoyable. From
          the moment you book your session to the final delivery, we prioritize
          your needs and preferences.
        </p>

        <p>
          Let us turn your vision into reality with our expert guidance,
          emotional storytelling, and artistic touch.
        </p>

       <div className="experienceActions">
  <a href="#films" className="experienceBtn experienceBtnDark">
    <span className="btnText">Read more</span>
    <span className="btnArrow">›</span>
  </a>

  <a href="#services" className="experienceBtn experienceBtnLight">
    <span className="btnText">Our Services</span>
    <span className="btnArrow">›</span>
  </a>
</div>
      </div>
    </section>
  );
}

export default ExperienceSlider;

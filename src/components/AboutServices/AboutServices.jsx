import React, { useState } from "react";
import { services } from "../../data/siteData.js";
import "../About/About.css";

function AboutServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="aboutServicesNew section" id="services" data-animate>
      <header className="aboutServicesNewHeader">
        <div>
          <p className="eyebrow">The JB WEDDINGS experience</p>
          <h2>Choose your coverage.</h2>
        </div>
        <p>
          Photography and films shaped around your celebration.
        </p>
      </header>

      <div className="aboutServiceAccordion">
        {services.map((service, index) => {
          const isActive = activeService === index;

          return (
            <article
              className={`aboutServiceAccordionCard ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActiveService(index)}
              key={service.title}
            >
              <img src={service.image} alt={service.alt} />
              <div className="aboutServiceAccordionShade" />

              <button
                className="aboutServiceTrigger"
                type="button"
                aria-expanded={isActive}
                onClick={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                <strong>{service.title}</strong>
              </button>

              <div className="aboutServiceExpanded" aria-hidden={!isActive}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Check availability</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AboutServices;

import React, { useState } from "react";
import { about, services } from "../../data/siteData.js";
import "./About.css";

function About() {
  const [activeService, setActiveService] = useState(0);

  return (
    <article className="aboutPage">
      <section
        className="aboutFounder section"
        id="behind-the-lens"
        aria-labelledby="about-title"
        data-animate
      >
        <div className="aboutFounderBackdrop" aria-hidden="true">
          <img src={about.founderImage} alt="" />
        </div>

        <header className="aboutFounderHeading">
          <p className="eyebrow">Meet the founder</p>
          <h1 id="about-title">{about.founderTitle}</h1>
          <div className="aboutFounderLine" aria-hidden="true"><span /><span /></div>
        </header>

        <div className="aboutFounderGrid">
          <figure className="aboutFounderPortrait">
            <img src={about.founderImage} alt={about.founderImageAlt} />
          </figure>

          <div className="aboutFounderCopy">
            <p className="aboutFounderLead">
              <strong>{about.founderName}</strong> {about.founderIntro}
            </p>
            {about.founderText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="aboutFounderSignature">
              <span>{about.founderName}</span>
              <small>{about.founderRole}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutServicesNew section" id="services" data-animate>
        <header className="aboutServicesNewHeader">
          <div>
            <p className="eyebrow">The JB WEDDINGS experience</p>
            <h2>Stories, thoughtfully covered.</h2>
          </div>
          <p>
            Choose a service to discover how we preserve every chapter with
            elegant photography, cinematic motion, and genuine care.
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
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service.title}</strong>
                </button>

                <div className="aboutServiceExpanded" aria-hidden={!isActive}>
                  <p className="eyebrow">JB WEDDINGS / Service {String(index + 1).padStart(2, "0")}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.includes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a href="/#contact">Check availability</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>


      <section className="aboutStorytelling section" data-animate>
        <div className="aboutStorytellingVisual">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={about.storytellingVideoPoster}
            aria-label="Behind the scenes reel from JB WEDDINGS"
          >
            <source src={about.storytellingVideo} type="video/mp4" />
          </video>
        </div>

        <div className="aboutStorytellingCopy">
          <p className="eyebrow">The vision behind every frame</p>
          <h2>
            {about.storytellingTitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="aboutStorytellingText">
            {about.storytellingText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
}

export default About;

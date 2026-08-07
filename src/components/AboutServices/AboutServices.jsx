import React, { useEffect, useRef, useState } from "react";
import { services } from "../../data/siteData.js";
import "../About/About.css";

function AboutServices({ onNavigate }) {
  const [activeService, setActiveService] = useState(0);
  const contentRailRef = useRef(null);

  useEffect(() => {
    const panels = contentRailRef.current?.querySelectorAll(
      ".serviceShowcaseContent",
    ) || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(Number(entry.target.dataset.serviceIndex));
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-47% 0px -47% 0px",
      },
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutServicesNew serviceShowcase" id="services">
      <div className="serviceShowcaseMediaRail" aria-hidden="true">
        <div className="serviceShowcaseMedia">
          {services.map((service, index) => (
            <img
              className={index === activeService ? "is-active" : ""}
              src={service.image}
              alt=""
              loading={index ? "lazy" : "eager"}
              key={service.title}
            />
          ))}
        </div>
      </div>

      <div className="serviceShowcaseContentRail" ref={contentRailRef}>
        {services.map((service, index) => (
          <article
            className="serviceShowcaseContent"
            data-service-index={index}
            key={service.title}
          >
            <img
              className="serviceShowcaseMobileImage"
              src={service.image}
              alt={service.alt}
              loading={index ? "lazy" : "eager"}
            />
            <div className="serviceShowcaseCopy">
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <a
                href={service.href}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(service.page, service.sectionId);
                }}
              >
                {service.cta} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutServices;

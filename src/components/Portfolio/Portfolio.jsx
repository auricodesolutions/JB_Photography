import React, { useEffect, useState } from "react";
import { portfolio } from "../../data/siteData.js";
import "./Portfolio.css";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeProject = activeIndex === null ? null : portfolio[activeIndex];

  const closeGallery = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + portfolio.length) % portfolio.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % portfolio.length,
    );

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="portfolio section" id="portfolio" data-animate>
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Featured Projects</p>
          <h2>Stories worth remembering</h2>
        </div>
        <a href="#portfolioGrid">View Portfolio</a>
      </div>

      <div className="portfolioGrid" id="portfolioGrid">
        {portfolio.map((item, index) => (
          <button
            className={`project${item.layout ? ` project--${item.layout}` : ""}`}
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.title} in gallery`}
            style={{ "--project-delay": `${index * 80}ms` }}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <span className="projectShade" />
            <span className="projectContent">
              <span className="projectMeta">
                <span>{item.tag}</span>
              </span>
              <span className="projectTitle">{item.title}</span>
              <span className="projectExplore">View story <b aria-hidden="true">↗</b></span>
            </span>
          </button>
        ))}
      </div>

      {activeProject && (
        <div
          className="portfolioLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} gallery preview`}
          onClick={closeGallery}
        >
          <button
            className="lightboxClose"
            type="button"
            onClick={closeGallery}
            aria-label="Close gallery"
            autoFocus
          >
            <span />
            <span />
          </button>

          <div className="lightboxStage" onClick={(event) => event.stopPropagation()}>
            <img src={activeProject.image} alt={activeProject.alt} />
            <div className="lightboxCaption">
              <p>{activeProject.tag}</p>
              <h3>{activeProject.title}</h3>
            </div>
          </div>

          <div className="lightboxControls" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={showPrevious} aria-label="Previous photograph">←</button>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(portfolio.length).padStart(2, "0")}</span>
            <button type="button" onClick={showNext} aria-label="Next photograph">→</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;

import React, { useEffect, useState } from "react";
import { portfolio } from "../../data/siteData.js";
import "./Portfolio.css";

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [touchPreviewIndex, setTouchPreviewIndex] = useState(null);

  useEffect(() => {
    portfolio.forEach((item) => {
      const image = new Image();
      image.src = item.hoverImage;
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setHoveredIndex(index);
    }
  };

  const handleTouchPreview = (index) => {
    setHoveredIndex(null);
    setTouchPreviewIndex((current) => (current === index ? null : index));
  };

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
        {portfolio.map((item, index) => {
          const isPreviewing = hoveredIndex === index || touchPreviewIndex === index;

          return (
            <article
              className={`project${item.layout ? ` project--${item.layout}` : ""}`}
              key={item.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchEnd={() => handleTouchPreview(index)}
              data-previewing={touchPreviewIndex === index}
              style={{ "--project-delay": `${index * 80}ms` }}
            >
              <span
                className={`projectImageTrack${isPreviewing ? " is-previewing" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
                <img
                  src={item.hoverImage}
                  alt=""
                  loading="lazy"
                />
              </span>
              <span className="projectShade" />
              <span className="projectContent">
                <span className="projectMeta">{item.tag}</span>
                <span className="projectTitle">{item.title}</span>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

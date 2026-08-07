import React from "react";
import { portfolio } from "../../data/siteData.js";
import "./Portfolio.css";

function Portfolio({ onNavigate }) {
  const portraits = portfolio.filter((item) => item.layout === "portrait");
  const landscapes = portfolio.filter((item) => item.layout !== "portrait");
  const displayedProjects = [
    portraits[0], landscapes[0], landscapes[1], portraits[1],
    landscapes[2], landscapes[3], portraits[2], portraits[3],
    portraits[4], landscapes[4], portraits[5],
  ].filter(Boolean);

  return (
    <section className="portfolio section" id="portfolio" data-animate>
      <div className="sectionHeader">
        <div>
          <h2> Featured Stories</h2>
        </div>
        <a
          href="/portfolio"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("portfolio");
          }}
        >
          View Portfolio
        </a>
      </div>

      <div className="portfolioGrid" id="portfolioGrid">
        {displayedProjects.map((item, index) => (
            <article
              className={`project${item.layout ? ` project--${item.layout}` : ""}`}
              key={item.title}
              tabIndex="0"
              style={{ "--project-delay": `${index * 80}ms` }}
            >
              <span className="projectImage">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </span>
              <span className="projectShade" />
              <span className="projectContent">
                <span className="projectMeta">{item.tag}</span>
                <span className="projectTitle">{item.title}</span>
              </span>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Portfolio;

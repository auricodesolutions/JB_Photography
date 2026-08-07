import React, { useEffect, useRef, useState } from "react";
import { reviews, reviewSection } from "../../data/siteData.js";
import "./JbReviews.css";

function JbReviews({ onNavigate }) {
  const featuredReviews = reviews.slice(0, 6);
  const [secondRowActive, setSecondRowActive] = useState(false);
  const secondRowRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const secondRow = secondRowRef.current;
    if (!secondRow) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setSecondRowActive(entry.isIntersecting),
      { threshold: 0, rootMargin: "-38% 0px -38% 0px" },
    );

    observer.observe(secondRow);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cta = ctaRef.current;
    if (!cta) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let previousTime = 0;
    let targetReveal = 0;
    let targetCopyReveal = 0;
    let currentReveal = 0;
    let currentCopyReveal = 0;

    const applyStyles = (reveal, copyReveal) => {
      const rect = cta.getBoundingClientRect();
      cta.style.setProperty("--cta-opacity", reveal.toFixed(4));
      cta.style.setProperty("--cta-clip", `${((1 - reveal) * 100).toFixed(2)}%`);
      cta.style.setProperty("--cta-y", `${((1 - reveal) * 92).toFixed(2)}px`);
      cta.style.setProperty("--cta-parallax", `${Math.max(-38, rect.top * 0.035).toFixed(2)}px`);
      cta.style.setProperty("--cta-copy-opacity", copyReveal.toFixed(4));
      cta.style.setProperty("--cta-copy-clip", `${((1 - copyReveal) * 100).toFixed(2)}%`);
      cta.style.setProperty("--cta-copy-y", `${((1 - copyReveal) * 72).toFixed(2)}px`);
    };

    const animate = (time) => {
      frameId = 0;

      if (reducedMotion.matches) {
        currentReveal = 1;
        currentCopyReveal = 1;
        applyStyles(1, 1);
        return;
      }

      const elapsed = previousTime ? Math.min(50, time - previousTime) : 16;
      const smoothing = 1 - Math.exp(-elapsed / 230);
      previousTime = time;
      currentReveal += (targetReveal - currentReveal) * smoothing;
      currentCopyReveal += (targetCopyReveal - currentCopyReveal) * smoothing;
      applyStyles(currentReveal, currentCopyReveal);

      if (
        Math.abs(targetReveal - currentReveal) > 0.0005 ||
        Math.abs(targetCopyReveal - currentCopyReveal) > 0.0005
      ) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const measure = () => {
      if (reducedMotion.matches) {
        targetReveal = 1;
        targetCopyReveal = 1;
      } else {
        const rect = cta.getBoundingClientRect();
        const viewport = window.innerHeight || document.documentElement.clientHeight;
        targetReveal = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport * 1.08)));
        targetCopyReveal = Math.min(1, Math.max(0, (targetReveal - 0.3) / 0.56));
      }

      if (!frameId) {
        previousTime = 0;
        frameId = window.requestAnimationFrame(animate);
      }
    };

    applyStyles(0, 0);
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    reducedMotion.addEventListener?.("change", measure);

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      reducedMotion.removeEventListener?.("change", measure);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  if (!featuredReviews.length) return null;

  return (
    <section className="jbReviews" id="reviews" data-animate>
      <div className="jbReviewsHero">
        <img
          className="jbReviewsHeroImage"
          src={reviewSection.backgroundImage}
          alt=""
          aria-hidden="true"
        />
        <div className="jbReviewsHeroShade" />
      </div>

      <div
        className={`jbReviewGrid${secondRowActive ? " isSecondActive" : ""}`}
        aria-label="Reviews from our couples"
      >
        {[featuredReviews.slice(0, 3), featuredReviews.slice(3, 6)].map(
          (row, rowIndex) => (
            <div
              className="jbReviewRow"
              ref={rowIndex === 1 ? secondRowRef : undefined}
              key={`review-row-${rowIndex}`}
            >
              {row.map((review, reviewIndex) => {
                const index = rowIndex * 3 + reviewIndex;

                return (
                  <article
                    className="jbReviewTile"
                    key={`${review.name}-${review.date}`}
                    style={{ "--review-delay": `${index * 80}ms` }}
                  >
                    <img src={review.image} alt={`${review.name} wedding`} />
                    <div className="jbReviewTileShade" />

                    <div className="jbReviewTileContent">
                      <h3>{review.name}</h3>
                      <span className="jbReviewBrand">JB WEDDINGS</span>
                      <p className="jbReviewText">{review.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          ),
        )}
      </div>

      <div className="jbReviewCta" ref={ctaRef}>
        <div className="jbReviewCtaMedia" aria-hidden="true">
          <img src={reviewSection.ctaImage} alt="" />
          <div className="jbReviewCtaShade" />
        </div>

        <div className="jbReviewCtaContent">
          <h2>{reviewSection.ctaTitle}</h2>
          <p>{reviewSection.ctaText}</p>
          <a
            href="/#reviews"
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.("home", "reviews");
            }}
          >
            {reviewSection.ctaButton} <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JbReviews;

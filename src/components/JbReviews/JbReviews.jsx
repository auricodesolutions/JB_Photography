import React, { useEffect, useState } from "react";
import { reviews } from "../../data/siteData.js";
import "./JbReviews.css";

function JbReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = reviews.length;
  const activeReview = reviews[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  const formatNumber = (num) => String(num).padStart(2, "0");

  useEffect(() => {
    if (isPaused || totalReviews <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, totalReviews]);

  if (!activeReview) return null;

  return (
    <section
      className="jbReviews"
      id="reviews"
      data-animate
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="jbReviewsInner">
        <div className="jbReviewImageBox" key={`image-${activeIndex}`}>
          <img
            src={activeReview.image}
            alt={`${activeReview.name} review`}
          />
        </div>

        <div className="jbReviewRight">
          <article className="jbReviewCard" key={`text-${activeIndex}`}>
            <p className="jbReviewDate">{activeReview.date}</p>

            <h2>{activeReview.title}</h2>

            <p className="jbReviewText">{activeReview.text}</p>

            <p className="jbReviewName">{activeReview.name}</p>
          </article>

          <div className="jbReviewControls">
            <button type="button" onClick={goPrev} aria-label="Previous review">
              <span className="controlLine"></span>
              <span className="controlArrow">‹</span>
            </button>

            <div className="jbReviewCounter">
              <strong>{formatNumber(activeIndex + 1)}</strong>
              <span>/</span>
              <strong>{formatNumber(totalReviews)}</strong>
            </div>

            <button type="button" onClick={goNext} aria-label="Next review">
              <span className="controlLine"></span>
              <span className="controlArrow">›</span>
            </button>
          </div>

          <div className={`jbReviewProgress ${isPaused ? "isPaused" : ""}`} key={activeIndex} />
        </div>
      </div>
    </section>
  );
}

export default JbReviews;

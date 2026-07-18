import React, { useEffect, useState } from "react";
import { reviews } from "../../data/siteData.js";
import "./JbReviews.css";

const REVIEW_INTERVAL = 8000;

function JbReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalReviews = reviews.length;
  const activeReview = reviews[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (totalReviews <= 1) return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
    }, REVIEW_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [activeIndex, totalReviews]);

  if (!activeReview) return null;

  return (
    <section
      className="jbReviews"
      id="reviews"
      data-animate
      style={{ "--review-duration": `${REVIEW_INTERVAL}ms` }}
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

            <button type="button" onClick={goNext} aria-label="Next review">
              <span className="controlLine"></span>
              <span className="controlArrow">›</span>
            </button>
          </div>

          <div className="jbReviewProgress" key={activeIndex} />
        </div>
      </div>
    </section>
  );
}

export default JbReviews;

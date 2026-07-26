import React from "react";
import { reviews, reviewSection } from "../../data/siteData.js";
import "./JbReviews.css";

const REVIEWS_PER_ROW = 3;

function JbReviews() {
  const featuredReviews = reviews.slice(0, REVIEWS_PER_ROW * 2);
  const reviewRows = Array.from(
    { length: Math.ceil(featuredReviews.length / REVIEWS_PER_ROW) },
    (_, index) =>
      featuredReviews.slice(
        index * REVIEWS_PER_ROW,
        (index + 1) * REVIEWS_PER_ROW,
      ),
  );

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

      <div className="jbReviewRows" aria-label="Reviews from our couples">
        {reviewRows.map((row, rowIndex) => (
          <div
            className="jbReviewRow"
            key={`review-row-${rowIndex}`}
            style={{ "--review-row": rowIndex }}
          >
            {row.map((review) => (
              <article className="jbReviewTile" key={`${review.name}-${review.date}`}>
                <img src={review.image} alt={`${review.name} wedding`} />
                <div className="jbReviewTileShade" />

                <div className="jbReviewTileContent">
                  <h3>{review.name}</h3>
                  <p className="jbReviewText">{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default JbReviews;

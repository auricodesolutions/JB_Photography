import React, { useEffect, useState } from "react";
import { reviewSection, reviews, site } from "../../data/siteData.js";
import "./ReviewsPage.css";

const initialReview = {
  names: "",
  weddingDate: "",
  rating: "5",
  message: "",
};

function ReviewsPage() {
  const [form, setForm] = useState(initialReview);
  const [photo, setPhoto] = useState({ name: "", preview: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => () => {
    if (photo.preview) URL.revokeObjectURL(photo.preview);
  }, [photo.preview]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const updatePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPhoto({ name: file.name, preview: URL.createObjectURL(file) });
    setSubmitted(false);
  };

  const submitReview = (event) => {
    event.preventDefault();

    const details = [
      "Hello JB WEDDINGS, we would like to share a review.",
      "",
      `Couple: ${form.names}`,
      `Wedding date: ${form.weddingDate}`,
      `Rating: ${form.rating}/5`,
      `Review: ${form.message}`,
      `Selected photo: ${photo.name || "Not selected"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <article className="reviewsPage">
      <section
        className="reviewsPageHero"
        aria-labelledby="reviews-page-title"
        style={{ "--reviews-hero-image": `url("${reviewSection.pageHeroImage}")` }}
      >
        <div className="reviewsPageHeroShade" />

        <div className="reviewsPageHeroCopy">
          <p>JB WEDDINGS</p>
          <h1 id="reviews-page-title">Reviews</h1>
          <span>
            Real stories and kind words from couples who trusted us with their most meaningful moments.
          </span>
          <a className="button" href="#write-review">
            Write a Review <b aria-hidden="true">&#8595;</b>
          </a>
        </div>

      </section>

      <section className="reviewsArchive section" id="all-reviews" aria-labelledby="all-reviews-title" data-animate>
        <header className="reviewsArchiveHeader">
          <h2 id="all-reviews-title">couple experiences</h2>
        </header>

        <div className="reviewsArchiveGrid">
          {reviews.map((review, index) => (
            <article
              className="reviewsArchiveCard"
              style={{ "--review-page-delay": `${index * 70}ms` }}
              key={`${review.name}-${review.date}`}
            >
              <div className="reviewsArchiveCardTop">
                <span className="reviewsArchiveQuote" aria-hidden="true">“</span>
                <img className="reviewsArchiveAvatar" src={review.image} alt={`${review.name} wedding portrait`} loading={index < 3 ? "eager" : "lazy"} />
              </div>
              <div className="reviewsArchiveContent">
                <h3>{review.name}</h3>
                <p>{review.text}</p>
                <span>{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="writeReview" id="write-review" aria-labelledby="write-review-title" data-animate>
        <div className="writeReviewIntro">
          <h2 id="write-review-title">Share your experience.</h2>
          <p>
            A few honest words can help another couple choose with confidence.
          </p>
          <p className="writeReviewDetails">Names · Portrait · Wedding date · Rating · Your story</p>
        </div>

        <form className="writeReviewForm" onSubmit={submitReview}>
          <header className="writeReviewFormHeader">
            <div>
              <span>Couple review</span>
              <h3>Tell us about your experience.</h3>
            </div>
            <label className="writeReviewPortrait">
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={updatePhoto} required />
              {photo.preview ? (
                <img src={photo.preview} alt="Selected couple portrait preview" />
              ) : (
                <span aria-hidden="true">+</span>
              )}
              <small>{photo.name ? "Change photo" : "Add photo"}</small>
            </label>
          </header>
          <div className="writeReviewField">
            <label htmlFor="review-names">Your names *</label>
            <input id="review-names" name="names" type="text" value={form.names} onChange={updateField} placeholder="Both names" autoComplete="name" required />
          </div>

          <div className="writeReviewField">
            <label htmlFor="review-date">Wedding date *</label>
            <input id="review-date" name="weddingDate" type="date" value={form.weddingDate} onChange={updateField} required />
          </div>

          <fieldset className="writeReviewRating">
            <legend>Your rating *</legend>
            <div>
              {["1", "2", "3", "4", "5"].map((rating) => (
                <label key={rating}>
                  <input type="radio" name="rating" value={rating} checked={form.rating === rating} onChange={updateField} />
                  <span aria-hidden="true">&#9733;</span>
                  <small>{rating}</small>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="writeReviewField writeReviewField--wide">
            <label htmlFor="review-message">Your review *</label>
            <textarea id="review-message" name="message" rows="6" value={form.message} onChange={updateField} placeholder="Tell us about your experience with JB WEDDINGS..." required />
          </div>

          <div className="writeReviewFooter">
            <button className="button light" type="submit">
              Send Your Review <b aria-hidden="true">&#8594;</b>
            </button>
            <p>WhatsApp will open with your review. Attach the selected portrait before sending.</p>
          </div>

          {submitted && (
            <p className="writeReviewStatus" role="status">
              Your review is ready in WhatsApp. Send the message to share it with our team.
            </p>
          )}
        </form>
      </section>
    </article>
  );
}

export default ReviewsPage;

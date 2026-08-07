import React, { useState } from "react";
import { bookingPage, services, site } from "../../data/siteData.js";
import "./BookingPage.css";

const initialForm = {
  name: "",
  partnerName: "",
  email: "",
  phone: "",
  service: "",
  eventDate: "",
  venue: "",
  guests: "",
  message: "",
};

function BookingPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const submitBooking = (event) => {
    event.preventDefault();

    const details = [
      "Hello JB WEDDINGS, I would like to reserve a date.",
      "",
      `Name: ${form.name}`,
      `Partner's name: ${form.partnerName || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Event date: ${form.eventDate}`,
      `Venue / location: ${form.venue || "Not confirmed"}`,
      `Expected guests: ${form.guests || "Not confirmed"}`,
      `More details: ${form.message || "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <section className="bookingPage" aria-labelledby="booking-page-title">
      <div className="bookingPageVisual">
        <img src={bookingPage.image} alt={bookingPage.imageAlt} />
        <div className="bookingPageVisualShade" />

        <div className="bookingPageIntro">
          <h1 id="booking-page-title">Let&apos;s create something timeless.</h1>
          <p>
            Tell us a little about your celebration. We&apos;ll check
            availability and personally guide you through the next steps.
          </p>
        </div>

        <div className="bookingPagePromise">
          <span>Personal response</span>
          <span>Tailored coverage</span>
          <span>Sri Lanka &amp; beyond</span>
        </div>
      </div>

      <div className="bookingPageFormPanel">
        <header className="bookingFormHeader">
          <h2>Tell us about your day.</h2>
          <span>Fields marked with * are required.</span>
        </header>

        <form className="bookingForm" onSubmit={submitBooking}>
          <div className="bookingField" style={{ "--field-delay": "80ms" }}>
            <label htmlFor="booking-name">Your name *</label>
            <input id="booking-name" name="name" type="text" value={form.name} onChange={updateField} placeholder="Your full name" autoComplete="name" required />
          </div>

          <div className="bookingField" style={{ "--field-delay": "120ms" }}>
            <label htmlFor="booking-partner">Partner&apos;s name</label>
            <input id="booking-partner" name="partnerName" type="text" value={form.partnerName} onChange={updateField} placeholder="Partner's full name" autoComplete="off" />
          </div>

          <div className="bookingField" style={{ "--field-delay": "160ms" }}>
            <label htmlFor="booking-email">Email address *</label>
            <input id="booking-email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" required />
          </div>

          <div className="bookingField" style={{ "--field-delay": "200ms" }}>
            <label htmlFor="booking-phone">Phone / WhatsApp *</label>
            <input id="booking-phone" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="+94 7X XXX XXXX" autoComplete="tel" required />
          </div>

          <div className="bookingField bookingField--wide" style={{ "--field-delay": "240ms" }}>
            <label htmlFor="booking-service">Coverage you&apos;re interested in *</label>
            <select id="booking-service" name="service" value={form.service} onChange={updateField} required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => (
                <option value={service.title} key={service.title}>{service.title}</option>
              ))}
              <option value="Photography and Videography">Photography and Videography</option>
            </select>
          </div>

          <div className="bookingField" style={{ "--field-delay": "280ms" }}>
            <label htmlFor="booking-date">Event date *</label>
            <input id="booking-date" name="eventDate" type="date" value={form.eventDate} onChange={updateField} required />
          </div>

          <div className="bookingField" style={{ "--field-delay": "320ms" }}>
            <label htmlFor="booking-guests">Expected guests</label>
            <input id="booking-guests" name="guests" type="number" min="1" value={form.guests} onChange={updateField} placeholder="Approximate number" />
          </div>

          <div className="bookingField bookingField--wide" style={{ "--field-delay": "360ms" }}>
            <label htmlFor="booking-venue">Venue / location</label>
            <input id="booking-venue" name="venue" type="text" value={form.venue} onChange={updateField} placeholder="Venue name, city, or undecided" autoComplete="street-address" />
          </div>

          <div className="bookingField bookingField--wide" style={{ "--field-delay": "400ms" }}>
            <label htmlFor="booking-message">Tell us more</label>
            <textarea id="booking-message" name="message" rows="5" value={form.message} onChange={updateField} placeholder="Share your plans, traditions, schedule, or anything important to you." />
          </div>

          <div className="bookingFormFooter">
            <button type="submit">
              <span>Send booking inquiry</span>
              <b aria-hidden="true">→</b>
            </button>
            <p>Your details will open in WhatsApp, ready to send directly to JB WEDDINGS.</p>
          </div>

          {submitted && (
            <p className="bookingFormStatus" role="status">
              Your inquiry is ready in WhatsApp. Send the message to complete your request.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default BookingPage;

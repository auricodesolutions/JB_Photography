import React from "react";
import { site } from "../../data/siteData.js";
import "./Booking.css";

function Booking() {
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);

  return (
    <section className="booking section" id="contact" data-animate>
      <div className="bookingInfo">
        <p className="eyebrow">Booking</p>
        <h2>Tell us about your date.</h2>
        <p>
          Share a few details about your celebration and we’ll get back to you
          with availability, ideas, and a quotation tailored to your day.
        </p>

        <div className="contactCards">
          <a href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
            WhatsApp <span>{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`}>
            Email <span>{site.email}</span>
          </a>
          <span>
            Location <strong>{site.location}</strong>
          </span>
        </div>
      </div>

      <form className="bookingForm" onSubmit={(event) => event.preventDefault()}>
        <div className="bookingFormHeader">
          <span>Start your inquiry</span>
          <h3>Let’s create something timeless.</h3>
          <p>Fields marked with * are required.</p>
        </div>

        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" type="text" placeholder="e.g. Kasun & Nethmi" autoComplete="name" required />
        </label>
        <label>
          Event type <span aria-hidden="true">*</span>
          <select name="eventType" defaultValue="" required>
            <option value="" disabled>Choose your event</option>
            <option>Wedding</option>
            <option>Pre-shoot</option>
            <option>Engagement</option>
            <option>Homecoming</option>
            <option>Event</option>
          </select>
        </label>
        <label>
          Event date <span aria-hidden="true">*</span>
          <input name="date" type="date" required />
        </label>
        <label>
          Phone / WhatsApp <span aria-hidden="true">*</span>
          <input name="phone" type="tel" placeholder="e.g. +94 77 123 4567" autoComplete="tel" required />
        </label>
        <label className="fullField">
          Tell us about your plans
          <textarea name="message" placeholder="Venue, preferred coverage, photography style, or anything else we should know…" />
        </label>
        <button className="formButton" type="submit">Send Inquiry <span aria-hidden="true">→</span></button>
        <p className="formNote">We usually reply within one business day. Your details stay private.</p>
      </form>
    </section>
  );
}

export default Booking;

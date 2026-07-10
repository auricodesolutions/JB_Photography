import React from "react";
import { site } from "../../data/siteData.js";
import "./Booking.css";

function Booking() {
  const whatsappMessage = encodeURIComponent(
    "Hello JB Photography, I would like to ask for a wedding/event quotation.",
  );

  return (
    <section className="booking section" id="contact" data-animate>
      <div className="bookingInfo">
        <p className="eyebrow">Booking</p>
        <h2>Tell us about your date.</h2>
        <p>
          Share the event type, date, location, and the style you like. This
          form is frontend-ready and can be connected to PHP, Node.js, EmailJS,
          or any backend later.
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

      <form className="bookingForm">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Event type
          <select defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Wedding</option>
            <option>Pre-shoot</option>
            <option>Engagement</option>
            <option>Homecoming</option>
            <option>Event</option>
          </select>
        </label>
        <label>
          Date
          <input type="date" />
        </label>
        <label>
          Phone / WhatsApp
          <input type="tel" placeholder="Your contact number" />
        </label>
        <label className="fullField">
          Message
          <textarea placeholder="Location, package idea, and special notes" />
        </label>
        <button className="formButton" type="button">Send Inquiry</button>
      </form>
    </section>
  );
}

export default Booking;

import React from "react";
import { site, socialLinks } from "../../data/siteData.js";
import "./Booking.css";

function ContactIcon({ name }) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4.2-1.4-1.1 2.1a13.2 13.2 0 0 1-9.4-9.4l2.1-1.1L7 3Z" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="isFilled" cx="17.5" cy="6.5" r="1" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" />
        <path className="isFilled" d="m10 15 5-3-5-3v6Z" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 3v11.2a4.7 4.7 0 1 1-4-4.6" />
        <path d="M15 3c.7 3.2 2.5 4.8 5 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path className="isFilled" d="M14 8h4V3h-4c-4 0-6 2.4-6 6v3H4v5h4v4h5v-4h4l1-5h-5V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function Booking() {
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      className="simpleContact section"
      id="contact"
      aria-labelledby="contact-title"
      data-animate
    >
      <header className="simpleContactHeader">
        <h2 id="contact-title">Let&apos;s stay connected.</h2>
        <p>
          Have a question about your wedding photography or films? Reach out
          directly and the JB WEDDINGS team will be happy to help.
        </p>
      </header>

      <div className="simpleContactDetails">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <span className="simpleContactIcon"><ContactIcon name="phone" /></span>
          <span>
            <small>Phone / WhatsApp</small>
            <strong>{site.phone}</strong>
          </span>
          <i aria-hidden="true">↗</i>
        </a>

        <a href={`mailto:${site.email}`}>
          <span className="simpleContactIcon"><ContactIcon name="email" /></span>
          <span>
            <small>Email</small>
            <strong>{site.email}</strong>
          </span>
          <i aria-hidden="true">↗</i>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="simpleContactIcon"><ContactIcon name="location" /></span>
          <span>
            <small>Based in</small>
            <strong>{site.location}</strong>
          </span>
          <i aria-hidden="true">↗</i>
        </a>
      </div>

      <div className="simpleContactSocial">
        <div>
          <p>Follow our latest stories</p>
          <span>Photography, wedding films, previews and behind-the-scenes moments.</span>
        </div>

        <nav aria-label="JB WEDDINGS social media">
          {socialLinks.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
              key={social.name}
            >
              <SocialIcon name={social.name} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Booking;

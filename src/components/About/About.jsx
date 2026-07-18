import React from "react";
import { about } from "../../data/siteData.js";
import "./About.css";

function About() {
  return (
    <article className="aboutPage">
      <section
        className="aboutFounder section"
        id="behind-the-lens"
        aria-labelledby="about-title"
        data-animate
      >
        <div className="aboutFounderBackdrop" aria-hidden="true">
          <img src={about.founderImage} alt="" />
        </div>

        <header className="aboutFounderHeading">
          <p className="eyebrow">Meet the founder</p>
          <h1 id="about-title">{about.founderTitle}</h1>
          <div className="aboutFounderLine" aria-hidden="true"><span /><span /></div>
        </header>

        <div className="aboutFounderGrid">
          <figure className="aboutFounderPortrait">
            <img src={about.founderImage} alt={about.founderImageAlt} />
          </figure>

          <div className="aboutFounderCopy">
            <p className="aboutFounderLead">
              <strong>{about.founderName}</strong> {about.founderIntro}
            </p>
            {about.founderText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="aboutFounderSignature">
              <span>{about.founderName}</span>
              <small>{about.founderRole}</small>
            </div>
          </div>
        </div>
      </section>

      <section
        className="aboutWhy section"
        aria-labelledby="about-why-title"
        data-animate
      >
        <div className="aboutWhyIntro">
          <p className="eyebrow">Why choose JB WEDDINGS</p>
          <h2 id="about-why-title">Your day, handled with care.</h2>
          <p>
            A calm, personal experience and photographs that bring every
            feeling back.
          </p>
        </div>

        <figure className="aboutWhyVisual">
          <img src={about.image} alt={about.imageAlt} />
        </figure>

        <div className="aboutWhyReasons">
          <article>
            <h3>Calm guidance</h3>
            <p>Natural direction when you need it, space to be yourselves when you do not.</p>
          </article>
          <article>
            <h3>Real emotion</h3>
            <p>Honest moments and meaningful details photographed without forcing the story.</p>
          </article>
          <article>
            <h3>One creative team</h3>
            <p>Photography and cinematic films shaped with one consistent visual approach.</p>
          </article>
          <article>
            <h3>Made to last</h3>
            <p>Refined, timeless imagery created to remain meaningful for generations.</p>
          </article>
        </div>
      </section>

      <section className="aboutStorytelling section" data-animate>
        <div className="aboutStorytellingVisual">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={about.storytellingVideoPoster}
            aria-label="Behind the scenes reel from JB WEDDINGS"
          >
            <source src={about.storytellingVideo} type="video/mp4" />
          </video>
        </div>

        <div className="aboutStorytellingCopy">
          <p className="eyebrow">The vision behind every frame</p>
          <h2>
            {about.storytellingTitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="aboutStorytellingText">
            {about.storytellingText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
}

export default About;

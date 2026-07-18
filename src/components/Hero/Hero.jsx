import React, { useEffect, useRef, useState } from "react";
import { heroImages } from "../../data/siteData.js";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!heroImages.length) return;

    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const images = heroRef.current?.querySelectorAll(".heroMedia img") || [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const touchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;
    const smoothing = touchDevice ? 72 : 90;
    let frameId = 0;
    let lastTime = 0;
    let targetProgress = 0;
    let renderedProgress = 0;
    let initialized = false;

    const readProgress = () => {
      const hero = heroRef.current;
      if (!hero) return 0;

      const stageHeight = window.innerHeight;
      const scrollDistance = Math.max(hero.offsetHeight - stageHeight, 1);
      return Math.min(
        Math.max(-hero.getBoundingClientRect().top / scrollDistance, 0),
        1,
      );
    };

    const paintSlides = (progress) => {
      const slideProgress = progress * (heroImages.length - 1);

      images.forEach((image, index) => {
        image.style.setProperty("--slide-y", `${(index - slideProgress) * 100}%`);
      });

      const nextActive = Math.min(
        heroImages.length - 1,
        Math.round(slideProgress),
      );
      setActive((current) => (current === nextActive ? current : nextActive));
    };

    const animateSlides = (time) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 34) : 16;
      lastTime = time;
      const difference = targetProgress - renderedProgress;
      const blend = reduceMotion ? 1 : 1 - Math.exp(-elapsed / smoothing);

      renderedProgress += difference * blend;

      if (Math.abs(difference) < 0.0001) {
        renderedProgress = targetProgress;
      }

      paintSlides(renderedProgress);

      if (renderedProgress !== targetProgress) {
        frameId = window.requestAnimationFrame(animateSlides);
      } else {
        frameId = 0;
        lastTime = 0;
      }
    };

    const requestUpdate = (reset = false) => {
      targetProgress = readProgress();

      if (!initialized || reset || reduceMotion) {
        initialized = true;
        renderedProgress = targetProgress;
        paintSlides(renderedProgress);
      }

      if (!frameId && renderedProgress !== targetProgress) {
        frameId = window.requestAnimationFrame(animateSlides);
      }
    };

    const handleScroll = () => requestUpdate();
    const handleResize = () => requestUpdate(true);

    requestUpdate(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToSlide = (index) => {
    const hero = heroRef.current;
    if (!hero) return;

    const heroTop = hero.getBoundingClientRect().top + window.scrollY;
    const slideDistance = (hero.offsetHeight - window.innerHeight) /
      Math.max(heroImages.length - 1, 1);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: heroTop + slideDistance * index,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      style={{ "--hero-slides": heroImages.length }}
    >
      <div className="heroStage">
      <div className="heroMedia" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            src={image}
            alt=""
            key={image}
            style={{ "--slide-y": `${index * 100}%` }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      <div className="heroOverlay" />
      <div className="heroBlur" />

      <div className="heroDots" aria-label="Choose hero photograph">
        {heroImages.map((image, index) => (
          <button
            type="button"
            className={index === active ? "isActive" : ""}
            aria-label={`Show photograph ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => scrollToSlide(index)}
            key={`dot-${image}`}
          />
        ))}
      </div>

      <div className="heroContent">
        <p className="heroEyebrow">Wedding Photography</p>

        <h1 className="heroTitle">
          <span>Wedding photographs</span>
          <span>that feel like you.</span>
        </h1>

        <p className="heroDescription">
          Honest moments, beautiful details, and memories you can return to
          for a lifetime.
        </p>

        <div className="heroActions">
          <a href="#portfolio" className="heroBtn heroBtnDark">
            View Gallery <span>›</span>
          </a>

          <a href="#contact" className="heroBtn heroBtnOutline">
            Check Availability <span>›</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;

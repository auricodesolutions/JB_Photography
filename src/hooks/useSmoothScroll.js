import { useCallback, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const referenceEase = (progress) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * progress));

export default function useSmoothScroll() {
  const lenisRef = useRef(null);

  const scrollTo = useCallback((target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target);
      return;
    }

    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const touchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    );

    // Native scrolling is more responsive and reliable on touch devices.
    if (reducedMotion.matches || touchDevice.matches) return undefined;

    const root = document.documentElement;
    const lenis = new Lenis({
      duration: 1.2,
      easing: referenceEase,
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      direction: "vertical",
      gestureDirection: "vertical",
    });
    let frameId = 0;

    lenisRef.current = lenis;
    root.classList.add("lenis", "lenis-smooth");

    const animate = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(animate);
    };

    const syncMenuLock = () => {
      if (document.body.classList.contains("menuLocked")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const menuObserver = new MutationObserver(syncMenuLock);
    menuObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    syncMenuLock();
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      menuObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      root.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
    };
  }, []);

  return scrollTo;
}

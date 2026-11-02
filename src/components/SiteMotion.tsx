"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = document.querySelectorAll("[data-reveal]");
    const heroLines = document.querySelectorAll("[data-hero-line]");

    if (reduceMotion) {
      if (revealElements.length) gsap.set(revealElements, { clearProps: "all" });
      if (heroLines.length) gsap.set(heroLines, { clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      if (heroLines.length) {
        gsap.fromTo(
          heroLines,
          { y: 54 },
          {
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.08,
          },
        );
      }

      if (document.querySelector(".portrait-hero")) {
        gsap.to(".hero-type span:first-child", {
          xPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: ".portrait-hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-type span:last-child", {
          xPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: ".portrait-hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".portrait-wrap", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: ".portrait-hero", start: "top top", end: "bottom top", scrub: true },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 32 },
          {
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, [pathname]);

  return null;
}

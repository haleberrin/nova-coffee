"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "/gallery/nova-01.jpg",
    alt: "NOVA Coffee atmosferi",
    className: "gallery-image-one",
  },
  {
    src: "/gallery/nova-02.jpg",
    alt: "NOVA Coffee kahve sunumu",
    className: "gallery-image-two",
  },
  {
    src: "/gallery/nova-03.jpg",
    alt: "NOVA Coffee detay",
    className: "gallery-image-three",
  },
  {
    src: "/gallery/nova-04.jpg",
    alt: "NOVA Coffee mekan",
    className: "gallery-image-four",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
  
    if (!section) return;
  
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 701px)", () => {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(
          ".gallery-item"
        );
  
        const movements = [-100, 90, -70, 60];
  
        // PARALLAX
        items.forEach((item, index) => {
          gsap.to(item, {
            y: movements[index],
            ease: "none",
  
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        });
  
        // BAŞLIK REVEAL
        gsap.from(".gallery-heading h2", {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
  
          scrollTrigger: {
            trigger: ".gallery-heading",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
  
        // GÖRSEL REVEAL
        gsap.utils
          .toArray<HTMLElement>(".gallery-image-inner")
          .forEach((image) => {
            gsap.from(image, {
              opacity: 0,
              scale: 1.08,
              duration: 1.4,
              ease: "power2.out",
  
              scrollTrigger: {
                trigger: image,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          });
// KAPANIŞ YAZISI ANİMASYONU

const endTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery-end",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

endTimeline
  .from(".gallery-end > p", {
    opacity: 0,
    y: 25,
    duration: 0.7,
    ease: "power2.out",
  })
  .from(
    ".gallery-end h3",
    {
      opacity: 0,
      y: 90,
      duration: 1.3,
      ease: "power3.out",
    },
    "-=0.3"
  );

      }, section);
  
      return () => ctx.revert();
    });
  
    return () => mm.revert();
  }, []);

  
  return (
    <section
      ref={sectionRef}
      className="gallery-section"
      id="gallery"
    >
      <div className="gallery-heading">
        <div className="gallery-kicker">
          <span>05</span>
          <p>NOVA ATMOSFER</p>
        </div>

        <h2>
          Kahveden
          <span>daha fazlası.</span>
        </h2>

        <p className="gallery-description">
          Bazen iyi bir kahve,
          güzel bir sohbet ve
          yavaşlayan birkaç dakika yeter.
        </p>
      </div>

      <div className="gallery-stage">
        {galleryImages.map((image, index) => (
          <figure
            className={`gallery-item ${image.className}`}
            key={image.src}
          >
            <div className="gallery-image-inner">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 90vw, 50vw"
                className="gallery-photo"
              />
            </div>

            <figcaption>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>NOVA / MOMENTS</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="gallery-end">
        <p>YAVAŞLA</p>

        <h3>
          Anın
          <span>tadını çıkar.</span>
        </h3>
      </div>
    </section>
  );
}
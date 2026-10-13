"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    number: "01",
    category: "KAHVELER",
    title: "İyi kahve,\ngünün ritmini değiştirir.",
    image: "/menu/coffee.jpg",
    className: "menu-coffee",
  },
  {
    number: "02",
    category: "TATLILAR",
    title: "Biraz tatlı,\nbiraz mutluluk.",
    image: "/menu/dessert.jpg",
    className: "menu-dessert",
  },
  {
    number: "03",
    category: "KAHVALTI",
    title: "Güne güzel\nbir başlangıç.",
    image: "/menu/breakfast.jpg",
    className: "menu-breakfast",
  },
];

export default function MenuShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
  
    if (!section || !track) return;
  
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 901px)", () => {
      const ctx = gsap.context(() => {
        const getScrollAmount = () =>
          -(track.scrollWidth - window.innerWidth);
  
        const tween = gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
  
        const cards = gsap.utils.toArray<HTMLElement>(
          ".menu-card"
        );
  
        cards.forEach((card) => {
          const image =
            card.querySelector<HTMLElement>(".menu-image-wrap");
  
          const category =
            card.querySelector<HTMLElement>(
              ".menu-card-content > p"
            );
  
          const titleLines =
            card.querySelectorAll<HTMLElement>(
              ".menu-card-content h3 span"
            );
  
          const link =
            card.querySelector<HTMLElement>(
              ".menu-card-content > a"
            );
  
          if (image) {
            gsap.fromTo(
              image,
              { xPercent: -7, scale: 1.08 },
              {
                xPercent: 7,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );
          }
  
          const textTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 78%",
              end: "left 38%",
              scrub: 1,
            },
          });
  
          if (category) {
            textTl.fromTo(
              category,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power2.out",
              }
            );
          }
  
          if (titleLines.length) {
            textTl.fromTo(
              titleLines,
              { opacity: 0, y: 65 },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.12,
                ease: "power3.out",
              },
              "-=0.08"
            );
          }
  
          if (link) {
            textTl.fromTo(
              link,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              },
              "-=0.18"
            );
          }
        });
      }, section);
  
      return () => ctx.revert();
    });
  
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="menu-showcase"
      id="menu"
    >
      {/* SABİT ÜST BAŞLIK */}

      <div className="menu-heading">
        <div>
          <span className="menu-section-number">03</span>

          <p className="menu-kicker">
            NOVA MENÜ
          </p>
        </div>

        <h2>
          Favorilerini
          <span>keşfet.</span>
        </h2>
      </div>

      {/* YATAY HAREKET EDEN ALAN */}

      <div ref={trackRef} className="menu-track">
        {/* INTRO PANEL */}

        <article className="menu-intro-panel">
          <div className="menu-intro-copy">
            <p>
              KAHVE • FIRIN • KAHVALTI
            </p>

            <h3>
              Her an için
              <span>bir lezzet.</span>
            </h3>

            <div className="menu-scroll-hint">
              <span>KEŞFET</span>

              <div className="menu-scroll-line" />

              <span>→</span>
            </div>
          </div>
        </article>

        {/* MENÜ KARTLARI */}

        {menuItems.map((item) => (
          <article
            key={item.number}
            className={`menu-card ${item.className}`}
          >
            <div className="menu-card-number">
              {item.number}
            </div>

            <div className="menu-card-visual">
  <div className="menu-image-wrap">
    <Image
      src={item.image}
      alt={`NOVA ${item.category}`}
      fill
      sizes="(max-width: 900px) 70vw, 45vw"
      className="menu-image"
    />
  </div>

  <div className="menu-image-overlay" />

  <span className="menu-image-label">
    {item.category}
  </span>
</div>

            <div className="menu-card-content">
              <p>{item.category}</p>

              <h3>
                {item.title
                  .split("\n")
                  .map((line) => (
                    <span key={line}>
                      {line}
                    </span>
                  ))}
              </h3>

              <a href="/menu">
                MENÜYÜ İNCELE
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}

        {/* SON PANEL */}

        <article className="menu-end-panel">
          <p>NOVA COFFEE</p>

          <h3>
            Bugün ne
            <span>seçerdin?</span>
          </h3>

          <a href="/menu">
            TÜM MENÜYÜ GÖR
            <span>→</span>
          </a>
        </article>
      </div>
    </section>
  );
}
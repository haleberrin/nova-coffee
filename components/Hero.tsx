"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoffeeScene from "./CoffeeScene";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
  
    const ctx = gsap.context(() => {
      // Başlangıç durumları
      gsap.set(".hero-logo", {
        y: -25,
        opacity: 0,
      });

      gsap.set(".hero-nav-link", {
        y: -20,
        opacity: 0,
      });

      gsap.set(".hero-nav-button", {
        y: -20,
        opacity: 0,
      });

      gsap.set(".hero-eyebrow", {
        y: 20,
        opacity: 0,
      });

      gsap.set(".hero-title-line", {
        y: 90,
        opacity: 0,
        rotationX: -25,
      });

      gsap.set(".hero-description", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".hero-actions", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".hero-index", {
        opacity: 0,
        x: -20,
      });

      gsap.set(".scroll-label", {
        opacity: 0,
      });

      const tl = gsap.timeline({
        delay: 0.15,
        defaults: {
          ease: "power3.out",
        },
      });

      // Logo
      tl.to(".hero-logo", {
        y: 0,
        opacity: 1,
        duration: 0.8,
      });

      // Menü linkleri
      tl.to(
        ".hero-nav-link",
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
        },
        "-=0.55"
      );

      // Menü butonu
      tl.to(
        ".hero-nav-button",
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "-=0.55"
      );

      // Küçük üst yazı
      tl.to(
        ".hero-eyebrow",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.25"
      );

      // Ana başlık
      tl.to(
        ".hero-title-line",
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.13,
          ease: "power4.out",
        },
        "-=0.35"
      );

      // Açıklama
      tl.to(
        ".hero-description",
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
        },
        "-=0.45"
      );

      // Butonlar
      tl.to(
        ".hero-actions",
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
        },
        "-=0.5"
      );

      // Alt detaylar
      tl.to(
        ".hero-index",
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.35"
      );

      tl.to(
        ".scroll-label",
        {
          opacity: 0.4,
          duration: 0.7,
        },
        "<"
      );

      // ========================================
// SCROLL ANIMATION
// ========================================

mm.add("(min-width: 901px)", () => {
const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "+=1400",
    scrub: 1.2,
    pin: true,
    anticipatePin: 1,

    // Öğrenirken görmek istersen geçici olarak:
    // markers: true,
  },
});

// Sol metin sahneden çıkıyor
scrollTl.to(
  ".hero-copy",
  {
    x: -160,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  0
);

// Navbar yavaşça kayboluyor
scrollTl.to(
  ".navbar",
  {
    y: -70,
    opacity: 0,
    duration: 0.7,
    ease: "power2.inOut",
  },
  0
);

// Küçük alt detaylar
scrollTl.to(
  ".hero-index",
  {
    x: -60,
    opacity: 0,
    duration: 0.5,
  },
  0
);

scrollTl.to(
  ".scroll-label",
  {
    opacity: 0,
    duration: 0.3,
  },
  0
);

// Kahve splash büyüyor
scrollTl.to(
  ".coffee-splash-scroll",
  {
    scale: 1.45,
    rotation: 7,
    x: 70,
    y: 50,
    duration: 1,
    ease: "none",
  },
  0
);

// Fincan kameraya yaklaşıyor
scrollTl.to(
  ".cup-scroll",
  {
    scale: 1.55,
    x: 160,
    y: 170,
    rotation: 7,
    duration: 1,
    ease: "none",
  },
  0
);

// Süt yukarı ve dışarı çıkıyor
scrollTl.to(
  ".milk-splash-scroll",
  {
    x: 150,
    y: -250,
    rotation: 35,
    opacity: 0,
    duration: 0.8,
    ease: "none",
  },
  0
);

// Yaprak dışarı süzülüyor
scrollTl.to(
  ".leaf-scroll",
  {
    x: 230,
    y: 150,
    rotation: 20,
    opacity: 0,
    duration: 0.9,
    ease: "none",
  },
  0
);

// Çekirdekler farklı yönlere dağılıyor
scrollTl.to(
  ".bean-one-scroll",
  {
    x: -260,
    y: -180,
    rotation: -150,
    opacity: 0,
    duration: 0.8,
  },
  0
);

scrollTl.to(
  ".bean-two-scroll",
  {
    x: 260,
    y: -180,
    rotation: 160,
    opacity: 0,
    duration: 0.8,
  },
  0
);

scrollTl.to(
  ".bean-three-scroll",
  {
    x: 300,
    y: 150,
    rotation: 150,
    opacity: 0,
    duration: 0.8,
  },
  0
);

scrollTl.to(
  ".bean-four-scroll",
  {
    x: -350,
    y: 260,
    scale: 1.8,
    opacity: 0,
    duration: 0.8,
  },
  0
);

// En son bütün görsel sahne hafifçe kayboluyor
scrollTl.to(
  ".hero-visual",
  {
    opacity: 0,
    duration: 0.18,
  },
  0.9
);
// ========================================
// STORY REVEAL
// ========================================

// Story başlangıçta biraz aşağıda
gsap.set(".story-panel", {
  yPercent: 32,
  borderRadius: "40px 40px 0 0",
});

// Story içeriğini başlangıçta gizle
gsap.set(".story-number", {
  opacity: 0,
  y: 30,
});

gsap.set(".story-eyebrow", {
  opacity: 0,
  y: 30,
});

gsap.set(".story-left h2", {
  opacity: 0,
  y: 100,
});

gsap.set(".story-right", {
  opacity: 0,
  y: 80,
});

gsap.set(".story-quote span", {
  opacity: 0,
  y: 100,
});

// Krem panel yukarı yaklaşıyor
scrollTl.to(
  ".story-panel",
  {
    yPercent: 0,
    borderRadius: "0px 0px 0px 0px",
    duration: 0.5,
    ease: "power3.inOut",
  },
  0.52
);

// 02
scrollTl.to(
  ".story-number",
  {
    opacity: 0.45,
    y: 0,
    duration: 0.25,
  },
  0.73
);

// NOVA'NIN HİKAYESİ
scrollTl.to(
  ".story-eyebrow",
  {
    opacity: 1,
    y: 0,
    duration: 0.3,
  },
  0.76
);

// Büyük başlık
scrollTl.to(
  ".story-left h2",
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    ease: "power3.out",
  },
  0.79
);

// Sağ açıklamalar
scrollTl.to(
  ".story-right",
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
  },
  0.84
);

// Arka plandaki büyük SLOW MOMENTS
scrollTl.to(
  ".story-quote span",
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    stagger: 0.06,
    ease: "power3.out",
  },
  0.88
);
});
mm.add("(max-width: 900px)", () => {
  // Story mobilde normal akışta ve görünür kalacak
  gsap.set(
    [
      ".story-panel",
      ".story-number",
      ".story-eyebrow",
      ".story-left h2",
      ".story-right",
      ".story-quote span",
    ],
    {
      clearProps: "all",
    }
  );

  // Mobilde fincan hafifçe kameraya yaklaşır
  gsap.fromTo(
    ".cup-scroll",
    {
      scale: 1,
      y: 0,
    },
    {
      scale: 1.4,
      y: -90,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "top -300px",
        scrub: 0.5,
      },
    }
  );
// Mobilde kahve ve süt katmanlarına hafif parallax
gsap.to(".coffee-splash-scroll", {
  scale: 1.12,
  x: 25,
  y: -20,
  ease: "none",
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "top -300px",
    scrub: 0.5,
  },
});

gsap.to(".milk-splash-scroll", {
  x: -20,
  y: -35,
  rotation: -5,
  ease: "none",
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "top -300px",
    scrub: 0.5,
  },
});
});
});

return () => {
  mm.revert();
  ctx.revert();
};
  }, []);

  return (
    <main ref={heroRef} className="hero">
      <nav className="navbar">
        <a href="#" className="logo hero-logo">
          <span className="logo-main">NOVA</span>
          <span className="logo-small">COFFEE</span>
        </a>

        <div className="nav-links">
          <a href="#story" className="hero-nav-link">
            Hikayemiz
          </a>

          <a href="#menu" className="hero-nav-link">
            Menü
          </a>

          <a href="#gallery" className="hero-nav-link">
            Galeri
          </a>

          <a href="#location" className="hero-nav-link">
            Konum
          </a>
        </div>

        <a
          href="#menu"
          className="nav-button hero-nav-button"
        >
          Menüyü Gör
        </a>
      </nav>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            KAHVE <span>•</span>
            FIRIN <span>•</span>
            GÜZEL ANLAR
          </p>

          <h1>
            <span className="hero-title-line">
              Yavaşla.
            </span>

            <span className="hero-title-line">
              Anın
            </span>

            <span className="italic hero-title-line">
              tadını çıkar.
            </span>
          </h1>

          <p className="hero-description">
            İyi kahve, taze lezzetler ve
            <br />
            kendinizi iyi hissedeceğiniz bir yer.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-button">
              Menümüzü Keşfet
              <span>→</span>
            </a>

            <a href="#story" className="text-button">
              <span className="play">▶</span>

              <span>
                HİKAYEMİZİ
                <br />
                KEŞFET
              </span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <CoffeeScene />
        </div>
      </div>

      <div className="hero-index">
        <span>01</span>
        <div />
        <span>03</span>
      </div>

      <p className="scroll-label">
        KEŞFETMEK İÇİN KAYDIR
      </p>
    </main>
  );
}
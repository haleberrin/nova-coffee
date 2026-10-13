"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function CoffeeScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;

    if (!scene) return;

    let handleMouseMove: ((event: MouseEvent) => void) | null = null;

    const ctx = gsap.context(() => {
      // ========================================
      // 1 — INTRO BAŞLANGIÇ DURUMLARI
      // İç elemanlar mouse + intro için.
      // Dış *-scroll wrapper'larına dokunmuyoruz.
      // ========================================

      gsap.set(".cup-parallax", {
        y: 300,
        scale: 0.35,
        rotation: -18,
        opacity: 0,
      });

      gsap.set(".coffee-splash-parallax", {
        scale: 0,
        rotation: -35,
        opacity: 0,
      });

      gsap.set(".milk-splash-parallax", {
        y: -350,
        x: 180,
        scale: 0.3,
        rotation: 40,
        opacity: 0,
      });

      gsap.set(".leaf-parallax", {
        x: 300,
        y: 160,
        scale: 0.4,
        rotation: 80,
        opacity: 0,
      });

      gsap.set(".bean-one-parallax", {
        x: -450,
        y: -250,
        scale: 0.2,
        rotation: -360,
        opacity: 0,
      });

      gsap.set(".bean-two-parallax", {
        x: 400,
        y: -300,
        scale: 0.15,
        rotation: 360,
        opacity: 0,
      });

      gsap.set(".bean-three-parallax", {
        x: 450,
        y: 250,
        scale: 0.2,
        rotation: 360,
        opacity: 0,
      });

      gsap.set(".bean-four-parallax", {
        x: -500,
        y: 350,
        scale: 0.25,
        rotation: -360,
        opacity: 0,
      });

      // ========================================
      // 2 — INTRO TIMELINE
      // ========================================

      const intro = gsap.timeline({
        delay: 0.25,
      });

      intro.to(".cup-parallax", {
        y: 0,
        scale: 1.08,
        rotation: 2,
        opacity: 1,
        duration: 1.05,
        ease: "back.out(1.4)",
      });

      intro.to(".cup-parallax", {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      intro.to(
        ".coffee-splash-parallax",
        {
          scale: 1.12,
          rotation: -3,
          opacity: 0.9,
          duration: 0.75,
          ease: "back.out(1.7)",
        },
        0.55
      );

      intro.to(
        ".coffee-splash-parallax",
        {
          scale: 1,
          rotation: -6,
          duration: 0.35,
          ease: "power2.out",
        },
        1.25
      );

      intro.to(
        ".milk-splash-parallax",
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 17,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        0.65
      );

      intro.to(
        ".bean-one-parallax",
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: -32,
          opacity: 1,
          duration: 1.25,
          ease: "power4.out",
        },
        0.65
      );

      intro.to(
        ".bean-two-parallax",
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 42,
          opacity: 1,
          duration: 1.35,
          ease: "power4.out",
        },
        0.72
      );

      intro.to(
        ".bean-three-parallax",
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: -20,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
        },
        0.78
      );

      intro.to(
        ".bean-four-parallax",
        {
          x: 0,
          y: 0,
          scale: 1.2,
          rotation: 28,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
        },
        0.6
      );

      intro.to(
        ".leaf-parallax",
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: -31,
          opacity: 1,
          duration: 1.45,
          ease: "power3.out",
        },
        0.75
      );

      // ========================================
     // ========================================
// 3 — MOUSE PARALLAX (OPTIMIZED)
// ========================================

const layers = [
  { selector: ".cup-parallax", x: 18, y: 13, duration: 0.8 },
  { selector: ".coffee-splash-parallax", x: -12, y: -8, duration: 1.1 },
  { selector: ".milk-splash-parallax", x: 24, y: 18, duration: 0.9 },
  { selector: ".leaf-parallax", x: 35, y: 26, duration: 0.9 },
  { selector: ".bean-one-parallax", x: 38, y: 28, duration: 0.75 },
  { selector: ".bean-two-parallax", x: 48, y: 36, duration: 0.7 },
  { selector: ".bean-three-parallax", x: 58, y: 43, duration: 0.65 },
  { selector: ".bean-four-parallax", x: 75, y: 55, duration: 0.55 },
];

const movers = layers.map((layer) => {
  const element = scene.querySelector<HTMLElement>(layer.selector);

  if (!element) return null;

  return {
    ...layer,
    moveX: gsap.quickTo(element, "x", {
      duration: layer.duration,
      ease: "power3.out",
    }),
    moveY: gsap.quickTo(element, "y", {
      duration: layer.duration,
      ease: "power3.out",
    }),
  };
});

handleMouseMove = (event: MouseEvent) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  movers.forEach((layer) => {
    if (!layer) return;

    layer.moveX(x * layer.x);
    layer.moveY(y * layer.y);
  });
};

      const canUseMouseParallax = window.matchMedia(
        "(min-width: 901px) and (hover: hover) and (pointer: fine)"
      ).matches;
      
      if (canUseMouseParallax) {
        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });
      }
    }, scene);

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }

      ctx.revert();
    };
  }, []);

  return (
    <div ref={sceneRef} className="coffee-scene">

      {/* KAHVE SPLASH */}
      <div className="scene-object coffee-splash coffee-splash-scroll">
        <div className="coffee-splash-parallax">
          <Image
            src="/coffee/coffee-splash.webp"
            alt=""
            width={900}
            height={650}
            priority
            sizes="(max-width: 900px) 70vw, 42vw"
          />
        </div>
      </div>

      {/* SÜT */}
      <div className="scene-object milk-splash milk-splash-scroll">
        <div className="milk-splash-parallax">
          <Image
            src="/coffee/milk-splash.webp"
            alt=""
            width={700}
            height={700}
            priority
            sizes="(max-width: 900px) 65vw, 38vw"
          />
        </div>
      </div>

      {/* YAPRAK */}
      <div className="scene-object leaf leaf-scroll">
        <div className="leaf-parallax">
          <Image
            src="/coffee/leaf.webp"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* ÇEKİRDEK 1 */}
      <div className="scene-object bean bean-one bean-one-scroll">
        <div className="bean-one-parallax">
          <Image
            src="/coffee/coffee-bean.webp"
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>

      {/* ÇEKİRDEK 2 */}
      <div className="scene-object bean bean-two bean-two-scroll">
        <div className="bean-two-parallax">
          <Image
            src="/coffee/coffee-bean.webp"
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>

      {/* ÇEKİRDEK 3 */}
      <div className="scene-object bean bean-three bean-three-scroll">
        <div className="bean-three-parallax">
          <Image
            src="/coffee/coffee-bean.webp"
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>

      {/* ÖN PLAN ÇEKİRDEĞİ */}
      <div className="scene-object bean bean-four bean-four-scroll">
        <div className="bean-four-parallax">
          <Image
            src="/coffee/coffee-bean.webp"
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>

      {/* FİNCAN */}
      <div className="scene-object cup cup-scroll">
        <div className="cup-parallax">
        <Image
          src="/coffee/cup.webp"
          alt="NOVA Coffee latte"
          width={800}
          height={650}
          sizes="(max-width: 900px) 56vw, 34vw"
          preload
          fetchPriority="high"
        />
        </div>
      </div>

    </div>
  );
}
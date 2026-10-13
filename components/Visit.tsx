"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Visit() {
    const sectionRef = useRef<HTMLElement>(null);
  
    useLayoutEffect(() => {
      const section = sectionRef.current;
      if (!section) return;
  
      const mm = gsap.matchMedia();
  
      mm.add("(min-width: 701px)", () => {
        const ctx = gsap.context(() => {
  
          // 01 — BAŞLIK
          const headingTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".visit-heading",
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
  
          headingTl
            .from(".visit-kicker", {
              opacity: 0,
              y: 25,
              duration: 0.7,
              ease: "power2.out",
            })
            .from(
              ".visit-heading h2",
              {
                opacity: 0,
                y: 90,
                duration: 1.2,
                ease: "power3.out",
              },
              "-=0.3"
            )
            .from(
              ".visit-description",
              {
                opacity: 0,
                y: 35,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.5"
            );
  
          // 02 — BİLGİ SATIRLARI
          gsap.from(".visit-detail", {
            opacity: 0,
            x: -70,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
  
            scrollTrigger: {
              trigger: ".visit-details",
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
  
          // 03 — KONUM KARTI
          gsap.from(".visit-map", {
            opacity: 0,
            x: 100,
            rotation: 3,
            duration: 1.4,
            ease: "power3.out",
  
            scrollTrigger: {
              trigger: ".visit-map",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
  
          // 04 — BÜYÜK NOVA COFFEE YAZISI
          const bottomTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".visit-bottom",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
  
          bottomTl
            .from(".visit-bottom > p", {
              opacity: 0,
              y: 20,
              duration: 0.6,
            })
            .from(
              ".visit-bottom h2",
              {
                opacity: 0,
                scale: 0.75,
                y: 80,
                duration: 1.5,
                ease: "power3.out",
                transformOrigin: "center center",
              },
              "-=0.2"
            )
            .from(
              ".visit-bottom-line",
              {
                opacity: 0,
                y: 25,
                duration: 0.7,
              },
              "-=0.5"
            );
  
        }, section);
  
        return () => ctx.revert();
      });
  
      return () => mm.revert();
    }, []);
  
    return (
      <section
        ref={sectionRef}
        className="visit-section"
        id="visit"
      >
        <div className="visit-container">
  
          <div className="visit-heading">
            <div className="visit-kicker">
              <span>06</span>
              <p>BİZİ ZİYARET ET</p>
            </div>
  
            <h2>
              Güzel anlar
              <span>burada başlar.</span>
            </h2>
  
            <p className="visit-description">
              Bir kahve molası, güzel bir sohbet
              ve kendine ayırdığın birkaç dakika...
              NOVA'da her zaman bir yerin var.
            </p>
          </div>
  
          <div className="visit-content">
            <div className="visit-details">
  
              <div className="visit-detail">
                <span className="visit-detail-number">01</span>
  
                <div>
                  <p className="visit-detail-label">KONUM</p>
                  <h3>NOVA Coffee</h3>
                  <p>Adres bilgisi yakında eklenecek.</p>
                </div>
              </div>
  
              <div className="visit-detail">
                <span className="visit-detail-number">02</span>
  
                <div>
                  <p className="visit-detail-label">
                    ÇALIŞMA SAATLERİ
                  </p>
                  <h3>Yakında</h3>
                  <p>Çalışma saatleri daha sonra eklenecek.</p>
                </div>
              </div>
  
              <div className="visit-detail">
                <span className="visit-detail-number">03</span>
  
                <div>
                  <p className="visit-detail-label">İLETİŞİM</p>
                  <h3>Bizimle iletişime geç</h3>
                  <p>İletişim bilgileri yakında eklenecek.</p>
                </div>
              </div>
  
            </div>
  
            <div className="visit-map">
              <div className="visit-map-grid" />
  
              <div className="visit-map-content">
                <span className="visit-map-pin">✳</span>
                <p>NOVA COFFEE</p>
                <span>YOUR NEXT COFFEE STOP</span>
              </div>
  
              <div className="visit-map-bottom">
                <span>LOCATION / NOVA</span>
                <span>↗</span>
              </div>
            </div>
          </div>
  
          <div className="visit-bottom">
            <p>YAVAŞLA • TADINI ÇIKAR</p>
  
            <h2>
              NOVA
              <span>COFFEE</span>
            </h2>
  
            <div className="visit-bottom-line">
              <span>© {new Date().getFullYear()} NOVA COFFEE</span>
              <span>CRAFTED FOR SLOW MOMENTS</span>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
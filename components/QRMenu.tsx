"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QRCode from "qrcode";

gsap.registerPlugin(ScrollTrigger);

export default function QRMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [qrCode, setQrCode] = useState("");

  
const [menuUrl, setMenuUrl] = useState("");

useEffect(() => {
  const url =
    process.env.NEXT_PUBLIC_MENU_URL ||
    `${window.location.origin}/menu`;

  setMenuUrl(url);
}, []);


  useEffect(() => {

    if (!menuUrl) return;
    QRCode.toDataURL(menuUrl, {
      width: 500,
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: "#21130B",
        light: "#EEE2D1",
      },
    })
      .then((url) => {
        setQrCode(url);
      })
      .catch((error) => {
        console.error("QR oluşturulamadı:", error);
      });
  }, [menuUrl]);
  
    useLayoutEffect(() => {
      const section = sectionRef.current;
  
      if (!section) return;
  
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
          },
        });
  
        // 04 + DİJİTAL MENÜ
        tl.fromTo(
          ".qr-menu-kicker",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
          }
        );
  
        // Büyük başlık
        tl.fromTo(
          ".qr-menu-copy h2",
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.08"
        );
  
        // Açıklama
        tl.fromTo(
          ".qr-menu-description",
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.15"
        );
  
        // 01 / 02 / 03
        tl.fromTo(
          ".qr-menu-features > div",
          {
            opacity: 0,
            x: -45,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.12,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1"
        );
  
        // Telefon
        tl.fromTo(
          ".phone-mockup",
          {
            opacity: 0,
            y: 180,
            rotation: 14,
            scale: 0.86,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 5,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.12
        );
  
        // QR kartı ters yönden geliyor
        tl.fromTo(
          ".qr-code-card",
          {
            opacity: 0,
            x: -120,
            y: 80,
            rotation: -18,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: -8,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          0.4
        );
  
        // Scan yazısı
        tl.fromTo(
          ".qr-scan-label",
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 0.35,
            x: 0,
            duration: 0.3,
          },
          0.65
        );
  
        // Orbitler
        gsap.to(".qr-orbit-one", {
          rotation: 360,
          duration: 35,
          repeat: -1,
          ease: "none",
        });
  
        gsap.to(".qr-orbit-two", {
          rotation: -360,
          duration: 50,
          repeat: -1,
          ease: "none",
        });
      }, section);
  
      return () => ctx.revert();
    }, []);
  
    return (
    
        <section
        ref={sectionRef}
        className="qr-menu"
        id="qr-menu"
      >
        <div className="qr-menu-inner">
  
          <div className="qr-menu-copy">
            <div className="qr-menu-kicker">
              <span>04</span>
              <p>DİJİTAL MENÜ</p>
            </div>
  
            <h2>
              Menü artık
              <span>bir dokunuş uzağında.</span>
            </h2>
  
            <p className="qr-menu-description">
              QR kodu okut, NOVA'nın lezzetlerini
              telefonundan keşfet.
            </p>
  
            <div className="qr-menu-features">
              <div>
                <span>01</span>
                <p>QR KODU OKUT</p>
              </div>
  
              <div>
                <span>02</span>
                <p>MENÜYÜ KEŞFET</p>
              </div>
  
              <div>
                <span>03</span>
                <p>FAVORİNİ SEÇ</p>
              </div>
            </div>
          </div>
  
          <div className="qr-menu-visual">
  
            <div className="qr-orbit qr-orbit-one" />
            <div className="qr-orbit qr-orbit-two" />
  
            <div className="qr-code-card">
            <div className="qr-placeholder">
  {qrCode ? (
    <img
      src={qrCode}
      alt="NOVA Coffee dijital menü QR kodu"
      className="qr-code-image"
    />
  ) : (
    <span>QR</span>
  )}
</div>
  
              <p>MENÜYÜ AÇ</p>
            </div>
  
            <div className="phone-mockup">
              <div className="phone-speaker" />
  
              <div className="phone-screen">
                <div className="phone-logo">
                  <span>NOVA</span>
                  <small>COFFEE</small>
                </div>
  
                <p className="phone-welcome">
                  BUGÜN NE İÇMEK İSTERSİN?
                </p>
  
                <h3>
                  Biraz yavaşla.
                  <span>Kahveni seç.</span>
                </h3>
  
                <div className="phone-menu-list">
                  <div>
                    <span>01</span>
                    <p>KAHVELER</p>
                    <b>→</b>
                  </div>
  
                  <div>
                    <span>02</span>
                    <p>TATLILAR</p>
                    <b>→</b>
                  </div>
  
                  <div>
                    <span>03</span>
                    <p>KAHVALTI</p>
                    <b>→</b>
                  </div>
                </div>
              </div>
            </div>
  
            <p className="qr-scan-label">
              SCAN • DISCOVER • ENJOY
            </p>
          </div>
  
        </div>
      </section>
    );
  }
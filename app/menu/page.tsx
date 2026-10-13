import Link from "next/link";
import MenuSection from "@/components/MenuSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Menü",
  description:
    "NOVA Coffee dijital menüsünü keşfedin. Espresso, latte, soğuk kahveler, tatlılar ve kahvaltı seçeneklerini inceleyin.",
  openGraph: {
    title: "NOVA Coffee | Dijital Menü",
    description:
      "Kahvelerimizi, tatlılarımızı ve kahvaltı seçeneklerimizi keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
};


const categories = [
  {
    number: "01",
    name: "KAHVELER",
    description: "Espresso, sütlü kahveler ve soğuk favoriler.",
  },
  {
    number: "02",
    name: "TATLILAR",
    description: "Günün her anına eşlik eden tatlılar.",
  },
  {
    number: "03",
    name: "KAHVALTI",
    description: "Yavaş başlayan sabahlar için.",
  },
];

const coffeeItems = [
    {
      name: "Espresso",
      description: "Yoğun, dengeli ve karakterli.",
      price: "95 ₺",
    },
    {
      name: "Americano",
      description: "Espresso ve sıcak su.",
      price: "110 ₺",
    },
    {
      name: "Cappuccino",
      description: "Espresso, süt ve yoğun süt köpüğü.",
      price: "135 ₺",
    },
    {
      name: "Flat White",
      description: "Çift espresso ve ipeksi süt.",
      price: "145 ₺",
    },
    {
      name: "Cafe Latte",
      description: "Espresso ve yumuşak dokulu süt.",
      price: "145 ₺",
    },
    {
      name: "Cold Brew",
      description: "Uzun süre soğuk demlenmiş kahve.",
      price: "150 ₺",
    },
  ];

  const dessertItems = [
    {
      name: "San Sebastian",
      description: "Yoğun kıvamlı cheesecake.",
      price: "195 ₺",
    },
    {
      name: "Tiramisu",
      description: "Espresso, mascarpone ve kakao.",
      price: "185 ₺",
    },
    {
      name: "Butter Croissant",
      description: "Kat kat, tereyağlı ve taze.",
      price: "120 ₺",
    },
    {
      name: "Chocolate Croissant",
      description: "Bitter çikolatalı tereyağlı kruvasan.",
      price: "145 ₺",
    },
    {
      name: "NOVA Cookie",
      description: "Bitter çikolata ve deniz tuzu.",
      price: "110 ₺",
    },
  ];
  
  const breakfastItems = [
    {
      name: "NOVA Breakfast",
      description: "Yumurta, peynirler, zeytin, ekşi maya ve mevsim lezzetleri.",
      price: "395 ₺",
    },
    {
      name: "Avocado Toast",
      description: "Ekşi maya, avokado, poşe yumurta ve taze otlar.",
      price: "275 ₺",
    },
    {
      name: "Eggs Benedict",
      description: "Poşe yumurta, brioche ve hollandaise.",
      price: "295 ₺",
    },
    {
      name: "Granola Bowl",
      description: "Yoğurt, ev yapımı granola, meyve ve bal.",
      price: "225 ₺",
    },
  ];

export default function DigitalMenuPage() {
  return (
    <main className="digital-menu-page">
      <header className="digital-menu-header">
        <Link href="/" className="digital-menu-logo">
          <span>NOVA</span>
          <small>COFFEE</small>
        </Link>

        <span className="digital-menu-number">
          MENU / 01
        </span>
      </header>

      <section className="digital-menu-hero">
        <p className="digital-menu-eyebrow">
          NOVA DİJİTAL MENÜ
        </p>

        <h1>
          Biraz yavaşla.
          <span>Kahveni seç.</span>
        </h1>

        <p className="digital-menu-intro">
          İyi kahve, taze lezzetler ve
          günün güzel anları.
        </p>
      </section>

      <section className="digital-menu-categories">
        {categories.map((category) => (
          <a
            href={`#${category.name.toLowerCase()}`}
            className="digital-menu-category"
            key={category.number}
          >
            <span className="digital-category-number">
              {category.number}
            </span>

            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>

            <span className="digital-category-arrow">
              ↗
            </span>
          </a>
        ))}
      </section>
      <MenuSection
  id="kahveler"
  number="01"
  kicker="NOVA KAHVELER"
  title="Kahveni"
  italicTitle="nasıl seversin?"
  items={coffeeItems}
/>

<MenuSection
  id="tatlilar"
  number="02"
  kicker="NOVA TATLILAR"
  title="Biraz tatlı,"
  italicTitle="biraz mutluluk."
  items={dessertItems}
/>

<MenuSection
  id="kahvalti"
  number="03"
  kicker="NOVA KAHVALTI"
  title="Güne güzel"
  italicTitle="bir başlangıç."
  items={breakfastItems}
/>


      <footer className="digital-menu-footer">
        <span>NOVA COFFEE</span>
        <span>YAVAŞLA • TADINI ÇIKAR</span>
      </footer>
    </main>
  );
}
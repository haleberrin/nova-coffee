import Hero from "../components/Hero";
import MenuShowcase from "../components/MenuShowcase";
import Story from "../components/Story";
import QRMenu from "@/components/QRMenu";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";



export default function Home() {
  return (
    <>
    <Hero />
    <Story />
    <MenuShowcase />
    <QRMenu />
    <Gallery />
    <Visit />
  </>
  );
}




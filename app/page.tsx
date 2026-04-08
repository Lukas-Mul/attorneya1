import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sluzby from "@/components/Sluzby";
import OKancelariProfil from "@/components/OKancelariProfil";
import Ceny from "@/components/Ceny";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sluzby />
        <OKancelariProfil />
        <Ceny />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

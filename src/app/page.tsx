import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import Parcours from "@/components/Parcours";
import Projets from "@/components/Projets";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsSection />
        <Parcours />
        <Projets />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

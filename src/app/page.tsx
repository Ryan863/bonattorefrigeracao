import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HotspotDiagram } from "@/components/HotspotDiagram";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { InstagramCard } from "@/components/InstagramCard";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HotspotDiagram />
        <Services />
        <Testimonials />
        <Location />
        <InstagramCard />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

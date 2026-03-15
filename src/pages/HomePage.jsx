import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChoose";
import Industries from "../components/sections/Industries";
import Process from "../components/sections/Process";
import Founder from "../components/sections/Founder";
import Proof from "../components/sections/Proof";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal-on-scroll"><TrustBar /></div>
        <div className="reveal-on-scroll"><Services /></div>
        <WhyChoose />
        <div className="reveal-on-scroll"><Industries /></div>
        <div className="reveal-on-scroll"><Process /></div>
        <div className="reveal-on-scroll"><Founder /></div>
        <Proof />
        <div className="reveal-on-scroll"><FAQ /></div>
        <div className="reveal-on-scroll"><CTA /></div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

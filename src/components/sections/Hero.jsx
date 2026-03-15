import Container from "../layout/Container";
import Button from "../ui/Button";
import { contactDetails } from "../../data/siteContent";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-dark)] text-white">
      <div className="absolute inset-0 opacity-20">
        <img src="/fire-flames-black-background.jpg" alt="Fire safety background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.26),transparent_24%),radial-gradient(circle_at_left_center,rgba(239,68,68,0.18),transparent_28%),linear-gradient(135deg,rgba(10,10,14,0.98)_0%,rgba(28,12,14,0.96)_48%,rgba(70,10,18,0.90)_100%)]" />

      <Container className="relative grid min-h-[calc(100vh-6rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full border border-[rgba(248,113,113,0.22)] bg-[rgba(193,18,31,0.18)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#fca5a5]">
            Varanasi • Fire Safety • Service Support
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Fire safety equipment, refilling, and protection systems you can trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            S.K.V Fire Associate provides fire extinguishers, refilling, fire alarm systems, and practical fire safety support for homes, shops, offices, and commercial properties.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">Get in Touch</Button>
            <Button href="#services" variant="secondary">See Services</Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Phone</p>
              <p className="mt-2 text-base font-bold">{contactDetails.phoneDisplay}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Email</p>
              <p className="mt-2 text-base font-bold">info@skvfire.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Hours</p>
              <p className="mt-2 text-base font-bold">Mon–Sat, 10 AM–8 PM</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up animation-delay-2">
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(220,38,38,0.28),transparent_62%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(248,113,113,0.16)] bg-[linear-gradient(160deg,rgba(33,10,13,0.95),rgba(17,17,23,0.92))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="grid gap-6">
              <div className="rounded-[1.5rem] border border-[rgba(248,113,113,0.14)] bg-black/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fca5a5]">What SKV does</p>
                <ul className="mt-5 space-y-4 text-base leading-7 text-white/82">
                  <li>• Fire extinguisher sales and supply</li>
                  <li>• Fire extinguisher refilling</li>
                  <li>• Fire alarm system support</li>
                  <li>• Fire safety equipment guidance</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(248,113,113,0.14)] bg-[rgba(193,18,31,0.12)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fca5a5]">Location</p>
                <p className="mt-4 text-base leading-7 text-white/80">
                  C-28/141, Shop No. 10 & 11, Pandey Katra, Near Chaura Mata Temple, Maldahiya, Teliyabagh, Varanasi.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(248,113,113,0.14)] bg-black/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fca5a5]">Availability</p>
                <p className="mt-4 text-base leading-7 text-white/80">Monday to Saturday: 10:00 AM – 8:00 PM</p>
                <p className="mt-1 text-base leading-7 text-white/60">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

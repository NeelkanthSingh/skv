import Container from "../layout/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-dark)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_24%),radial-gradient(circle_at_left_center,rgba(193,18,31,0.2),transparent_28%)]" />
      <div className="absolute inset-0 opacity-25">
        <img src="/fire-flames-black-background.jpg" alt="Fire safety background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,32,0.95)_0%,rgba(15,23,32,0.86)_45%,rgba(15,23,32,0.55)_100%)]" />

      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Safety • Reliability • Support
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            Reliable fire safety solutions for spaces that need real protection.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Fire safety equipment, installation, maintenance, and practical support for residential, commercial, and industrial properties.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">Get a Quote</Button>
            <Button href="#services" variant="secondary">Explore Services</Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Coverage</p>
              <p className="mt-2 text-lg font-bold">Equipment + systems</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Support</p>
              <p className="mt-2 text-lg font-bold">Installation + upkeep</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Approach</p>
              <p className="mt-2 text-lg font-bold">Reliable and practical</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up animation-delay-2">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[rgba(245,158,11,0.18)] to-[rgba(193,18,31,0.08)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <img src="/fireman_.png" alt="Fire safety professional" className="h-[560px] w-full rounded-[1.5rem] object-cover object-top transition duration-700 hover:scale-[1.02]" />
            <div className="absolute bottom-10 left-10 right-10 rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,32,0.72)] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">End-to-end support</p>
              <p className="mt-3 text-2xl font-bold">From equipment to maintenance, built for dependable readiness.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

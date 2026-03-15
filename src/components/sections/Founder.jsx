import Container from "../layout/Container";
import { contactDetails } from "../../data/siteContent";

const Founder = () => {
  return (
    <section id="founder" className="section-space bg-[var(--color-dark)]">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-[rgba(248,113,113,0.12)] bg-[linear-gradient(145deg,rgba(18,18,24,0.98),rgba(29,10,14,0.96))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] lg:grid-cols-[0.68fr_1.32fr] lg:p-10">
          <div className="reveal-on-scroll">
            <div className="mx-auto max-w-[340px] rounded-[2rem] border border-[rgba(248,113,113,0.14)] bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_48%),linear-gradient(180deg,#16161d,#0f0f14)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-white p-3">
                <img
                  src="/founder-shradha-nand-singh.png"
                  alt="Shradha Nand Singh, Founder of S.K.V Fire Associate"
                  className="h-[400px] w-full rounded-[1.1rem] object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll lg:py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f87171]">Founder</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Shradha Nand Singh</h2>
            <p className="mt-3 text-lg font-medium text-white/70">Founder, S.K.V Fire Associate</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/74 sm:text-lg">
              <p>
                Shradha Nand Singh leads S.K.V Fire Associate with a practical focus on dependable fire safety products and customer support.
              </p>
              <p>
                Through the business, customers can access fire extinguishers, refilling services, fire alarm system support, and essential fire safety equipment for homes, shops, offices, and commercial spaces.
              </p>
              <p>
                Based in Varanasi, the company reflects a local, service-first approach built around accessibility, trust, and readiness.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(248,113,113,0.16)] bg-[rgba(255,255,255,0.03)] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#fca5a5]">Email</p>
                <p className="mt-2 text-sm font-medium text-white/80">{contactDetails.email}</p>
              </div>
              <div className="rounded-2xl border border-[rgba(248,113,113,0.16)] bg-[rgba(255,255,255,0.03)] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#fca5a5]">Phone</p>
                <p className="mt-2 text-sm font-medium text-white/80">{contactDetails.phoneDisplay}</p>
              </div>
              <div className="rounded-2xl border border-[rgba(248,113,113,0.16)] bg-[rgba(255,255,255,0.03)] p-4 sm:col-span-2 xl:col-span-1">
                <p className="text-xs uppercase tracking-[0.22em] text-[#fca5a5]">Location</p>
                <p className="mt-2 text-sm font-medium text-white/80">Varanasi, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Founder;

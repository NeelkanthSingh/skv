import Container from "../layout/Container";

const Founder = () => {
  return (
    <section id="founder" className="section-space bg-[var(--color-dark)]">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-[rgba(248,113,113,0.12)] bg-[linear-gradient(145deg,rgba(18,18,24,0.98),rgba(29,10,14,0.96))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] lg:grid-cols-[0.72fr_1.28fr] lg:p-10">
          <div className="reveal-on-scroll">
            <div className="mx-auto max-w-[360px] rounded-[2rem] border border-[rgba(248,113,113,0.14)] bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_48%),linear-gradient(180deg,#16161d,#0f0f14)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-white p-3">
                <img
                  src="/founder-shradha-nand-singh.png"
                  alt="Shradha Nand Singh, Founder of S.K.V Fire Associate"
                  className="h-[420px] w-full rounded-[1.1rem] object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll lg:py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f87171]">Founder</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Shradha Nand Singh</h2>
            <p className="mt-3 text-lg font-medium text-white/70">Founder, S.K.V Fire Associate</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/72 sm:text-lg">
              <p>
                S.K.V Fire Associate is presented as a practical, service-led fire safety business built around trust, accessibility, and dependable customer support.
              </p>
              <p>
                With Shradha Nand Singh at the center of the business identity, the brand gains a more personal and credible presence — helping customers connect the company with real local leadership in Varanasi.
              </p>
              <p>
                This founder section is designed to strengthen trust while keeping the tone professional, simple, and aligned with the company’s work in fire safety equipment, refilling, and protection systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[rgba(248,113,113,0.18)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-medium text-white/72">
                Local leadership
              </div>
              <div className="rounded-full border border-[rgba(248,113,113,0.18)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-medium text-white/72">
                Customer trust
              </div>
              <div className="rounded-full border border-[rgba(248,113,113,0.18)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-medium text-white/72">
                Fire safety focus
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Founder;

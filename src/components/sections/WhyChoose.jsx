import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { reasons } from "../../data/siteContent";

const WhyChoose = () => {
  return (
    <section id="why-skv" className="section-space bg-[var(--color-dark-soft)]">
      <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="reveal-on-scroll">
          <SectionTitle
            eyebrow="Why SKV"
            title="A darker, sharper, more visible identity for the business."
            description="This version moves away from the bright white feel and pushes SKV toward a stronger red-and-dark theme with better brand visibility and more serious tone."
          />
          <div className="mt-8 rounded-[1.75rem] border border-[rgba(248,113,113,0.12)] bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f87171]">Brand shift</p>
            <p className="mt-3 text-base leading-7 text-white/68">
              The website now leans darker, feels more premium, and gives stronger visual emphasis to the SKV name, contact access, and service offering.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="reveal-on-scroll rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)]" style={{ transitionDelay: `${index * 90}ms` }}>
              <p className="text-lg font-bold text-white">{reason.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;

import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { reasons } from "../../data/siteContent";

const WhyChoose = () => {
  return (
    <section id="why-skv" className="section-space bg-white">
      <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="reveal-on-scroll">
          <SectionTitle
            eyebrow="Why SKV"
            title="A stronger digital brand for a serious fire safety business."
            description="This redesign positions SKV as a professional partner — dependable in execution, practical in planning, and cleaner in how the business is presented online."
          />
          <div className="mt-8 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_60px_rgba(15,23,32,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">Brand outcome</p>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              The site now leads with trust, structure, and clarity — making SKV feel more established, more premium, and more ready for real customer conversations.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.title} className={`reveal-on-scroll rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_50px_rgba(15,23,32,0.05)]`} style={{ transitionDelay: `${index * 90}ms` }}>
              <p className="text-lg font-bold text-[var(--color-text)]">{reason.title}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;

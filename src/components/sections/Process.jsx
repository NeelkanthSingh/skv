import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { processSteps } from "../../data/siteContent";

const Process = () => {
  return (
    <section id="process" className="section-space bg-[var(--color-dark-soft)]">
      <Container>
        <SectionTitle
          eyebrow="Our Process"
          title="Simple service flow, clearer for customers, stronger for the brand."
          description="The process explains how customers move from requirement to delivery and ongoing support."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
              <p className="text-sm font-bold tracking-[0.24em] text-[#f87171]">{item.step}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;

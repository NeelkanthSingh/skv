import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { processSteps } from "../../data/siteContent";

const Process = () => {
  return (
    <section id="process" className="section-space bg-white">
      <Container>
        <SectionTitle
          eyebrow="Our Process"
          title="A simple flow that makes the service feel professional and complete."
          description="The process should reduce uncertainty and show that SKV works with structure, not guesswork."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_60px_rgba(15,23,32,0.05)]">
              <p className="text-sm font-bold tracking-[0.24em] text-[var(--color-brand)]">{item.step}</p>
              <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;

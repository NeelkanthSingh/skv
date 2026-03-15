import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { industries } from "../../data/siteContent";

const Industries = () => {
  return (
    <section id="industries" className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionTitle
          eyebrow="Industries Served"
          title="Solutions shaped for different types of properties and operations."
          description="From smaller buildings to larger facilities, the site should communicate range without becoming cluttered."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={industry} className="group rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,23,32,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(193,18,31,0.28)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(245,158,11,0.12)] text-sm font-extrabold text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <p className="mt-5 text-lg font-bold text-[var(--color-text)]">{industry}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Industries;

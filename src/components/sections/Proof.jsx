import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import StatCard from "../ui/StatCard";
import { proofStats } from "../../data/siteContent";

const Proof = () => {
  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-dark)] text-white">
      <div className="absolute inset-0 opacity-20">
        <img src="/cool-background-4.png" alt="Abstract background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,32,0.92)_0%,rgba(15,23,32,0.98)_100%)]" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Proof of Value"
          title="Designed to feel credible now — and even stronger with real business metrics later."
          description="This section gives the site a stronger trust layer today, while staying flexible for future stats, certifications, client logos, or project proof."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {proofStats.map((item, index) => (
            <div key={item.label} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <StatCard value={item.value} label={item.label} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Proof;

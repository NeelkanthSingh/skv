import Container from "../layout/Container";
import { trustPoints } from "../../data/siteContent";

const TrustBar = () => {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-6">
      <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustPoints.map((item) => (
          <div key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition duration-300 hover:-translate-y-1">
            <p className="text-sm font-bold text-[var(--color-text)]">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default TrustBar;

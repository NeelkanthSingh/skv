import Container from "../layout/Container";
import { trustPoints } from "../../data/siteContent";

const TrustBar = () => {
  return (
    <section className="border-y border-[rgba(248,113,113,0.08)] bg-[var(--color-surface)] py-6">
      <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustPoints.map((item) => (
          <div key={item.title} className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,rgba(25,25,32,0.98),rgba(17,17,22,0.98))] p-5 transition duration-300 hover:-translate-y-1">
            <p className="text-sm font-bold text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-white/62">{item.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default TrustBar;

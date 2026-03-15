import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { industries } from "../../data/siteContent";

const Industries = () => {
  return (
    <section id="industries" className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionTitle
          eyebrow="Industries Served"
          title="Fire safety support for everyday spaces and commercial properties."
          description="Presented in a cleaner grid while keeping the site visually darker and more confident overall."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={industry} className="group rounded-[1.75rem] border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,rgba(24,24,31,0.98),rgba(16,16,22,0.98))] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(248,113,113,0.22)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(239,68,68,0.12)] text-sm font-extrabold text-[#f87171]">
                0{index + 1}
              </div>
              <p className="mt-5 text-lg font-bold text-white">{industry}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Industries;

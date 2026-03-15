import Container from "../layout/Container";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="bg-white py-8 pb-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0F1720_0%,#16202B_55%,#C1121F_120%)] p-8 text-white shadow-[0_40px_120px_rgba(15,23,32,0.18)] sm:p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">Ready to upgrade</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Protect your property with a stronger, cleaner fire safety presence.</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                This new site foundation is built to convert better, look more professional, and give SKV a stronger brand identity from the first impression.
              </p>
            </div>
            <div>
              <Button href="#contact" variant="primary">Talk to SKV</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

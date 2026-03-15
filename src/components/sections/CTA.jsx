import Container from "../layout/Container";
import Button from "../ui/Button";
import { contactDetails } from "../../data/siteContent";

const CTA = () => {
  return (
    <section className="bg-[var(--color-surface)] py-8 pb-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#120b10_0%,#2a0f16_45%,#7f1d1d_100%)] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.24)] sm:p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#fca5a5]">Contact S.K.V Fire Associate</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Need fire safety equipment, refilling, or alarm system support?</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                Reach out on {contactDetails.phoneDisplay} or email {contactDetails.email}. The business operates Monday to Saturday from 10:00 AM to 8:00 PM.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={contactDetails.phoneLink} variant="primary">Call Now</Button>
              <Button href={contactDetails.emailLink} variant="secondary">Email Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

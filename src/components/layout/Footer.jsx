import Container from "./Container";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[var(--color-dark)] py-12 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">SKV Fire Associates</p>
            <h3 className="mt-4 text-2xl font-bold">Reliable fire safety support built for real spaces.</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Installation, equipment, maintenance, and practical support for safer residential, commercial, and industrial environments.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <a href="#services">Services</a>
              <a href="#why-skv">Why SKV</a>
              <a href="#industries">Industries</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p>Ready to rebrand this with your real business details.</p>
              <p>Email / phone / location can be added next.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} SKV Fire Associates. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

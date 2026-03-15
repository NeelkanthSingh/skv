import Container from "./Container";
import { contactDetails } from "../../data/siteContent";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-[rgba(248,113,113,0.12)] bg-[var(--color-dark)] py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f87171]">S.K.V Fire Associate</p>
            <h3 className="mt-4 text-3xl font-bold">Reliable fire safety support for Varanasi and beyond.</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Fire extinguishers, refilling, alarm systems, and practical support for customers who need dependable safety equipment and service.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <a href="#services">Services</a>
              <a href="#why-skv">Why SKV</a>
              <a href="#industries">Industries</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Contact</h4>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/78">
              <p><strong>Email:</strong> <a href={contactDetails.emailLink}>{contactDetails.email}</a></p>
              <p><strong>Phone:</strong> <a href={contactDetails.phoneLink}>{contactDetails.phoneDisplay}</a></p>
              <p><strong>Address:</strong> {contactDetails.address}</p>
              <div>
                <p><strong>Hours:</strong></p>
                {contactDetails.timings.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} S.K.V Fire Associate. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Container from "./Container";
import { navLinks } from "../../data/siteContent";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled ? "border-b border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,14,0.94)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "bg-[rgba(10,10,14,0.72)] backdrop-blur-md"
      }`}
    >
      <Container className="flex h-24 items-center justify-between">
        <a href="#home" className="flex items-center gap-4 text-white">
          <img src="/skv.png" alt="SKV logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-[rgba(255,255,255,0.12)]" />
          <div>
            <p className="text-2xl font-extrabold tracking-[0.18em] text-white">SKV</p>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#f87171]">Fire Associate</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-white/78 transition hover:text-[#f87171]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[rgba(248,113,113,0.35)] bg-[rgba(193,18,31,0.16)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[rgba(193,18,31,0.28)] lg:inline-flex"
        >
          Contact SKV
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 px-4 py-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="text-sm font-bold">Menu</span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[rgba(10,10,14,0.98)] lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;

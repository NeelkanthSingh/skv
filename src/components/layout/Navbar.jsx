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
        scrolled ? "border-b border-white/10 bg-[rgba(15,23,32,0.86)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-white">
          <img src="/skv.png" alt="SKV logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10" />
          <div>
            <p className="text-lg font-extrabold tracking-[0.18em]">SKV</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">Fire Associates</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/72 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white/8 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/14 lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="text-sm font-bold">Menu</span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[rgba(15,23,32,0.97)] lg:hidden">
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

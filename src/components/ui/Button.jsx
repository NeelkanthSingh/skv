const variants = {
  primary:
    "bg-[var(--color-brand)] text-white shadow-[0_18px_50px_rgba(193,18,31,0.28)] hover:bg-[#a50f1a]",
  secondary:
    "border border-white/20 bg-white/8 text-white hover:bg-white/14",
  dark:
    "bg-[var(--color-dark)] text-white hover:bg-[#0b1220]",
};

const Button = ({ children, href = "#contact", variant = "primary" }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;

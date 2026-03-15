const variants = {
  primary:
    "bg-[linear-gradient(135deg,#b91c1c,#ef4444)] text-white shadow-[0_18px_50px_rgba(185,28,28,0.34)] hover:brightness-110",
  secondary:
    "border border-[rgba(255,255,255,0.18)] bg-white/8 text-white hover:bg-white/14",
  dark:
    "bg-[var(--color-dark)] text-white hover:bg-[#0b0b10]",
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

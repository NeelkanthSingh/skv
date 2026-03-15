const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#ef4444]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;

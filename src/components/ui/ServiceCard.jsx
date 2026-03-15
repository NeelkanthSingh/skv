const ServiceCard = ({ title, description }) => {
  return (
    <div className="group rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,32,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,32,0.12)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(193,18,31,0.08)] text-lg font-bold text-[var(--color-brand)]">
        SK
      </div>
      <h3 className="text-xl font-bold text-[var(--color-text)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </div>
  );
};

export default ServiceCard;

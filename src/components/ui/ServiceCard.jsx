const ServiceCard = ({ title, description }) => {
  return (
    <div className="group rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(27,27,35,0.98),rgba(18,18,24,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(239,68,68,0.14)] text-lg font-bold text-[#f87171]">
        SK
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/66">{description}</p>
    </div>
  );
};

export default ServiceCard;

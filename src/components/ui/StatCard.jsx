const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-3xl border border-[rgba(248,113,113,0.14)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm transition duration-300 hover:bg-[rgba(255,255,255,0.07)]">
      <p className="text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/70">{label}</p>
    </div>
  );
};

export default StatCard;

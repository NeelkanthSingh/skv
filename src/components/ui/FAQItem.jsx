import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(28,28,36,0.98),rgba(18,18,24,0.98))] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <span className="text-2xl leading-none text-[#f87171]">{open ? "−" : "+"}</span>
      </button>
      {open ? <p className="mt-4 text-sm leading-7 text-white/68">{answer}</p> : null}
    </div>
  );
};

export default FAQItem;

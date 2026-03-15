import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,32,0.05)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-base font-semibold text-[var(--color-text)]">{question}</span>
        <span className="text-2xl leading-none text-[var(--color-brand)]">{open ? "−" : "+"}</span>
      </button>
      {open ? <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{answer}</p> : null}
    </div>
  );
};

export default FAQItem;

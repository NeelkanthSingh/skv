import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import FAQItem from "../ui/FAQItem";
import { faqs } from "../../data/siteContent";

const FAQ = () => {
  return (
    <section id="faq" className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Clear answers for the most likely questions."
          description="A complete business site should answer practical concerns quickly and reduce friction before someone reaches out."
        />

        <div className="mt-14 grid gap-4">
          {faqs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

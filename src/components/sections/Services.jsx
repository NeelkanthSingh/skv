import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/siteContent";

const Services = () => {
  return (
    <section id="services" className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Built to cover the essential layers of fire protection."
          description="A strong fire safety partner should support the full lifecycle — equipment, installation, maintenance, and practical guidance."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;

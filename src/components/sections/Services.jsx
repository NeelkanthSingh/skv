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
          title="Core fire safety services presented with a stronger, darker identity."
          description="The goal is simple: make the site feel more serious, more visible, and more aligned with the actual business offering."
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

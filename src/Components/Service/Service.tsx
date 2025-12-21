import { useRef } from 'react';
import { Card } from '../Services/Card';
import './service.css';
import { useInView } from 'framer-motion';

const servicesData = [
    {
        icon: "ri-school-fill",
        title: "Educational Institutions",
        description: "",
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Industrial Companies",
        description: "",
    },
    {
        icon: "ri-home-gear-line",
        title: "Home Repair",
        description: "",
    },
    {
        icon: "ri-rocket-line",
        title: "Lawyers & Law Firms",
        description: "",
    },
     {
        icon: "ri-health-book-fill",
        title: "Medical & Health",
        description: "",
    },
     {
        icon: "ri-rocket-line",
        title: "Baby Products",
        description: "",
    },
     {
        icon: "ri-home-9-fill",
        title: "Real Estate",
        description: "",
    },
     {
        icon: "ri-restaurant-2-fill",
        title: "Restaurants",
        description: "",
    },
     {
        icon: "ri-tooth-line",
        title: "Dental",
        description: "",
    },
     {
        icon: "ri-home-9-line",
        title: "Roofing",
        description: "",
    },

]

export const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
          <h2> Industries We Serve</h2>
          {/* <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2> */}
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} title={i.title} description={i.description} icon={i.icon} isInView={isInView} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};


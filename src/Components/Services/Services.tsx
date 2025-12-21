// Services.jsx
import { useState } from "react";
import "./services.css";

const tabContent = {
  
  seo: {
    services: [
      {
        title: "On Page SEO",
        desc: "We optimize page titles, meta descriptions, header tags, and content to enhance your website’s visibility and relevance in search engines.",
      },
      {
        title: "Off-Page SEO",
        desc: "Boost your website’s authority through strategic link-building, digital PR, and other credibility-enhancing techniques across trusted domains.",
      },
      {
        title: "Technical SEO",
        desc: "We ensure your site architecture, speed, mobile responsiveness, and indexing settings meet search engine standards for better rankings.",
      },
      {
        title: "Local SEO",
        desc: "Optimize your online presence to target local customers through Google Business Profile enhancements and localized keyword strategies.",
      },
      {
        title: "Google Business Optimization",
        desc: "Enhance your GBP profile with accurate information, photos, and regular updates to improve local search visibility and credibility.",
      },
    ],
    other: [
      "Site Audit",
      "E-commerce SEO",
      "Online Reputation Management",
      "Content Marketing",
      "Guest Post Services",
      "Link Building",
      "Social Media Marketing",
    ],
  },

  

  webDesign: {
    services: [
      {
        title: "Custom Website Design",
        desc: "We craft bespoke websites tailored to your brand, audience, and goals to enhance engagement and drive conversions.",
      },
      {
        title: "Ecommerce Website Design",
        desc: "Get visually striking product pages, intuitive navigation, and smooth checkout flows designed to boost sales.",
      },
      {
        title: "UI/UX Design",
        desc: "Our design experts focus on intuitive, visually appealing experiences built for better engagement.",
      },
      {
        title: "Landing Page Design",
        desc: "Conversion-optimized landing pages designed for ads, lead generation, and product launches.",
      },
      {
        title: "Website Redesign Services",
        desc: "We modernize outdated websites while preserving SEO performance and improving usability.",
      },
    ],
    other: [
      "WordPress Website Design",
      "Small Business Website Design",
      "White Label Web Design Services",
    ],
  },

  webDev: {
    services: [
      {
        title: "Shopify Development",
        desc: "Custom Shopify stores optimized for conversions, speed, and mobile experiences.",
      },
      {
        title: "Ecommerce Web Development",
        desc: "Scalable and user-friendly eCommerce websites with secure checkout integrations.",
      },
      {
        title: "Laravel Web Development",
        desc: "Robust and secure web applications customized for complex business logic.",
      },
      {
        title: "ReactJS Development",
        desc: "Fast, interactive frontends built with ReactJS for modern web applications.",
      },
      {
        title: "PHP Development",
        desc: "Dynamic and scalable backend solutions using PHP frameworks.",
      },
    ],
    other: [
      "Custom Web Development",
      "CMS Development",
      "Landing Page Development",
      "Website Maintenance & Support",
    ],
  },
};
type TabKey = keyof typeof tabContent;

export const Services = () => {
const [activeTab, setActiveTab] = useState<TabKey>("seo");

  const current = tabContent[activeTab];

  return (
    <section className="services">
      <h2 className="services__title">
        Digital Marketing Solutions Built to Scale Your Brand
      </h2>

      {/* Tabs */}
      <div className="services__tabs">
        <button onClick={() => setActiveTab("seo")}>SEO Services</button>
        
        <button onClick={() => setActiveTab("webDesign")}>Website Design Services</button>
        <button onClick={() => setActiveTab("webDev")}>Website Development</button>
      </div>

      {/* Main Services */}
      <div className="services__grid">
        {current.services.map((item, index) => (
          <div className="service__card" key={index}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Other Services */}
      <div className="services__other">
        <h4>Other Services</h4>
        <ul>
          {current.other.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

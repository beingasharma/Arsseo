// Services.jsx
import { useState } from "react";
import "./services.css";

const tabContent = {
  whiteLabel: {
    services: [
      {
        title: "White Label SEO Services",
        desc: "Offer scalable SEO under your brand with on-page, off-page, and technical support tailored to your client's needs.",
      },
      {
        title: "White Label PPC Services",
        desc: "Let us manage high-performing paid campaigns behind the scenes while you retain full brand ownership and client communication.",
      },
      {
        title: "White Label Lead Generation",
        desc: "We build and manage complete lead generation funnels, from landing pages to ads, branded entirely under your business.",
      },
      {
        title: "White Label Web Design",
        desc: "Offer your clients stunning website designs and UI/UX enhancements while we handle delivery behind the scenes.",
      },
      {
        title: "White Label Web Development",
        desc: "Scale your agency’s web development capacity without hiring, using our expert developers for any tech stack you need.",
      },
    ],
    other: [
      "White Label Website Builder",
      "White Label Lead Generation",
      "White Label Graphic Design",
      "White Label Digital Marketing",
      "White Label Link Building",
    ],
  },

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

  ppc: {
    services: [
      {
        title: "Google Ads",
        desc: "Launch high-converting paid search campaigns targeting users actively searching for your products or services on Google.",
      },
      {
        title: "E-commerce PPC",
        desc: "Increase product sales with precision-targeted ads on Google Shopping, Amazon, and Meta tailored to your eCommerce store’s inventory.",
      },
      {
        title: "Facebook Ads",
        desc: "Reach and retarget audiences on Meta platforms with scroll-stopping creatives and data-driven performance campaigns.",
      },
      {
        title: "Amazon PPC",
        desc: "Maximize product visibility and ROI on Amazon with expertly managed Sponsored Product, Brand, and Display campaigns.",
      },
      {
        title: "LinkedIn Ads",
        desc: "Target high-value B2B decision-makers with advanced targeting and CPL-optimized bid strategies integrated with CRM tracking.",
      },
    ],
    other: [
      "PPC Audits & Strategy Development",
      "Remarketing Campaigns",
      "Landing Page Optimization",
      "App Install Campaigns",
      "Call-Only Campaigns",
      "Seasonal & Event-Based PPC",
      "App Promotion Campaigns",
      "Conversion Rate Optimisation (CRO)",
      "Geo-Fencing & Location-Based Ads",
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
const [activeTab, setActiveTab] = useState<TabKey>("whiteLabel");

  const current = tabContent[activeTab];

  return (
    <section className="services">
      <h2 className="services__title">
        Digital Marketing Solutions Built to Scale Your Brand
      </h2>

      {/* Tabs */}
      <div className="services__tabs">
        <button onClick={() => setActiveTab("whiteLabel")}>White Label Services</button>
        <button onClick={() => setActiveTab("seo")}>SEO Services</button>
        <button onClick={() => setActiveTab("ppc")}>PPC Services</button>
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

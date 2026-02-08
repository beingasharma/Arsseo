import React from "react";
import "./seo.css";

type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "Keyword Research & Mapping",
    desc: "We identify high-intent keywords and map them correctly to each page for maximum relevance."
  },
  {
    title: "Meta Tags Optimization",
    desc: "SEO-friendly title tags and descriptions crafted to improve rankings and click-through rates."
  },
  {
    title: "Content Optimization",
    desc: "We refine your page content to match search intent while keeping it natural and engaging."
  },
  {
    title: "Header Tags Structure",
    desc: "Proper H1–H6 hierarchy to help search engines understand your content clearly."
  },
  {
    title: "Internal Linking",
    desc: "Strategic internal links to improve crawlability and distribute page authority."
  },
  {
    title: "Image Optimization",
    desc: "Compressed images with descriptive alt tags for faster loading and better accessibility."
  },
  {
    title: "Page Speed Improvements",
    desc: "Technical enhancements to reduce load time and boost Core Web Vitals."
  },
  {
    title: "Schema Markup",
    desc: "Structured data implementation to enhance visibility in rich search results."
  }
];

const steps: string[] = [
  "Website & Technical Audit",
  "Keyword Research & Page Mapping",
  "On-Page Optimization",
  "Quality Check & Fixes",
  "Performance Monitoring"
];

const OnPageSEO: React.FC = () => {
  return (
    <div className="onpage-seo">
      {/* Hero Section */}
      <section className="hero">
        <h1>On-Page SEO Services</h1>
        <p>
          Improve your website’s visibility, rankings, and user experience with
          our data-driven on-page SEO solutions.
        </p>
        <button>Get Free SEO Audit</button>
      </section>

      {/* About Section */}
      <section className="about">
        <div>
          <h2>What Is On-Page SEO?</h2>
          <p>
            On-page SEO focuses on optimizing individual pages of your website
            so search engines and users can easily understand your content.
            From keywords and content to technical elements, every detail
            matters.
          </p>
        </div>

        <div className="about-box">
          <span role="img" aria-label="rocket">
            🚀
          </span>
          <p>Optimized pages rank better, load faster, and convert more users.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What’s Included in Our On-Page SEO</h2>

        <div className="services-grid">
          {services.map((item: Service, index: number) => (
            <div className="service-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>Our SEO Process</h2>

        <div className="steps">
          {steps.map((step: string, index: number) => (
            <div className="step" key={index}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Optimize Your Website?</h2>
        <p>
          Let our SEO experts improve your rankings, traffic, and conversions.
        </p>
        <button>Request a Free Consultation</button>
      </section>
    </div>
  );
};

export default OnPageSEO;

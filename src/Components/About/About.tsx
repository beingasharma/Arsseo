import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../../images/about-us.jpg';
import { ChoseUs } from './ChoseUs';
import './about.css';

const chooseData = [
  {
    icon: 'ri-settings-2-line',
    title: 'Complete SEO Audit and Discovery',
    description:
'We start with a comprehensive website audit and a detailed discovery session to understand your goals, target audience, and competitive strengths. This helps us uncover performance gaps and key opportunities, forming the foundation for a focused and effective SEO strategy.'  },
  {
    icon: 'ri-team-line',
    title: 'Competitor Performance and Gap Analysis',
    description:
'We analyze your competitors to understand their backlink strategies, top-ranking keywords, and overall SEO strengths. These insights allow us to build a stronger, data-driven strategy that helps you outrank them, boost brand visibility, and lead your market.'  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Customized SEO Strategy with Clear Road Map',
    description:
'Every business needs a personalized SEO strategy. As your local SEO company, we build a custom plan aligned with your goals and backed by a clear execution timeline—ensuring steady progress, focused efforts, and measurable results.'  },
{
    icon: 'ri-customer-service-2-line',
    title: 'Technical SEO for Website Health',
    description:
'Our technical SEO specialists address backend issues that impact speed and user experience. We enhance page performance, mobile usability, site structure, and indexing to ensure your website is fast, secure, and fully optimized for search engines.'  },
{
    icon: 'ri-customer-service-2-line',
    title: 'On-Page SEO for Maximum Visibility',
    description:
'We optimize each web page through on-page SEO—improving meta tags, headers, keywords, and internal links. This increases content relevance, enhances engagement, and helps search engines index your pages more effectively.'  },
{
    icon: 'ri-customer-service-2-line',
    title: 'Authority Building Through Off-Page SEO',
    description:
'We grow your domain authority with ethical off-page SEO—guest posts, citations, and brand mentions. Quality backlinks from relevant sources help improve your rankings and strengthen search engine trust.'  },
{
    icon: 'ri-customer-service-2-line',
    title: 'Keyword-Focused Content Development',
    description:
'We create engaging, SEO-optimized content tailored to your audience’s needs. Whether it’s website copy or blog articles, our content is keyword-rich, informative, and designed to guide users toward taking action.'  },
{
    icon: 'ri-customer-service-2-line',
    title: 'Transparent SEO Progress Reporting',
    description:
'We continuously track your website’s SEO metrics and share simple, transparent reports. From keyword positions to traffic insights and conversions, you’ll always have a clear view of your campaign’s performance.'  },

{
    icon: 'ri-customer-service-2-line',
    title: 'Organic Lead Tracking and Feedback Integration',
    description:
'We review the leads you gain from organic search and evaluate their quality to fine-tune your SEO approach. Our goal is to increase high-intent leads and ensure your campaign drives real business results.'  },

];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="about__wrapper">
          <div className="about__content">
            {/* <h6 className="subtitle">Why choose us</h6> */}
            <h2>High-Quality SEO Services from</h2>
            <h2 className="highlight">a Trusted SEO Agency</h2>
            {/* <p className="description about__content-desc">
              At our company, we understand that navigating financial
              challenges can be daunting. That's why we offer expert
              advice and guidance to help you make informed decisions
              and achieve your financial goals.
            </p> */}
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          {/* <div className="about__img">
            <img src={aboutImg} alt="about-us" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

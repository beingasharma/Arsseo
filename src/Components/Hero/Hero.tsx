import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h2>Your Path to Higher Rankings</h2>
              <h2>and Increased Web </h2>
              <h2 className="highlight">Traffic Starts Here</h2>
            </div>
            <p className="description">
              Grow your business with ARS SEO Agency, where strategy meets performance. We create customized SEO campaigns that increase rankings, drive targeted traffic, and improve conversions. Our approach combines technical expertise, content optimization, and ongoing analysis to deliver consistent and scalable results
            </p>
            <div className="hero__btns">
  <button
    className="primary__btn"
    onClick={() => {
      document
        .getElementById('newsletter')
        ?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Get Started Now
  </button>
              <button className="secondary__btn">
                Discover More
              </button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={
                theme === '' ? darkThemeHeroImg : lightThemeHeroImg
              }
              alt="hero-img"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './newsletter.css';

export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="newsletter" ref={ref}>
      <div className="container">
        <div className="newsletter__wrapper">
          <h2
            style={{
              transform: isInView ? 'none' : 'translateY(-30px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s ease-out',
            }}
          >
            <span className="highlight"> Send Us a Message</span>
          </h2>

          <form
            className="newsletter__form contact-form"
            style={{
              transform: isInView ? 'none' : 'translateY(30px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s ease-out 0.2s',
            }}
          >
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Enter Your Message" rows={4}></textarea>

            <button type="submit" className="primary__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './newsletter.css';

export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="newsletter" className="contact-section" ref={ref}>
      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div
          className="contact-left"
          style={{
            transform: isInView ? 'none' : 'translateX(-40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.6s ease-out',
          }}
        >
          <h2>
            Let’s Make Your Brand <br />
            <span>Unmissable</span>, While Your <br />
            Competitors Wonder How You Did It!
          </h2>

          <p>
            Have questions? Reach out to the team and discover what’s possible
            when strategy, creativity, and performance come together.
          </p>

          <p className="sub-text">
            We are here to listen, collaborate, and help you shine — louder and
            longer.
          </p>

          {/* <button className="primary__btn">Call Us Now</button> */}
        </div>

        {/* RIGHT FORM */}
        <div
          className="contact-right"
          style={{
            transform: isInView ? 'none' : 'translateX(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.6s ease-out 0.2s',
          }}
        >
          <form className="contact-form">
            <div className="form-grid">
              <div>
                <label>Full Name *</label>
                <input type="text" placeholder="Your Name" required />
              </div>

              <div>
                <label>Email *</label>
                <input type="email" placeholder="Your Email" required />
              </div>

              <div>
                <label>Phone Number *</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>

              <div>
                <label>Website URL</label>
                <input type="text" placeholder="Your Website" />
              </div>

              <div>
                <label>Looking for</label>
                <select>
                  <option>Please choose an option</option>
                  <option>Web Design</option>
                  <option>SEO</option>
                  <option>PPC</option>
                </select>
              </div>
           
            </div>

            <div className="full-width">
              <label>How we can help?</label>
              <textarea rows={4} placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

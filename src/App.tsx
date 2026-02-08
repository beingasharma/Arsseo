import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About } from './Components/About/About';
import { Blog } from './Components/Blog/Blog';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Services } from './Components/Services/Services';
import { Service } from './Components/Service/Service';
import { Team } from './Components/Team/Team';
import { Testimonial } from './Components/Testimonial/Testimonial';

import OnPageSEO from './Components/Servicedetail/seo';

function App() {
  const [theme, setTheme] = useState<string>('');

  const changeTheme = () => {
    setTheme(theme === '' ? 'light-theme' : '');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Header theme={theme} changeTheme={changeTheme} />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main>
              <Hero theme={theme} />
              <Service />
              <Services />
              <About />
              <Team />
              <Blog />
              <Testimonial />
              <Newsletter />
            </main>
          }
        />

        {/* SERVICE DETAIL PAGE */}
        <Route
          path="/services/on-page-seo"
          element={<OnPageSEO />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

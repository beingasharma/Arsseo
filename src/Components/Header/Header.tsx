import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

interface Props {
  theme: string;
  changeTheme: () => void;
}

export const Header: FC<Props> = ({ theme, changeTheme }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const nav__links = [
  { path: '/', display: 'Home' },

  {
    display: 'Services',
    dropdown: [
      {
        path: '/services/on-page-seo',
        display: 'Search Engine Optimization (SEO)',
      },
      {
        path: '/services/ppc',
        display: 'Pay Per Click (PPC) Management',
      },
      {
        path: '/services/social-media',
        display: 'Social Media Marketing',
      },
      {
        path: '/services/content-marketing',
        display: 'Content Marketing',
      },
      {
        path: '/services/email-marketing',
        display: 'Email Marketing',
      },
      {
        path: '/services/ecommerce-marketing',
        display: 'E-Commerce Marketing',
      },
      {
        path: '/services/website-design',
        display: 'Website Design',
      },
      {
        path: '/services/custom-website-design',
        display: 'Custom Website Design',
      },
      {
        path: '/services/ecommerce-web-design',
        display: 'E-Commerce Web Design',
      },
      {
        path: '/services/graphic-designing',
        display: 'Graphic Designing',
      },
    ],
  },

  { path: '/#about', display: 'About' },
  { path: '/#blog', display: 'Blog' },
  { path: '/#newsletter', display: 'Contact Us' },
];


  const changeStickiness = () => {
    if (document.documentElement.scrollTop > 80) {
      headerRef.current?.classList.add('header__shrink');
    } else {
      headerRef.current?.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeStickiness);
    return () =>
      window.removeEventListener('scroll', changeStickiness);
  }, []);

  const toggleMobileMenu = () => {
    menuRef.current?.classList.toggle('menu__active');
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src="/icon.png" alt="ARS Digital Solutions" />
            </Link>
          </div>

          {/* NAV */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu">
              {nav__links.map((item, idx) => (
                <li
                  key={idx}
                  className={`menu__item ${
                    item.dropdown ? 'has-dropdown' : ''
                  }`}
                >
                  {item.dropdown ? (
                    <>
                      <span className="menu__link">
                        {item.display}
                        <i className="ri-arrow-down-s-line" />
                      </span>

                      <ul className="dropdown">
                        {item.dropdown.map((d, i) => (
                          <li key={i}>
                            <Link
                              to={d.path}
                              onClick={() =>
                                menuRef.current?.classList.remove(
                                  'menu__active'
                                )
                              }
                            >
                              {d.display}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="menu__link"
                    >
                      {item.display}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
<div className="right-menu">
            <div className="light__mode">
              <button onClick={changeTheme}>
                {theme === 'light-theme' ? (
                  <>
                    <i className="ri-moon-line" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <i className="ri-sun-line" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>

            <span className="mobile__menu" onClick={toggleMobileMenu}>
              <i className="ri-menu-line" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

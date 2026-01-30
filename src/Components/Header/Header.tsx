import { FC, useEffect, useRef } from 'react';
import './header.css';

interface Props {
  theme: string;
  changeTheme: () => void;
}

export const Header: FC<Props> = ({ theme, changeTheme }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const nav__links = [
    { path: '#home', display: 'Home' },
    { path: '#newsletter', display: 'Contact Us' },
    {
      display: 'Services',
      dropdown: [
        { path: '#web', display: 'Search Engine Optimization (SEO)' },
        { path: '#app', display: 'Pay Per Click (PPC) Management' },
        { path: '#seo', display: 'Social Media Marketing' },
        { path: '#design', display: 'Content Marketing' },
        { path: '#design', display: 'Email Marketing' },
        { path: '#design', display: 'E-Commerce Marketing' },
        { path: '#design', display: 'Website Design' },
        { path: '#design', display: 'Custom Website Design' },
        { path: '#design', display: 'E-Commerce Web Design' },
        { path: '#design', display: 'Graphic Designing' },

      ],
    },
    { path: '#about', display: 'About' },
    { path: '#blog', display: 'Blog' },
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
    return () => window.removeEventListener('scroll', changeStickiness);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;
    const targetAttribute = target.getAttribute('href');

    if (targetAttribute) {
      const element = document.querySelector(targetAttribute) as HTMLElement;
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }

    // close mobile menu after click
    menuRef.current?.classList.remove('menu__active');
  };

  const toggleMobileMenu = () =>
    menuRef.current?.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* LOGO */}
          <div className="logo">
            <a href="/">
              <img src="/icon.png" alt="ARS Digital Solutions" />
            </a>
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
                      <span
                        className="menu__link"
                        onClick={(e) => {
                          e.stopPropagation();
                          const parent = e.currentTarget.parentElement;
                          parent?.classList.toggle('active');
                        }}
                      >
                        {item.display}
                        <i className="ri-arrow-down-s-line" />
                      </span>

                      <ul className="dropdown">
                        {item.dropdown.map((d, i) => (
                          <li key={i}>
                            <a
                              href={d.path}
                              onClick={handleLinkClick}
                            >
                              {d.display}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      {item.display}
                    </a>
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

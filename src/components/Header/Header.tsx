import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.compat.css';

import { MENU } from '../../utils/constants';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { Socials } from '../Socials/Socials';
import { Hamburger } from './Hamburger';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav className="menu">
          {MENU.map((title, i) => {
            return (
              <ScrollAnimation
                key={title.link}
                className="menu-item"
                animateIn="fadeInDown"
                delay={i * 100}
                offset={0}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={`/${title.link}`}
                >
                  {title.name}
                </NavLink>
              </ScrollAnimation>
            );
          })}
        </nav>

        <Socials />

        <Hamburger />
      </div>
    </header>
  );
};

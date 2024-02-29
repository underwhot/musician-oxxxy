import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.compat.css';

import { MENU } from '../../utils/constants';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Socials } from '../Socials/Socials';

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
                <Link to={`/${title.link}`}>{title.name}</Link>
              </ScrollAnimation>
            );
          })}
        </nav>

        <Socials />
      </div>
    </header>
  );
};

import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { MENU } from '../../utils/constants';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import ScrollAnimation from 'react-animate-on-scroll';

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="menu-mobile">
      <div className="menu-mobile__button" onClick={toggleMenu}>
        <Icon name="round-menu" />
      </div>

      <nav className={`menu-mobile__list ${isOpen ? 'opened' : ''}`}>
        <Logo onClick={toggleMenu} />

        <ul className="menu-mobile__items">
          {MENU.map(({ link, name }, i) => (
            <li className="menu-mobile__item" key={name}>
              <NavLink
                className={({ isActive }) =>
                  !link.startsWith('#') && isActive ? 'active' : ''
                }
                to={`/${link}`}
                onClick={toggleMenu}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="menu-mobile__button" onClick={toggleMenu}>
          <Icon name="round-close" />
        </div>
      </nav>
    </div>
  );
};

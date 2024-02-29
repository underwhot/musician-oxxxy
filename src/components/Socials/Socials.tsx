import { Icon } from '../Icon/Icon';
import { SOCIALS } from '../../utils/constants';

export const Socials = () => {
  return (
    <ul className="socials">
      {SOCIALS.map((social) => {
        return (
          <li title={social.icon} className="socials-item" key={social.icon}>
            <a href={social.link} target="_blank">
              <Icon name={social.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

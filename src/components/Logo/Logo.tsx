import { Link } from 'react-router-dom';
import LOGO from '/images/logo.webp';

export const Logo = ({ onClick = () => {} }) => {
  return (
    <div className="logo">
      <Link onClick={onClick} to="/">
        <img src={LOGO} alt="logotype" />
      </Link>
    </div>
  );
};

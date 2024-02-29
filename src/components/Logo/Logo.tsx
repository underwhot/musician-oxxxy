import { Link } from 'react-router-dom';
import LOGO from '/images/logo.webp';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LOGO} alt="logotype" />
      </Link>
    </div>
  );
};

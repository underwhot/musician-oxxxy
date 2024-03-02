import { Logo } from '../Logo/Logo';
import { Socials } from '../Socials/Socials';
import { FooterForm } from './FooterForm';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <FooterForm />
          <div className="footer-info">
            <Logo />
          </div>

          <Socials width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

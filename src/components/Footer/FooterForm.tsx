import { ChangeEvent, FormEvent, useState } from 'react';
import { Icon } from '../Icon/Icon';

export const FooterForm = () => {
  const [state, setState] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState('');
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <p>Oxxxymiron's onlyfans</p>

      <div className="footer-form__email">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state}
          onChange={handleChange}
          required
          autoComplete='off'
        />
      </div>
      <button type="submit" className="footer-form__button">
        <span>Subscribe</span>
        <Icon name="arrow-right" />
      </button>
    </form>
  );
};

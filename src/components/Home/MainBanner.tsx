import { Section } from '../Section/Section';

import VIDEO from '/images/text.webm';

export const MainBanner = () => {
  return (
    <Section className="hero">
      <h1 style={{ fontSize: 0, lineHeight: 0 }}>Oxxximiron</h1>
      <div className="banner">
        <video
          className="banner-video"
          width={1000}
          height="auto"
          loop
          muted
          autoPlay
        >
          <source src={VIDEO} type="video/webm" />
        </video>
      </div>
    </Section>
  );
};

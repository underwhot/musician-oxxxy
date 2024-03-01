import { Section } from '../Section/Section';

import VIDEO from '/images/oxxxytour.mp4';

export const TourBanner = () => {
  return (
    <Section className="tour-banner">
      <div className="container">
        <video loop muted autoPlay>
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>
    </Section>
  );
};

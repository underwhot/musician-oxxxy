import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTrackItems } from '../../hooks/useTrackItems';

import { Section } from '../Section/Section';
import { SectionTitle } from '../Title/SectionTitle';
import { Loader } from '../Loader/Loader';

import { getLocaleDateString } from '../../utils/common';

export const Tracks = () => {
  const { trackItems, isLoading } = useTrackItems();

  return (
    <Section className="tracks-section">
      <div className="container">
        <SectionTitle text="Tracks" />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="tracks">
            {trackItems
              .filter((_, i) => i < 3)
              .map((track) => (
                <ScrollAnimation
                  key={track.sys.id}
                  className="track-item"
                  animateIn="fadeInLeft"
                  animateOut="fadeOutRight"
                >
                  <div className="track">
                    <div className="track-image">
                      <img src={track.cover.url} alt={track.title} />
                      {/* <Icon name="pause" /> */}
                    </div>
                    <p className="track-date">
                      {getLocaleDateString(track.date, { month: 'short' })}
                    </p>
                    <h3 className="track-title">{track.title}</h3>
                  </div>
                </ScrollAnimation>
              ))}
          </div>
        )}

        <Link to="/tracks" className="button-more">
          All tracks
        </Link>
      </div>
    </Section>
  );
};

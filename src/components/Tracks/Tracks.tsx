import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { AppDispatch } from '../../redux/store';
import {
  getTrackItems,
  selectIsLoading,
  selectTrackItems,
} from '../../redux/slices/trackSlice';

import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Icon } from '../Icon/Icon';

import { getLocaleDateString } from '../../utils/common';

export const Tracks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tracks = useSelector(selectTrackItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getTrackItems());
  }, [dispatch]);

  return (
    <Section className="tracks-section">
      <div className="container">
        <SectionTitle text="Tracks" />

        {isLoading ? (
          'LOADING'
        ) : (
          <div className="tracks">
            {tracks
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

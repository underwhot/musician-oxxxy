import { useTrackItems } from '../../hooks/useTrackItems';
import { getLocaleDateString } from '../../utils/common';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';
import { PageTitle } from '../Title/PageTitle';

export const TracksPage = () => {
  const { trackItems, isLoading } = useTrackItems();

  return (
    <section className="tracks-page page">
      <div className="container">
        <PageTitle text="All tracks" />

        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tracks-list">
            {trackItems.map((track) => {
              const {
                sys: { id },
                title,
                cover,
                date,
                description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, porro quo repellendus aliquam necessitatibus, minima deserunt vero unde, perferendis officiis labore quia ipsa? Inventore est, possimus earum corporis voluptates iste.',
              } = track;

              // const iconName =
              //   playing && id === currentTrack?.sys?.id ? 'pause' : 'play';

              return (
                <li key={id} className="tracks-list__item">
                  <div className="tracks-list__item-image">
                    <img src={cover.url} alt={title} />
                  </div>

                  <div className="tracks-list__item-info">
                    <p className="tracks-list__item-date">
                      {getLocaleDateString(date, { month: 'short' })}
                    </p>
                    <h2 className="tracks-list__item-title">{title}</h2>
                    <p className="tracks-list__item-description">
                      {description}
                    </p>
                  </div>

                  <button className="tracks-list__item-button">
                    <span>слушать</span>
                    <Icon name='play' />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

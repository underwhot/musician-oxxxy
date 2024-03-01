import ScrollAnimation from 'react-animate-on-scroll';
import { TourItem as TourItemState } from '../../redux/slices/tourSlice';
import { getLocaleDateString } from '../../utils/common';
import { Icon } from '../Icon/Icon';

interface TourItemProps extends TourItemState {
  i: number;
  offset?: number;
}

export const TourItem = ({
  i,
  date,
  place,
  city,
  soldOut,
  ticketLink,
  videoLink,
  offset = 150,
  country,
}: TourItemProps) => {
  return (
    <li>
      <ScrollAnimation
        className="tour-item"
        animateIn="fadeInLeft"
        animateOut="fadeOutRight"
        delay={i * 100}
        offset={offset}
      >
        <div className="tour-item__info">
          <div className="tour-item__date">{getLocaleDateString(date, {})}</div>
          <p className="tour-item__place">{place}</p>
        </div>

        <p className="tour-item__city">
          {city}, {country}
        </p>

        {!soldOut ? (
          <a
            href={ticketLink || videoLink}
            target="_blank"
            className="tour-item__button"
          >
            {ticketLink ? (
              <>
                <span>Tickets</span>
                <Icon name="arrow-right" />
              </>
            ) : (
              <span>VIDEO</span>
            )}
          </a>
        ) : (
          <button type="button" className="tour-item__button soldout">
            SOLD OUT
          </button>
        )}
      </ScrollAnimation>
    </li>
  );
};

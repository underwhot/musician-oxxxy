import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import {
  getTourItems,
  selectIsLoading,
  selectTourItems,
} from '../../redux/slices/tourSlice';

import { Section } from '../Section/Section';
import { TourItem } from './TourItem';
import { Link } from 'react-router-dom';
import { sortByDate } from '../../utils/common';

export const TourItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tourItems = useSelector(selectTourItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

  const filtred = sortByDate(
    tourItems
      .filter((item) => !item.soldOut && item.ticketLink)
      .filter((_, i) => i < 5)
  );

  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Concerts" />
        {isLoading ? (
          'LOADNIG'
        ) : (
          <ul className="tour-list">
            {filtred.map((item, i) => (
              <TourItem i={i} {...item} key={item.sys.id} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          All concerts
        </Link>
      </div>
    </Section>
  );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { SectionTitle } from '../Title/SectionTitle';
import {
  getTourItems,
  selectIsLoading,
  selectTourItems,
} from '../../redux/slices/tourSlice';

import { Section } from '../Section/Section';
import { TourItem } from './TourItem';
import { Link } from 'react-router-dom';
import { sortByDate } from '../../utils/common';
import { Loader } from '../Loader/Loader';
import { useTourItems } from '../../hooks/useTourItems';

export const TourItems = () => {
  const { tourItems, isLoading } = useTourItems();

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
          <Loader />
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

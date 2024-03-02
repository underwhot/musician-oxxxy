import { useEffect } from 'react';
import { getLocaleDateString } from '../../utils/common';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  getNewsItem,
  selectIsLoading,
  selectNewsItem,
} from '../../redux/slices/newsSlice';

export const NewsSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const item = useSelector(selectNewsItem);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!id) return;

    dispatch(getNewsItem(id));
  }, [dispatch]);

  return (
    <section className="page news-single">
      <div className="container">
        {isLoading || !item ? (
          <Loader />
        ) : (
          <div className="news-single__item">
            <h1 className="news-single__item-title">{item.title}</h1>
            <p className="news-single__item-date">
              {getLocaleDateString(item.date, { month: 'short' })}
            </p>
            <div className="news-single__item-content">
              {/* {jsonToText(item.description.json)} */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

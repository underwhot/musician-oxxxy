import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  getNewsItems,
  selectIsLoading,
  selectNewsItems,
} from '../redux/slices/newsSlice';

export const useNewsItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newsItems = useSelector(selectNewsItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !newsItems.length && dispatch(getNewsItems());
  }, [newsItems, dispatch]);

  return { newsItems, isLoading };
};

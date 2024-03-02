import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { getTourItems, selectIsLoading, selectTourItems } from '../redux/slices/tourSlice';

export const useTourItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tourItems = useSelector(selectTourItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !tourItems.length && dispatch(getTourItems());
  }, [tourItems, dispatch]);

  return { tourItems, isLoading };
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import {
  getTrackItems,
  selectIsLoading,
  selectTrackItems,
} from '../redux/slices/trackSlice';

export const useTrackItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const trackItems = useSelector(selectTrackItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !trackItems.length && dispatch(getTrackItems());
  }, [trackItems, dispatch]);

  return { trackItems, isLoading };
};

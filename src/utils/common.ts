import { MAIN_URL } from './constants';
import { TourItem } from '../redux/slices/tourSlice';

export const request = async (query: string) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sortByDate = (arr: TourItem[]) => {
  return arr.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const getLocaleDateString = (
  date: string | number | Date,
  {
    month = 'numeric',
    day = 'numeric',
    year = 'numeric',
  }: Intl.DateTimeFormatOptions
) =>
  new Date(date).toLocaleDateString('ru-RU', {
    month,
    day,
    year,
  });

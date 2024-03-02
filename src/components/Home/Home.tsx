import { News } from '../News/News';
import { Tour } from '../Tour/Tour';
import { Tracks } from '../Tracks/Tracks';
import { MainBanner } from './MainBanner';
import { ShopBanner } from './ShopBanner';
import { TourBanner } from './TourBanner';

export const Home = () => {
  return (
    <>
      <MainBanner />
      <Tour />
      <TourBanner />
      <Tracks />
      <ShopBanner />
      <News />
    </>
  );
};

import { Tour } from '../Tour/Tour';
import { Tracks } from '../Tracks/Tracks';
import { MainBanner } from './MainBanner';
import { TourBanner } from './TourBanner';

export const Home = () => {
  return (
    <main className="main">
      <MainBanner />
      <Tour />
      <TourBanner />
      <Tracks />
    </main>
  );
};

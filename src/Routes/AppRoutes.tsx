import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home/Home';
import { TourPage } from '../components/Tour/TourPage';
import { TracksPage } from '../components/Tracks/TracksPage';
import { NewsPage } from '../components/News/NewsPage';
import { NewsSingle } from '../components/News/NewsSingle';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsSingle />} />
    </Routes>
  );
};

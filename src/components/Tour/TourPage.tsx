import { useCallback, useEffect, useState } from 'react';
import { useTourItems } from '../../hooks/useTourItems';

import { Loader } from '../Loader/Loader';
import { PageTitle } from '../Title/PageTitle';
import { TourItem as TourItemState } from '../../redux/slices/tourSlice';
import { TourItem } from './TourItem';

export const TourPage = () => {
  const { tourItems, isLoading } = useTourItems();

  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [filtred, setFiltred] = useState<TourItemState[]>([]);

  const tabs = [...new Set(tourItems.map((item) => item.country))];

  const toggleTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setFiltred(tourItems.filter((item) => item.country === tab));
    },
    [tourItems]
  );

  useEffect(() => {
    if (tabs.length && !activeTab) toggleTab(tabs[0]);
  }, [tabs, activeTab]);

  return (
    <section className="tour-page page">
      <div className="container">
        <PageTitle text="All concerts" />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="tour-tabs">
              {tabs.map((tab) => (
                <li
                  onClick={() => {
                    toggleTab(tab);
                  }}
                  key={tab}
                  className={`tour-tab ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <ul className="tour-items">
              {filtred.map((item, i) => (
                <TourItem key={item.sys.id} {...item} i={i} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

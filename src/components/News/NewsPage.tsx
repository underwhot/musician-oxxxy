import { Link } from 'react-router-dom';
import { useNewsItems } from '../../hooks/useNewsItems';

import { Loader } from '../Loader/Loader';
import { PageTitle } from '../Title/PageTitle';
import { Icon } from '../Icon/Icon';

import { getLocaleDateString } from '../../utils/common';

export const NewsPage = () => {
  const { newsItems, isLoading } = useNewsItems();

  return (
    <section className="news-page page">
      <div className="container">
        <PageTitle text="Все новости" />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="news-list">
            {newsItems.map(({ title, date, cover: { url }, sys: { id } }) => {
              return (
                <div className="news-list__item" key={id}>
                  <div
                    className="news-list__item-img"
                    style={{ backgroundImage: `url(${url})` }}
                  />
                  <div className="news-list__item-info">
                    <p className="news-list__item-date">
                      {getLocaleDateString(date, { month: 'short' })}
                    </p>
                    <h2 className="news-list__item-title">{title}</h2>
                    <Link to={`/news/${id}`} className="news-list__item-button">
                      <span>Читать</span>
                      <Icon name="arrow-right" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

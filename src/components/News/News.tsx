import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  getNewsItems,
  selectIsLoading,
  selectNewsItems,
} from '../../redux/slices/newsSlice';
import { useCallback, useEffect, useRef } from 'react';
import { Section } from '../Section/Section';
import { SectionTitle } from '../Title/SectionTitle';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';

export const News = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<SwiperRef>(null);

  const news = useSelector(selectNewsItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getNewsItems());
  }, [dispatch]);

  const handleButtonClick = useCallback((type: string) => {
    if (!ref.current) return;

    const { swiper } = ref.current;
    type === 'NEXT' ? swiper.slideNext() : swiper.slidePrev();
  }, []);

  return (
    <Section className="news-section">
      <div className="container">
        <SectionTitle text="News" />

        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            ref={ref}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            modules={[Navigation]}
            breakpoints={{
              1366: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1.3,
              },
            }}
          >
            {news.map((item, i) => (
              <SwiperSlide key={item.sys.id}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  delay={i * 100}
                >
                  <Link className="news-item" to={`/news/${item.sys.id}`}>
                    <div className="news-item__img">
                      <img src={item.cover.url} alt={item.title} />
                    </div>
                    <h3 className="news-item__title">{item.title}</h3>
                  </Link>
                </ScrollAnimation>
              </SwiperSlide>
            ))}

            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleButtonClick('PREV')}
              >
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleButtonClick('NEXT')}
              >
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Section>
  );
};

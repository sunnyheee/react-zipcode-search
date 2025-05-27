import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import HistoryCard from './HistoryCard';
import '../styles/historylist.scss';
import '../styles/historylistslide.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Address = {
  zipcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};

type Props = {
  history: Address[][];
};

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function HistoryListSlide({ history }: Props) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const groupedHistory = isMobile ? chunkArray(history, 3) : history.map((h) => [h]);

  return (
    <div className="history-list">
      <h2>検索履歴（スライド）</h2>
      <div className="swiper-wrapper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          loop={false}
        >
          {groupedHistory.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="history-slide-group">
                {group.map((item, idx) => (
                  <HistoryCard key={idx} data={item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </div>
  );
}

export default HistoryListSlide;

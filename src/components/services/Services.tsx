'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from './service-card';
import { Service } from '@/types';
import { Autoplay } from 'swiper';
import Alert from '../ui/alert';
import { useServicesQuery } from '@/rest-client/get-services';

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
  992: {
    slidesPerView: 2,
    spaceBetween: 48,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 56,
  },
};

export default function Services() {
  const { data, isLoading, error } = useServicesQuery();

  if (error) return <Alert message={error?.message} />;

  return (
    <div className="py-[100px] md:py-28 lg:py-32 xl:py-[150px] dark:bg-dark">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="container">
          <div className="-mt-1">
            <Swiper
              breakpoints={breakpoints}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              speed={1000}
              modules={[Autoplay]}
            >
              {data?.services?.data?.map((item: Service) => (
                <SwiperSlide key={item?.id}>
                  <ServiceCard service={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

import { Brand, Testimonial } from "@/types";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";
import TestimonialCard from "./TestimonialCard";
import { useTestimonialsQuery } from "@/rest-client/get-testimonials";
import { useBrandsQuery } from "@/rest-client/get-brands";
import cn from "classnames";
import { Element } from "react-scroll";
import NextPrevButton from "../ui/NextPrevButton";

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  420: {
    slidesPerView: 3,
  },
  600: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 5,
  },
  992: {
    slidesPerView: 3,
  },
  1280: {
    slidesPerView: 5,
  },
};

function Brands({ data }: { data: Brand[] }) {
  return (
    <div className="bg-white-smoke dark:bg-dark-smoke">
      <div className="container">
        <div className="ltr:lg:pr-10 rtl:lg:pr-8 rtl:lg:pl-2 lg:w-7/12 2xl:w-8/12">
          <div className="py-6 swiper client-brands-swiper md:py-12">
            <Swiper
              breakpoints={breakpoints}
              loop
              autoplay={{
                delay: 2000,
              }}
              speed={1000}
              modules={[Autoplay]}
            >
              {data.map((item: Brand) => (
                <SwiperSlide
                  key={item?.id}
                  className="flex items-center justify-center py-6"
                >
                  <BrandCard brand={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonialsQuery();
  const { data: brandsData } = useBrandsQuery();
  return (
    <section
      className={cn(
        "dark:bg-dark pt-[100px] md:pt-28 lg:pt-[130px] xl:pt-[150px]",
        {
          "pb-[100px] md:pb-28 lg:pb-[130px] xl:pb-[150px]":
            !brandsData?.brands.data.length,
        }
      )}
    >
      <div className="container">
        <div className="flex flex-col md:items-end md:justify-between lg:flex-row">
          <div className="pb-12 md:pb-14 lg:pb-[120px] w-full lg:w-7/12 2xl:w-8/12 shrink-0">
            <div className="-mt-1 relative mb-8 md:mb-12 lg:mb-[70px]">
              <div className="flex items-center text-black font-bold text-sm tracking-[0.5px] dark:text-white">
                03.
                <span className="relative lrt:pl-14 rtl:pr-14 ltr:md:pl-[70px] rtl:md:pr-[70px] before:absolute before:w-9 before:h-px before:bg-black before:z-10 md:before:w-12 rtl:before:right-2.5 ltr:before:left-2.5 before:top-[45%] dark:before:bg-white">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="font-bold text-[32px] xl:text-[44px] mt-6 tracking-[1px] pt-0.5 leading-snug">
                WHAT CLIENT SAY <br />
                ABOUT <span className="text-stroke-1">MY WORK.</span>
              </h2>
            </div>
            <button className="btn btn-primary modalToggle">
              <span>CONTACT ME</span>
            </button>
          </div>
          <div className="w-full lg:w-5/12 2xl:w-4/12 ltr:lg:pl-3.5 ltr:2xl:pl-4 rtl:lg:pr-3.5 rtl:2xl:pr-4">
            <div className="lg:-mb-[134px] -mt-3 lg:mt-0 -mx-3 mb-[100px] shrink-0">
              <Swiper
                loop
                autoplay={{
                  delay: 2000,
                }}
                speed={1000}
                modules={[Autoplay]}
              >
                {data?.testimonials.data.map((item: Testimonial) => (
                  <SwiperSlide key={item?.id} className="p-3">
                    <TestimonialCard testimonial={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <NextPrevButton className="justify-center px-3 mt-6 lg:justify-end" nextActiveId="" prevActiveId="" />
            </div>
          </div>
        </div>
      </div>
      {brandsData?.brands.data.length && (
        <Brands data={brandsData?.brands.data} />
      )}
    </section>
  );
}

import { fetchTestimonials } from "@/rest-client/fetch-data";
import { Brand, Testimonial } from "@/types";
import { useState, useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";
import TestimonialCard from "./TestimonialCard";

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

export default function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    const getAllTestimonials = async () => {
      const allTestimonials = await fetchTestimonials();
      if (allTestimonials) {
        //@ts-ignore
        setTestimonialsData(allTestimonials);
      }
    };
    const getAllBrands = async () => {
      const allBrands = await fetchTestimonials();
      if (allBrands) {
        //@ts-ignore
        setBrandsData(allBrands);
      }
    };
    getAllTestimonials();
    getAllBrands();
  }, []);
  return (
    <section
      id="client"
      className="dark:bg-dark pt-[100px] md:pt-28 lg:pt-[130px] xl:pt-[150px]"
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
            <div className="swiper testimonial-swiper lg:-mb-[134px] -mt-3 lg:mt-0 -mx-3 mb-[100px] shrink-0">
              <Swiper
                loop
                autoplay={{
                  delay: 2000,
                }}
                speed={1000}
                modules={[Autoplay]}
              >
                {testimonialsData.map((item: Testimonial) => (
                  <SwiperSlide key={item?.id} className="p-3">
                    <TestimonialCard testimonial={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center justify-center px-3 mt-6 lg:justify-end testimonialNavLinks">
                <button className="btnPrev group bg-transparent border-0 text-xs font-semibold tracking-[0.2em] text-center inline-block uppercase relative transition-all h-10 px-0.5 py-1.5 lg:h-12 lg:tracking-[0.4em] text-gray-800 dark:text-gray-200 before:absolute before:top-0 before:transition-all before:h-10 before:w-12 lg:before:w-14 lg:before:h-12 before:border-t-2 before:border-gray-300 ltr:before:left-0 ltr:before:border-l-2 rtl:before:right-0 rtl:before:border-r-2 before:border-b-2 hover:text-black hover:before:border-black dark:before:border-gray-800 dark:hover:before:border-white">
                  <span className="block ltr:pr-2.5 ltr:pl-5 rtl:pl-2.5 rtl:pr-4 leading-loose relative z-10 after:absolute before:absolute before:w-0.5 before:transition-all before:bg-gray-300 before:h-1.5 lg:before:h-2 after:h-1.5 lg:after:h-2 after:transition-all after:bg-gray-300 dark:after:bg-gray-800 dark:before:bg-gray-800 after:w-0.5 before:-top-1.5 ltr:before:left-11 before:right-11 lg:before:right-[52px] ltr:lg:before:left-[52px] lg:before:-top-[11px] after:-bottom-1.5 lg:after:-bottom-[11px] rtl:after:right-11 rtl:lg:after:right-[52px] dark:group-hover:text-white group-hover:before:bg-black group-hover:after:bg-black dark:group-hover:after:bg-white dark:group-hover:before:bg-white ltr:after:left-11 ltr:lg:after:left-[52px]">
                    prev
                  </span>
                </button>
                <button className="btnNext group bg-transparent border-0 leading-loose text-xs font-semibold tracking-[0.2em] text-center inline-block uppercase relative after:absolute transition-all h-10 px-0.5 py-1.5 lg:h-12 lg:tracking-[0.4em] text-gray-800 dark:text-gray-200 before:absolute before:top-0 before:transition-all before:h-10 before:w-12 lg:before:w-14 lg:before:h-12 before:border-t-2 before:border-gray-300 ltr:before:right-0 rtl:before:left-0 ltr:before:border-r-2 rtl:before:border-l-2 before:border-b-2 hover:text-black hover:before:border-black dark:before:border-gray-800 dark:hover:before:border-white">
                  <span className="block ltr:pl-2.5 rtl:pr-2.5 ltr:pr-4 rtl:pl-5 relative z-10 before:absolute before:w-0.5 before:transition-all before:bg-gray-300 before:h-1.5 lg:before:h-2 after:absolute after:h-1.5 lg:after:h-2 after:transition-all after:bg-gray-300 dark:after:bg-gray-800 dark:before:bg-gray-800 after:w-0.5 before:-top-1.5 lg:before:-top-[11px] rtl:before:left-11 rtl:lg:before:left-[52px] ltr:before:right-11 rtl:after:left-11 rtl:lg:after:left-[52px] ltr:lg:before:right-[52px] after:-bottom-1.5 lg:after:-bottom-[11px] ltr:after:right-11 ltr:lg:after:right-[52px] group-hover:before:bg-black group-hover:after:bg-black dark:group-hover:after:bg-white dark:group-hover:before:bg-white dark:group-hover:text-white">
                    next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                {brandsData.map((item: Brand) => (
                  <SwiperSlide
                    key={item?.id}
                    className="flex items-center justify-center py-6"
                  >
                    <BrandCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

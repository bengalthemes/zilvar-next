import React from "react";

export default function Testimonial() {
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
              <div className="swiper-wrapper">
                <div className="p-3 swiper-slide">
                  <div className="relative p-6 bg-white rounded-md shadow-testimonial lg:p-8 dark:bg-gray-900">
                    <div className="relative flex items-center justify-start mb-6 border-b border-gray-100 pb-7 dark:border-gray-800">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img
                          src="assets/images/author/author-3.png"
                          alt="Client Image"
                        />
                      </div>
                      <div className="ltr:pl-4 rtl:pr-4 ltr:lg:pl-[18px] rtl:lg:pr-[18px] grow">
                        <h3 className="text-lg font-medium">Iruka Akuchi</h3>
                        <div className="text-gray-800 text-[13px] leading-[1.4em] dark:text-gray-500">
                          Developer at Git
                        </div>
                      </div>
                      <div className="absolute ltr:right-0.5 rtl:left-0.5 top-1 text-gray-100 text-[52px] flex dark:text-gray-800">
                        <em className="fa-solid fa-quote-right"></em>
                      </div>
                    </div>
                    <div className="relative leading-loose text-[15px] mb-6 text-gray-700 before:absolute before:top-0 before:z-10 before:w-0.5 before:h-full before:bg-gray-800 ltr:lg:before:-left-8 ltr:before:-left-6 rtl:before:-right-6 rtl:lg:before:-right-8 dark:text-gray-300 dark:before:bg-gray-400">
                      Amazing Support! Totally all over my issues and we were
                      changing it completely from being a place directory!
                      Loving the theme! Amazing Support!
                    </div>
                    <div className="inline-block bg-gray-50 dark:bg-dark rounded-3xl px-2.5 lg:px-3 xl:px-3.5 py-1.5 text-yellow text-xs">
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star-half-stroke"></em>
                    </div>
                  </div>
                </div>
                <div className="p-3 swiper-slide">
                  <div className="relative p-6 bg-white rounded-md shadow-testimonial lg:p-8 dark:bg-gray-900">
                    <div className="relative flex items-center justify-start mb-6 border-b border-gray-100 pb-7 dark:border-gray-800">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img
                          src="assets/images/author/author-1.png"
                          alt="Client Image"
                        />
                      </div>
                      <div className="ltr:pl-4 rtl:pr-4 ltr:lg:pl-[18px] rtl:lg:pr-[18px] grow">
                        <h3 className="text-lg font-medium">Iruka Akuchi</h3>
                        <div className="text-gray-800 text-[13px] leading-[1.4em] dark:text-gray-500">
                          Developer at Git
                        </div>
                      </div>
                      <div className="absolute ltr:right-0.5 rtl:left-0.5 top-1 text-gray-100 text-[52px] flex dark:text-gray-800">
                        <em className="fa-solid fa-quote-right"></em>
                      </div>
                    </div>
                    <div className="relative leading-loose text-[15px] mb-6 text-gray-700 before:absolute before:top-0 before:z-10 before:w-0.5 before:h-full before:bg-gray-800 ltr:lg:before:-left-8 ltr:before:-left-6 rtl:before:-right-6 rtl:lg:before:-right-8 dark:text-gray-300 dark:before:bg-gray-400">
                      Amazing Support! Totally all over my issues and we were
                      changing it completely from being a place directory!
                      Loving the theme! Amazing Support! Loving the theme!
                    </div>
                    <div className="inline-block bg-gray-50 dark:bg-dark rounded-3xl px-2.5 lg:px-3 xl:px-3.5 py-1.5 text-yellow text-xs">
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star-half-stroke"></em>
                    </div>
                  </div>
                </div>
                <div className="p-3 swiper-slide">
                  <div className="relative p-6 bg-white rounded-md shadow-testimonial lg:p-8 dark:bg-gray-900">
                    <div className="relative flex items-center justify-start mb-6 border-b border-gray-100 pb-7 dark:border-gray-800">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img
                          src="assets/images/author/author-3.png"
                          alt="Client Image"
                        />
                      </div>
                      <div className="ltr:pl-4 rtl:pr-4 ltr:lg:pl-[18px] rtl:lg:pr-[18px] grow">
                        <h3 className="text-lg font-medium">Iruka Akuchi</h3>
                        <div className="text-gray-800 text-[13px] leading-[1.4em] dark:text-gray-500">
                          Developer at Git
                        </div>
                      </div>
                      <div className="absolute ltr:right-0.5 rtl:left-0.5 top-1 text-gray-100 text-[52px] flex dark:text-gray-800">
                        <em className="fa-solid fa-quote-right"></em>
                      </div>
                    </div>
                    <div className="relative leading-loose text-[15px] mb-6 text-gray-700 before:absolute before:top-0 before:z-10 before:w-0.5 before:h-full before:bg-gray-800 ltr:lg:before:-left-8 ltr:before:-left-6 rtl:before:-right-6 rtl:lg:before:-right-8 dark:text-gray-300 dark:before:bg-gray-400">
                      Amazing Support! Totally all over my issues and we were
                      changing it completely from being a place directory!
                      Loving the theme! Amazing Support! Loving the theme!
                    </div>
                    <div className="inline-block bg-gray-50 dark:bg-dark rounded-3xl px-2.5 lg:px-3 xl:px-3.5 py-1.5 text-yellow text-xs">
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star"></em>
                      <em className="mx-0.5 lg:mx-px fa-solid fa-star-half-stroke"></em>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="swiper-wrapper">
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-1.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-2.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-3.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-4.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-5.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-6.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-7.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center py-6 swiper-slide">
                  <div className="min-h-[80px] inline-flex justify-center items-center opacity-50 transition-all cursor-pointer group hover:opacity-80">
                    <img
                      className="scale-[0.80] transition-all group-hover:scale-100 dark:invert"
                      src="assets/images/client/client-8.svg"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

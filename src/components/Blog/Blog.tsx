import BlogCard from "./PostCard";
import NextPrevButton from "../ui/NextPrevButton";
import AnchorLink from "../ui/AnchorLink";

export default function Blog() {
  return (
    <section
      className="py-[100px] md:py-28 lg:py-32 xl:py-[150px] dark:bg-dark"
      
    >
      <div className="container">
        <div className="mb-12 md:flex md:justify-between md:items-end lg:mb-14 xl:mb-[70px]">
          <div className="relative mb-8 -mt-1 md:mb-0">
            <div className="flex items-center text-black font-bold text-sm tracking-[0.5px] dark:text-white">
              04.
              <span className="relative ltr:pl-14 rtl:pr-14 ltr:md:pl-[70px] rtl:md:pr-[70px] before:absolute before:w-9 before:h-px before:bg-black before:z-10 md:before:w-12 rtl:before:right-2.5 ltr:before:left-2.5 before:top-[45%] dark:before:bg-white">
                BLOG
              </span>
            </div>
            <h2 className="font-bold text-[32px] xl:text-[44px] mt-3.5 tracking-[1px] leading-snug">
              LATEST <span className="text-stroke-1">POST.</span>
            </h2>
          </div>
          <NextPrevButton nextActiveId="" prevActiveId="" className="ltr:md:pl-5 rtl:md:pr-5 md:pb-2.5" />
        </div>
        <div className="swiper blog-posts-carousel">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <BlogCard />
            </div>

            <div className="swiper-slide">
              <BlogCard />
            </div>

            <div className="swiper-slide">
              <BlogCard />
            </div>

            <div className="swiper-slide">
              <BlogCard />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10 md:pt-12 md:mt-1">
          <AnchorLink href='/blog'>View All Posts</AnchorLink>
        </div>
      </div>
    </section>
  );
}

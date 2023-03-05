import { Service } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./ServiceCard";

import { Autoplay } from "swiper";

const data = [
  {
    id: 1,
    title: "Creative Design",
    subTitle: "Design",
    successRate: 85,
    description:
      "<strong>200 Project Done.</strong> We will make you a brand that is catchy and leaves a trace. Your target group will never forget you..",
  },
  {
    id: 2,
    title: "Web Development",
    subTitle: "Website",
    successRate: 90,
    description:
      "<strong>200 Project Done.</strong> We will make you a brand that is catchy and leaves a trace. Your target group will never forget you..",
  },
  {
    id: 3,
    title: "Brand & Identity",
    subTitle: "Identity",
    successRate: 95,
    description:
      "<strong>200 Project Done.</strong> We will make you a brand that is catchy and leaves a trace. Your target group will never forget you..",
  },
  {
    id: 4,
    title: "Mobile App Design",
    subTitle: "Mobile",
    successRate: 82,
    description:
      "<strong>200 Project Done.</strong> We will make you a brand that is catchy and leaves a trace. Your target group will never forget you..",
  },
];

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
  return (
    <section
      className="py-[100px] md:py-28 lg:py-32 xl:py-[150px] dark:bg-dark"
      id="services"
    >
      <div className="container">
        <div className="-mt-1">
          <Swiper
            breakpoints={breakpoints}
            loop
            autoplay={{
              delay: 2000,
            }}
            speed={1000}
            modules={[Autoplay]}
          >
            {data.map((item: Service) => (
              <SwiperSlide key={item?.id}>
                <ServiceCard service={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

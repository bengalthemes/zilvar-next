import { Testimonial } from "@/types";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import React from "react";
import rangeMap from "@/utils/range-map";
interface TestimonialCardProps {
  className?: string;
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, designation, comment, rating, imageUrl } = testimonial;

  return (
    <div className="relative p-6 bg-white rounded-md shadow-testimonial lg:p-8 dark:bg-gray-900">
      <div className="relative flex items-center justify-start mb-6 border-b border-gray-100 pb-7 dark:border-gray-800">
        <div className="relative w-16 h-16 overflow-hidden rounded-full">
          <Image alt={name} src={imageUrl} fill className="object-cover" />
        </div>
        <div className="ltr:pl-4 rtl:pr-4 ltr:lg:pl-[18px] rtl:lg:pr-[18px] grow">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="text-gray-800 text-[13px] leading-[1.4em] dark:text-gray-500">
            {designation}
          </div>
        </div>
        <div className="absolute ltr:right-0.5 rtl:left-0.5 top-1 text-gray-100 text-[52px] flex dark:text-gray-800">
          <em className="fa-solid fa-quote-right"></em>
        </div>
      </div>
      <div className="relative leading-loose text-[15px] mb-6 text-gray-700 before:absolute before:top-0 before:z-10 before:w-0.5 before:h-full before:bg-gray-800 ltr:lg:before:-left-8 ltr:before:-left-6 rtl:before:-right-6 rtl:lg:before:-right-8 dark:text-gray-300 dark:before:bg-gray-400">
        {comment}
      </div>
      {rating && (
        <div className="inline-flex bg-gray-50 dark:bg-dark rounded-3xl px-2.5 lg:px-3 xl:px-3.5 py-1.5 text-yellow text-xs">
          {rangeMap(5, (i) => (
            <span key={i} className="mx-0.5 lg:mx-px">
              {Math.ceil(rating) > i ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

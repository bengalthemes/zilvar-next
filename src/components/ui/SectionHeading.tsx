import React from "react";
import SubHeading from "./SubHeading";

export default function SectionHeading() {
  return (
    <div className="-mt-1 relative mb-8 md:mb-12 lg:mb-[70px]">
      <SubHeading title="TESTIMONIALS" />
      <h2 className="font-bold text-[32px] xl:text-[44px] mt-6 tracking-[1px] pt-0.5 leading-snug">
        WHAT CLIENT SAY <br />
        ABOUT <span className="text-stroke-1">MY WORK.</span>
      </h2>
    </div>
  );
}

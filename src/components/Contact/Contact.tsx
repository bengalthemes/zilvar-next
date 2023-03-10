import React from "react";

export default function Contact() {
  return (
    <section
      className="bg-white-smoke dark:bg-dark-smoke py-[100px] md:py-28 lg:py-32 xl:py-[150px]"
      id="contact"
    >
      <div className="container">
        <div className="max-w-[700px] mx-auto text-center lg:pt-3 lg:pb-5">
          <div className="tracking-[0.5px] leading-relaxed flex items-center dark:text-white justify-center mb-4 md:mb-6 pb-0.5 md:pb-0 text-black font-bold text-sm">
            Gat a Project?
          </div>
          <h2 className="text-[32px] font-extrabold leading-tight mb-6 md:mb-8 pb-1 md:pb-0.5 sm:text-[40px] md:text-5xl lg:text-[56px]">
            <span className="text-stroke-1">Let's Work</span> Together!
          </h2>
          <button className="btn btn-contact modalToggle">Let's Talk</button>
        </div>
      </div>
    </section>
  );
}

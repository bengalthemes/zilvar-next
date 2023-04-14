import { Portfolio } from "@/types";
import Link from "../ui/AnchorLink";
import Image from "next/image";
import PortfolioTypeIconText from "./portfolio-icon-text";
import classNames from "classnames";

export default function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  const { title, image, type, category, categoryFilter } = portfolio;
  return (
    <div
      className={classNames(
        "w-full px-2 md:w-1/2 lg:w-1/3 md:px-4 xl:px-5 2xl:px-7 filterItem modalPortfolioToggle",
        categoryFilter
      )}
    >
      <div className="inline-flex flex-col mb-6 xl:mb-8 group">
        <div className="relative inline-block overflow-hidden">
          <div className="relative transition-portfolio group-hover:opacity-80 group-hover:scale-[0.98]">
            <Image
              src={image.thumbnail}
              alt={title}
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="absolute flex items-center justify-center w-12 h-12 p-1 text-lg text-black rotate-180 bg-white rounded-full opacity-0 ltr:translate-x-20 rtl:-translate-x-20 top-5 ltr:right-5 rtl:left-5 transition-portfolio xl:w-14 xl:h-14 xl:text-xl xl:top-6 ltr:xl:right-6 rtl:xl:left-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-0">
            {PortfolioTypeIconText(type)}
          </div>
        </div>

        <div className="flex items-start flex-col justify-end ltr:pl-11 rtl:pr-11 relative mt-4 xl:mt-5 pt-0.5 ltr:xl:pl-[52px] rtl:xl:pr-[52px] before:absolute rtl:before:right-0 ltr:before:left-0 before:index-10 before:top-4 before:h-px before:bg-black xl:before:w-10 before:w-8">
          <h3 className="mb-2 text-lg font-semibold transition-all">{title}</h3>
          <div className="text-sm italic leading-none text-gray-600 rotate-0 translate-x-0 opacity-100 transition-portfolio group-hover:opacity-0 group-hover:-translate-y-4 dark:text-gray-500">
            {category}
          </div>
          <div className="relative inline-block text-sm leading-none text-gray-600 translate-y-0 opacity-0 transition-portfolio group-hover:opacity-100 group-hover:-translate-y-3.5 hover:text-black before:absolute before:z-10 before:h-px before:w-5 before:bg-gray-600 before:top-1.5 ltr:before:-right-7 rtl:before:-left-7 before:transition-all hover:before:bg-black dark:text-gray-500 dark:hover:text-white dark:before:bg-gray-500 dark:hover:before:bg-white">
            View {PortfolioTypeIconText(type, true)}
          </div>
        </div>
      </div>
    </div>
  );
}

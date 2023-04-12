import React from "react";
import { usePortfoliosQuery } from "@/rest-client/get-portfolios";
import SectionHeading from "../ui/SectionHeading";
import Alert from "../ui/Alert";
import { Portfolio } from "@/types";
import PortfolioCard from "./PortfolioCard";
import Masonry from "react-masonry-component";
import { Element } from "react-scroll";

export default function Portfolios() {
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  // React.useEffect(() => {
  //   if (typeof window === "undefined") {
  //     //@ts-ignore
  //     isotope.current = new Isotope(".portfolioItemsContainer", {
  //       itemSelector: ".filterItem",
  //       layoutMode: "fitRows",
  //     });
  //   }
  //   // @ts-ignore
  //   // return () => isotope.current?.destroy();
  // }, []);

  // handling filter key change
  // React.useEffect(() => {
  //   if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
  //   else isotope.current?.arrange({ filter: `.${filterKey}` });
  // }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  const { data, isLoading, error } = usePortfoliosQuery();

  if (error) return <Alert message={error?.message} />;

  return (
    <section
      className="py-[100px] md:py-28 lg:py-32 xl:py-[150px] bg-white-smoke dark:bg-dark-smoke"
      
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end mb-[52px] md:gap-5 md:justify-between lg:mb-[70px]">
          <SectionHeading
            serialNo="02"
            subHeading="PORTFOLIO"
            headingFirstText="FEATURED"
            headingLastText="WORKS"
          />
          <ul className="portfolio-work-nav text-sm text-black font-semibold flex -mx-3 xl:-mb-1 -mb-0.5 flex-wrap md:-mb-2 lg:-mx-4">
            <li className="mx-3 lg:mx-4">
              <span
                onClick={handleFilterKeyChange("*")}
                className="filter relative pt-1 pb-1.5 block md:py-2.5 hover:opacity-80 before:absolute before:bottom-1 before:w-1.5 before:h-1.5 before:bg-gray-800 before:transition-all before:left-1/2 before:opacity-0 before:-translate-x-1/2 before:rounded-full leading-[1.85em] dark:text-white dark:before:bg-gray-500 active"
              >
                All
              </span>
            </li>
            <li className="mx-3 lg:mx-4">
              <span
                onClick={handleFilterKeyChange("web")}
                className="filter relative pt-1 pb-1.5 block md:py-2.5 hover:opacity-80 before:absolute before:bottom-1 before:w-1.5 before:h-1.5 before:bg-gray-800 before:transition-all before:left-1/2 before:opacity-0 before:-translate-x-1/2 before:rounded-full leading-[1.85em] dark:text-white dark:before:bg-gray-500"
              >
                Web
              </span>
            </li>
            <li className="mx-3 lg:mx-4">
              <span
                onClick={handleFilterKeyChange("graphic")}
                className="filter relative pt-1 pb-1.5 block md:py-2.5 hover:opacity-80 before:absolute before:bottom-1 before:w-1.5 before:h-1.5 before:bg-gray-800 before:transition-all before:left-1/2 before:opacity-0 before:-translate-x-1/2 before:rounded-full leading-[1.85em] dark:text-white dark:before:bg-gray-500"
              >
                Graphic
              </span>
            </li>
            <li className="mx-3 lg:mx-4">
              <span
                onClick={handleFilterKeyChange("brand")}
                className="filter relative pt-1 pb-1.5 block md:py-2.5 hover:opacity-80 before:absolute before:bottom-1 before:w-1.5 before:h-1.5 before:bg-gray-800 before:transition-all before:left-1/2 before:opacity-0 before:-translate-x-1/2 before:rounded-full leading-[1.85em] dark:text-white dark:before:bg-gray-500"
              >
                Brand
              </span>
            </li>
            <li className="mx-3 lg:mx-4">
              <span
                onClick={handleFilterKeyChange("app")}
                className="filter relative pt-1 pb-1.5 block md:py-2.5 hover:opacity-80 before:absolute before:bottom-1 before:w-1.5 before:h-1.5 before:bg-gray-800 before:transition-all before:left-1/2 before:opacity-0 before:-translate-x-1/2 before:rounded-full leading-[1.85em] dark:text-white dark:before:bg-gray-500"
              >
                App
              </span>
            </li>
          </ul>
        </div>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="flex flex-wrap -mx-2 md:-mx-4 2xl:-mx-7 xl:-mx-5 -mb-9 xl:-mb-12 portfolioItemsContainer">
            {data?.portfolios?.data.map((item: Portfolio) => (
              <PortfolioCard key={item.id} portfolio={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

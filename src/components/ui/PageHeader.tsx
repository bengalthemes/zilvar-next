import React from "react";

export default function PageHeader() {
  return (
    <div className="pb-24 pt-40 bg-white-smoke dark:bg-dark-smoke relative z-10 overflow-hidden min-h-[200px] md:pt-44 md:pb-28 after:absolute after:right-0 after:bottom-0 after:w-[350px] after:bg-black after:h-[350px] after:bg-opacity-70 after:z-10 after:opacity-0 md:after:opacity-100 after:lg:w-[490px] after:lg:h-[490px] after:rounded-full after:translate-x-[50%] after:translate-y-[50%] dark:after:bg-gray-900">
      <div className="container py-1 md:pb-2 xl:pt-3">
        <div className="text-center">
          <h2 className="font-bold text-[32px] text-black leading-tight mb-2 tracking-[4px] md:text-[40px] md:font-extrabold xl:text-5xl">
            MY <span className="text-stroke-1">BLOG</span>
          </h2>
          <nav aria-label="breadcrumb" className="mt-2.5 xl:mt-4 breadcrumb">
            <ol className="text-[15px] font-normal justify-center flex items-center flex-wrap text-gray-700 dark:text-gray-300">
              <li className="relative flex ltr:before:content-['\f054'] before:flex before:items-center before:opacity-80 dark:before:text-gray-300 before:text-gray-700 before:font-black rtl:pr-3 rtl:first:pr-0 ltr:pl-3 ltr:first:pl-0 ltr:first:before:hidden before:text-xs ltr:before:pr-3 rtl:before:pl-3 before:font-awesome rtl:before:content-['\f053'] rtl:first:before:hidden">
                <a
                  href="index.html"
                  className="flex items-center transition-opacity opacity-80 hover:opacity-100"
                >
                  <img
                    src="assets/images/icon/home.svg"
                    alt="light"
                    className="w-[18px] ltr:mr-1 rtl:ml-1 dark:invert"
                  />
                  Home
                </a>
              </li>
              <li
                className="relative flex ltr:before:content-['\f054'] before:flex before:items-center before:opacity-80 dark:before:text-gray-300 before:text-gray-700 before:font-black rtl:pr-3 rtl:first:pr-0 ltr:pl-3 ltr:first:pl-0 ltr:first:before:hidden before:text-xs ltr:before:pr-3 rtl:before:pl-3 before:font-awesome rtl:before:content-['\f053'] rtl:first:before:hidden active"
                aria-current="page"
              >
                Library
              </li>
            </ol>
          </nav>
          <form className="w-full max-w-md mx-auto mt-9 md:mt-11 md:px-3.5">
            <div className="relative">
              <label
                htmlFor="search"
                className="absolute top-0 flex items-center justify-center h-full text-white transition-all bg-black cursor-pointer ltr:right-0 rtl:left-0 dark:bg-white dark:text-black hover:bg-gray-900 w-14 hover:bg-opacity-80 dark:hover:bg-opacity-90"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                id="search"
                type="search"
                className="w-full h-12 text-sm text-black transition-all border ltr:pl-5 ltr:pr-16 rtl:pr-5 rtl:pl-16 border-gray-150 bg-white-smoke focus:border-black placeholder:tracking-[0.1em] placeholder:text-gray-500 dark:bg-dark-smoke dark:focus:border-gray-300 dark:border-gray-750 dark:text-white"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

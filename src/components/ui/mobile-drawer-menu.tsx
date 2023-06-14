import React from "react";

export default function MobileDrawerMenu() {
  return (
    <div className="fixed h-full top-0 bottom-0 bg-white shadow-drawer max-w-[420px] ltr:-translate-x-[105%] rtl:translate-x-[105%] w-full ltr:left-0 rtl:right-0 z-10 flex flex-col justify-between sidebarMain">
      <div className="relative flex items-center justify-between border-b border-gray-100 min-h-[70px] py-4 ltr:pl-5 rtl:pr-5">
        <a
          className="flex items-center justify-center text-black pt-0 pb-0 mr-0 cursor-pointer font-bold leading-[1em] font-body text-4xl"
          href="#"
        >
          <img
            className="max-w-[48px]"
            src="assets/images/logo.png"
            alt="Logo"
          />
        </a>
        <button className="btn drawerCloseBtn text-gray-900 -mt-1 text-xl px-5 py-2.5 md:py-4 md:px-7">
          <em className="fa-solid fa-xmark"></em>
        </button>
      </div>
      <div
        className="grow py-2 w-[calc(100%-8px)] h-[calc(100%-70px)] sidebarBody"
        ss-container
      >
        <div id="mobileMenu">
          <ul className="flex -mx-4 text-[15px] lg:-mx-5 mainMenu">
            <li className="relative inline-block w-full mx-4 lg:mx-5 active">
              <a
                href="#home"
                data-scroll="home"
                className="relative font-semibold block py-2.5 ltr:after:right-1.5 rtl:after:left-1.5 after:top-[calc(50%-5px)] after:w-2.5 after:h-2.5 after:absolute after:bg-black after:rounded-full after:hidden text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:w-1.5 before:h-1.5 before:rounded-full before:transition-all before:opacity-0 before:bg-gray-800 ltr:before:right-2 rtl:before:left-2 before:top-1/2 before:-translate-y-1/2 after:animate-active-online"
              >
                Home
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 ltr:after:right-1.5 rtl:after:left-1.5 after:top-[calc(50%-5px)] after:w-2.5 after:h-2.5 after:absolute after:bg-black after:rounded-full after:hidden text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:w-1.5 before:h-1.5 before:rounded-full before:transition-all before:opacity-0 before:bg-gray-800 ltr:before:right-2 rtl:before:left-2 before:top-1/2 before:-translate-y-1/2 after:animate-active-online"
                href="#work"
                data-scroll="work"
              >
                Portfolio
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 ltr:after:right-1.5 rtl:after:left-1.5 after:top-[calc(50%-5px)] after:w-2.5 after:h-2.5 after:absolute after:bg-black after:rounded-full after:hidden text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:w-1.5 before:h-1.5 before:rounded-full before:transition-all before:opacity-0 before:bg-gray-800 ltr:before:right-2 rtl:before:left-2 before:top-1/2 before:-translate-y-1/2 after:animate-active-online"
                href="#client"
                data-scroll="client"
              >
                Client
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 ltr:after:right-1.5 rtl:after:left-1.5 after:top-[calc(50%-5px)] after:w-2.5 after:h-2.5 after:absolute after:bg-black after:rounded-full after:hidden text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:w-1.5 before:h-1.5 before:rounded-full before:transition-all before:opacity-0 before:bg-gray-800 ltr:before:right-2 rtl:before:left-2 before:top-1/2 before:-translate-y-1/2 after:animate-active-online"
                href="#blog"
                data-scroll="blog"
              >
                Blog
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 ltr:after:right-1.5 rtl:after:left-1.5 after:top-[calc(50%-5px)] after:w-2.5 after:h-2.5 after:absolute after:bg-black after:rounded-full after:hidden text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:w-1.5 before:h-1.5 before:rounded-full before:transition-all before:opacity-0 before:bg-gray-800 ltr:before:right-2 rtl:before:left-2 before:top-1/2 before:-translate-y-1/2 after:animate-active-online"
                href="#contact"
                data-scroll="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

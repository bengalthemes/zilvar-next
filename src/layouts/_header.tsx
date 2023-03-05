import { UserIcon } from "@/components/icons/UserIcon";
import Logo from "@/components/ui/Logo";
import { useActiveScroll } from "@/utils/use-active-scroll";

import { useRef } from "react";
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

export default function Header() {
  const siteHeaderRef = useRef() as DivElementRef;
  useActiveScroll(siteHeaderRef, 40);
  return (
    <header
      className="siteHeader w-full top-0 left-0 right-0 z-30 fixed bg-white py-3.5 border-b border-gray-100 transition-all md:bg-transparent md:border-b-0 md:py-[18px] lg:py-6"
      ref={siteHeaderRef}
    >
      <nav
        id="siteNavigation"
        className="container flex flex-wrap items-center justify-between"
      >
        {/* <a
          href="#"
          className="flex items-center justify-center text-black pt-0 pb-0 mr-0 cursor-pointer font-bold leading-[1em] font-body text-4xl"
        >
          <img
            className="max-w-[48px] dark:invert"
            src="assets/images/logo.png"
            alt="Logo"
          />
        </a> */}
        <Logo />
        <div className="hidden py-px ltr:ml-auto rtl:mr-auto md:flex ltr:md:mr-8 ltr:lg:mr-9 rtl:md:ml-8 rtl:lg:ml-9">
          <ul className="flex -mx-4 text-[15px] lg:-mx-5 mainMenu">
            <li className="relative inline-block w-full mx-4 lg:mx-5 active">
              <a
                href="#home"
                data-scroll="home"
                className="relative font-semibold block py-2.5 text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-800 before:left-1/2 before:-translate-x-1/2 before2transition-all before:opacity-0 dark:before:bg-white"
              >
                Home
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-800 before:left-1/2 before:-translate-x-1/2 before2transition-all before:opacity-0 dark:before:bg-white"
                href="#work"
                data-scroll="work"
              >
                Portfolio
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-800 before:left-1/2 before:-translate-x-1/2 before2transition-all before:opacity-0 dark:before:bg-white"
                href="#client"
                data-scroll="client"
              >
                Client
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-800 before:left-1/2 before:-translate-x-1/2 before2transition-all before:opacity-0 dark:before:bg-white"
                href="#blog"
                data-scroll="blog"
              >
                Blog
              </a>
            </li>
            <li className="relative inline-block w-full mx-4 lg:mx-5">
              <a
                className="relative font-semibold block py-2.5 text-black leading-relaxed hover:text-gray-600 dark:text-white dark:hover:text-gray-200 before:absolute before:z-10 before:bottom-1 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-800 before:left-1/2 before:-translate-x-1/2 before2transition-all before:opacity-0 dark:before:bg-white"
                href="#contact"
                data-scroll="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button className="aboutDrawerOpenBtn relative w-10 h-10 text-gray-800 !p-1 !text-lg bg-white border border-gray-100 rounded-full btn hover:bg-white-smoke hover:border-gray-100 active:bg-white-smoke active:border-gray-100 active:text-gray-600 before:absolute before:bg-black before:opacity-100 before:rounded-full after:absolute after:bg-black after:opacity-100 after:rounded-full before:right-0.5 before:top-0.5 before:w-1.5 before:h-1.5 after:right-0 after:top-0 after:w-2.5 after:h-2.5 after:animate-active-online 2ark:before:bg-white dark:after:bg-white">
          <UserIcon className="w-[18px] h-[18px]" />
        </button>

        <button className="block p-3 -ml-3 md:hidden btn group -order-1 menuDrawerOpenBtn">
          <span className="flex flex-col items-start justify-center w-7 gap-y-1.5">
            <em className="h-0.5 transition-all flex rounded-2xl bg-gray-900 w-1/2 group-hover:w-full"></em>
            <em className="h-0.5 transition-all flex rounded-2xl bg-gray-900 w-full"></em>
            <em className="h-0.5 transition-all flex rounded-2xl bg-gray-900 w-3/4 group-hover:w-full"></em>
          </span>
        </button>
      </nav>
    </header>
  );
}

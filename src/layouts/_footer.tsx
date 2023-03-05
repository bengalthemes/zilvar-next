import Image from "next/image";
import logo from "../assets/images/logo-white.png";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-black lg:sticky lg:z-0 lg:bottom-0 lg:left-0 lg:pb-20">
      <div className="pb-16 md:pb-[72px] lg:pb-20 lg:-mb-1 xl:mb-2">
        <div className="container">
          <div className="-mt-10 text-sm font-medium text-center text-white md:-mt-12 md:-ml-4 md:-mr-4 md:flex md:flex-wrap ltr:md:text-left rtl:md:text-right">
            <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 widget-logo">
              <a
                href="index.html"
                className="relative inline-block mb-1 md:mb-2.5"
              >
                <Image src={logo} fill className="w-16 h-auto" alt="Logo" />
              </a>
            </div>
            <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 widget-address">
              <p className="text-sm leading-[1.85em]">
                PO Box 223158 Oliver Street
                <span className="block">East Victoria 2006 UK</span>
              </p>
            </div>
            <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 widget-contact-info">
              <p className="text-sm leading-[1.85em]">
                <a
                  href="mailto:zilbardemo@demo.com"
                  className="transition-opacity hover:opacity-80"
                >
                  zilbardemo@demo.com
                </a>
              </p>
              <p className="text-sm leading-[1.85em]">+011 1235 6542</p>
            </div>
            <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 -mx-1 mt-1.5 -mb-1 lg:-m-0.5 lg:text-right">
              <a
                className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
                href="#"
              >
                <em className="fab fa-facebook-f"></em>
              </a>
              <a
                className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
                href="#"
              >
                <em className="fab fa-twitter"></em>
              </a>
              <a
                className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
                href="#"
              >
                <em className="fab fa-linkedin-in"></em>
              </a>
              <a
                className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
                href="#"
              >
                <em className="fab fa-pinterest"></em>
              </a>
              <a
                className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
                href="#"
              >
                <em className="fab fa-instagram"></em>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-light lg:pt-0 lg:border-t-0">
        <div className="container">
          <div className="text-xs font-medium leading-loose tracking-widest text-center text-white">
            © Copyright 2022 Zilvar. Template by
            <a
              href="https://themeforest.net/user/bengalthemes/portfolio"
              className="hover:opacity-80"
            >
              Bengal_Themes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import SubHeading from "../ui/SubHeading";
import heroThumb from "@/assets/images/hero.jpg";
import Image from "next/image";
import { AngleDownIcon } from "@/components/icons/AngleDownIcon";
import Link from "next/link";

const data = {
  welcomeText: "HELLO!",
  designation: "Professional Creative Web Developer",
};

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen overflow-hidden dark:bg-dark"
      id="home"
    >
      <div className="absolute bottom-0 right-0 h-full bg-no-repeat bg-cover bg-[70%_bottom] w-full md:w-[calc(50%+100px)] xl:w-[calc(50%+200px)] before:absolute before:top-0 before:z-10 before:w-full before:h-full before:bg-white before:bg-opacity-60 md:before:bg-opacity-[0.15] dark:before:bg-black dark:before:bg-opacity-50 rtl:hidden">
        <Image
          src={heroThumb}
          fill
          className="object-cover"
          alt="Hero Banner"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 h-full bg-no-repeat bg-cover bg-[30%_bottom] w-full md:w-[calc(50%+100px)] xl:w-[calc(50%+200px)] before:absolute before:top-0 before:z-10 before:w-full before:h-full before:bg-white before:bg-opacity-60 md:before:bg-opacity-[0.15] dark:before:bg-black dark:before:bg-opacity-50 ltr:hidden"
        // style="background-image: url('assets/images/hero-rtl.jpg')"
      ></div>

      <div className="container">
        <div className="relative z-20 pt-16 xl:pt-8 lg:w-7/12 xl:w-8/12">
          <SubHeading title={data.welcomeText} variant="medium" />
          <h1 className="font-extrabold text-black dark:text-white tracking-[2px] !leading-[1.15em] mt-7 mb-2 text-[42px] sm:text-5xl md:text-[56px] xl:mt-9 xl:mb-2.5 2xl:mb-3 xl:text-[68px] 2xl:text-[76px]">
            I'M <span className="text-stroke-1">JESSY</span> DOE
          </h1>
          <div className="mb-8 text-sm italic font-medium !leading-relaxed text-gray-700 dark:text-gray-300 capitalize md:text-base md:mb-10">
            {data.designation}
          </div>
          <button className="btn btn-primary about-drawer-open-btn before:bg-white md:before:bg-gray-100">
            <span>ABOUT ME</span>
          </button>
        </div>
      </div>

      <div className="hero-svg-effect absolute ltr:rotate-90 rtl:-rotate-90 -top-12 w-[915px] hidden md:block rtl:md:right-[calc(50%-380px)] ltr:md:left-[calc(50%-380px)] ltr:xl:left-[calc(50%-430px)] rtl:xl:right-[calc(50%-430px)] z-10">
        <svg
          viewBox="0 0 1440 500"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[500px] text-white dark:text-dark"
        >
          <path
            d="M 0,500 C 0,500 0,250 0,250 C 31.93776381796593,237.40035981810558 63.87552763593186,224.8007196362112 98,221 C 132.12447236406814,217.1992803637888 168.43565327423843,222.1974812732608 201,233 C 233.56434672576157,243.8025187267392 262.38185926711446,260.4093552707456 295,261 C 327.61814073288554,261.5906447292544 364.03690965730385,246.1650976437569 393,253 C 421.96309034269615,259.8349023562431 443.47050210367024,288.9302541542269 478,304 C 512.5294978963298,319.0697458457731 560.081081928015,320.1138857393356 592,316 C 623.918918071985,311.8861142606644 640.20517018427,302.61420288843055 665,269 C 689.79482981573,235.38579711156947 723.0982373349051,177.4293027069423 763,192 C 802.9017626650949,206.5706972930577 849.4018804761093,293.66858628380027 876,326 C 902.5981195238907,358.33141371619973 909.2942407606575,335.89635215785665 942,325 C 974.7057592393425,314.10364784214335 1033.4211564812601,314.74600508477323 1069,299 C 1104.5788435187399,283.25399491522677 1117.0211333143016,251.11962750305045 1146,231 C 1174.9788666856984,210.88037249694955 1220.494310261534,202.77548490302493 1257,213 C 1293.505689738466,223.22451509697507 1321.0016256395616,251.77843288484996 1350,261 C 1378.9983743604384,270.22156711515004 1409.4991871802192,260.110783557575 1440,250 C 1440,250 1440,500 1440,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="currentcolor"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>

      <Link
        href="#work"
        className="bottom-2.5 z-10 absolute leading-relaxed ltr:left-4 rtl:right-4 uppercase flex flex-col items-center text-xs font-semibold text-black ltr:md:left-[calc(50%-344px)] rtl:md:right-[calc(50%-344px)] ltr:lg:left-[calc(50%-462px)] rtl:lg:right-[calc(50%-462px)] ltr:xl:left-[calc(50%-556px)] rtl:xl:right-[calc(50%-556px)] ltr:2xl:left-[calc(50%-656px)] rtl:2xl:right-[calc(50%-656px)] dark:text-white dark:hover:text-opacity-80 scroll-indicator-wrapper"
      >
        Scroll
        <AngleDownIcon className="animate-bounce w-3 h-3.5 mt-1.5 opacity-90" />
      </Link>
    </section>
  );
}

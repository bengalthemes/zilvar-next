import SubHeading from "@/components/ui/SubHeading";
import Image from "next/image";
import { useDrawer } from "@/components/drawer-views/DrawerContext";
import { Link } from "react-scroll";
import HeroWaveShape from "./HeroWaveShape";
import { FaChevronDown } from "react-icons/fa";

const heroData = {
  heroThumb: "/images/hero.jpg",
  firstName: "JESSY",
  lastName: "DOE",
  welcomeText: "HELLO!",
  designation: "Professional Creative Web Developer",
  aboutButtonText: "ABOUT ME",
};

export default function Hero() {
  const { openDrawer } = useDrawer();
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden dark:bg-dark">
      <div className="absolute bottom-0 right-0 h-full bg-no-repeat bg-cover bg-[70%_bottom] w-full md:w-[calc(50%+100px)] xl:w-[calc(50%+200px)] before:absolute before:top-0 before:z-10 before:w-full before:h-full before:bg-white before:bg-opacity-60 md:before:bg-opacity-[0.15] dark:before:bg-black dark:before:bg-opacity-50 rtl:hidden">
        <Image
          src={heroData.heroThumb}
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
          <SubHeading title={heroData.welcomeText} variant="medium" />
          <h1 className="font-extrabold text-black dark:text-white tracking-[2px] !leading-[1.15em] mt-7 mb-2 text-[42px] sm:text-5xl md:text-[56px] xl:mt-9 xl:mb-2.5 2xl:mb-3 xl:text-[68px] 2xl:text-[76px]">
            I'M <span className="text-stroke-1">{heroData.firstName}</span>{" "}
            {heroData.lastName}
          </h1>
          <div className="mb-8 text-sm italic font-medium !leading-relaxed text-gray-700 dark:text-gray-300 capitalize md:text-base md:mb-10">
            {heroData.designation}
          </div>
          <button
            onClick={() => openDrawer("ABOUT_VIEW")}
            className="btn btn-primary about-drawer-open-btn before:bg-white md:before:bg-gray-100"
          >
            <span>{heroData.aboutButtonText}</span>
          </button>
        </div>
      </div>

      <HeroWaveShape />

      <Link
        className="bottom-2.5 z-10 absolute leading-relaxed ltr:left-4 rtl:right-4 uppercase flex flex-col items-center text-xs font-semibold text-black ltr:md:left-[calc(50%-344px)] rtl:md:right-[calc(50%-344px)] ltr:lg:left-[calc(50%-462px)] rtl:lg:right-[calc(50%-462px)] ltr:xl:left-[calc(50%-556px)] rtl:xl:right-[calc(50%-556px)] ltr:2xl:left-[calc(50%-656px)] rtl:2xl:right-[calc(50%-656px)] dark:text-white dark:hover:text-opacity-80 cursor-pointer"
        to="work"
        spy={true}
        smooth={true}
        duration={500}
      >
        Scroll
        <FaChevronDown className="mt-1 animate-bounce opacity-90" />
      </Link>
    </section>
  );
}

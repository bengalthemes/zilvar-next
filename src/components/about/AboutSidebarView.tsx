import { useDrawer } from "../drawer-views/DrawerContext";
import { HiXMark } from "react-icons/hi2";
import AboutInformation from "./AboutInformation";
import { useAboutInformationQuery } from "@/rest-client/get-about-information";
import Skills from "./Skills";
import Knowledge from "./Knowledge";
import Interests from "./Interests";
import Scrollbar from "../ui/Scrollbar";

export default function AboutSidebarView() {
  const { closeDrawer } = useDrawer();
  const { data } = useAboutInformationQuery();
  return (
    <div className="h-full">
      <div className="relative flex items-center justify-between border-b border-gray-100 dark:border-gray-750 min-h-[70px] py-4 ltr:pl-5 rtl:pr-5 md:py-[18px] ltr:md:pl-7 rtl:md:pr-7 md:min-h-[80px]">
        <h3 className="text-2xl font-bold leading-none uppercase word-spacing-2">
          About <span className="text-stroke-1 tracking-[0.05em]">Me</span>
        </h3>
        <button
          className="btn text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white -mt-1 text-xl px-5 py-2.5 md:py-4 md:px-7"
          onClick={closeDrawer}
        >
          <HiXMark />
        </button>
      </div>
      <Scrollbar className="relative w-full ltr:pl-5 rtl:pr-5 rtl:md:pr-7 ltr:md:pl-7 ltr:pr-3 rtl:pl-3 rtl:md:pl-5 ltr:md:pr-5 h-[calc(100%-160px)]">
        <div className="grow py-2 w-[calc(100%-8px)]  text-sm">
          <AboutInformation
            //@ts-ignore
            informationData={data?.about.data.information}
          />
          <Skills
            //@ts-ignore
            skillsData={data?.about.data.skills}
          />
          <Interests
            //@ts-ignore
            interestsData={data?.about.data.interests}
          />
          <Knowledge
            //@ts-ignore
            knowledgeData={data?.about.data.knowledge}
          />
        </div>
      </Scrollbar>
      <div className="relative h-20 px-5 py-3 md:px-7 shrink-0">
        <a
          className="w-full btn btn-download md:px-6 md:py-3 !flex justify-between"
          href="assets/files/cv.pdf"
          target="_blank"
        >
          DOWNLOAD CV
          <em className="fa-solid fa-download py-2.5 ltr:pl-6 ltr:border-l rtl:pr-6 rtl:border-r border-white border-opacity-25"></em>
        </a>
      </div>
    </div>
  );
}

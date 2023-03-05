import { siteSettings } from "@/settings/site-settings";
import Link from "next/link";
import SocialProfile from "./SocilaProfile";

function Widget() {
  const { author, footerLogo } = siteSettings;
  return (
    <div className="pb-16 md:pb-[72px] lg:pb-20 lg:-mb-1 xl:mb-2">
      <div className="container">
        <div className="-mt-10 text-sm font-medium text-center text-white md:-mt-12 md:-ml-4 md:-mr-4 md:flex md:flex-wrap ltr:md:text-left rtl:md:text-right">
          <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 widget-logo">
            <Link
              href={footerLogo.href}
              className="relative inline-block mb-1 md:mb-2.5"
            >
              <img
                width={footerLogo.width}
                height={footerLogo.height}
                src={footerLogo.url}
                alt={footerLogo.alt}
              />
            </Link>
          </div>
          {/* Widget Address */}
          <div
            className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 text-sm leading-[1.85em]"
            dangerouslySetInnerHTML={{
              __html: author.address,
            }}
          ></div>
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
          <SocialProfile className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 -mx-1 mt-1.5 -mb-1 lg:-m-0.5 lg:text-right" />
        </div>
      </div>
    </div>
  );
}

export default Widget;

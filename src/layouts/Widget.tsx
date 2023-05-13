import { siteSettings } from '@/settings/site-settings';
import Link from 'next/link';
import SocialProfile from '@/layouts/SocialProfile';
import Image from 'next/image';
import AnchorLink from '@/components/ui/AnchorLink';

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
              <Image
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
          />

          {/* Widget Information */}
          <div className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 widget-contact-info">
            <p className="text-sm leading-[1.85em]">
              <AnchorLink
                href={`mailto:${author.email}`}
                className="transition-opacity hover:opacity-80"
              >
                {author.email}
              </AnchorLink>
            </p>
            <p className="text-sm leading-[1.85em]">{author.phone}</p>
          </div>

          {/* Widget Social Profile */}
          <SocialProfile className="flex-shrink-0 pt-10 pl-4 pr-4 lg:w-1/4 md:pt-12 md:w-1/2 -mx-1 mt-1.5 -mb-1 lg:-m-0.5 lg:text-right" />
        </div>
      </div>
    </div>
  );
}

export default Widget;

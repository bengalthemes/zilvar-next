import cn from "classnames";
import { siteSettings } from "@/settings/site-settings";
import Link from "next/link";

function SocialProfile({ className }: { className?: string }) {
  return (
    <div className={cn("flex-shrink-0 lg:-m-0.5 xl:-m-1", className)}>
      {siteSettings.socialProfile.map((social: any) => (
        <Link
          key={`social-id-${social?.id}`}
          className="inline-flex items-center justify-center p-1 w-8 h-8 text-white text-sm rounded m-1 bg-white-smoke bg-opacity-[0.15] hover:bg-opacity-100 hover:text-black lg:m-0.5 xl:m-1"
          href={social?.link}
          target="_black"
          rel="noopener noreferrer"
        >
          {social?.icon}
        </Link>
      ))}
    </div>
  );
}
export default SocialProfile;

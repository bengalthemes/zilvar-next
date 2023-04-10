import { Information } from "@/types";

export default function AboutInformation({
  informationData,
}: {
  informationData: Information;
}) {
  return (
    <div className="relative border-b border-gray-100 dark:border-gray-750 mb-7 pb-7 last:mb-0 last:pb-0 last:border-b-0">
      <ul className="block pt-1">
        <li className="flex items-start justify-between mb-4 pb-0.5 last:pb-0 last:mb-0">
          <span className="font-medium text-black dark:text-white after:tracking-[0.22em] ltr:after:ml-1 rtl:after:mr-1 after:content-['...'] shrink-0 rtl:ml-2 ltr:mr-2">
            Name
          </span>
          {informationData?.name}
        </li>
      </ul>
    </div>
  );
}

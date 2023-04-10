import { FiCheck } from "react-icons/fi";

export default function Knowledge({
  knowledgeData,
}: {
  knowledgeData: string[];
}) {
  return (
    <div className="relative border-b border-gray-100 dark:border-gray-750 mb-7 pb-7 last:mb-0 last:pb-0 last:border-b-0">
      <h3 className="mb-5 text-lg font-semibold">Knowledge</h3>
      <ul className="block -my-1">
        {knowledgeData?.map((title: string, idx: number) => (
          <li key={idx} className="relative flex py-1 mb-1 last:mb-0">
            <span className="text-base text-gray-800 dark:text-gray-200 ltr:pr-1.5 rtl:pl-1.5 mt-0.5 shrink-0">
              <FiCheck />
            </span>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

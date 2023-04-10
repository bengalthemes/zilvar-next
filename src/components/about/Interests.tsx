export default function Interests({
  interestsData,
}: {
  interestsData: string[];
}) {
  return (
    <div className="relative border-b border-gray-100 dark:border-gray-750 mb-7 pb-7 last:mb-0 last:pb-0 last:border-b-0">
      <h3 className="mb-5 text-lg font-semibold">Interests</h3>
      <ul className="flex flex-wrap text-black dark:text-white pt-1.5 pb-1 -m-1">
        {interestsData?.map((title: string, idx: number) => (
          <li
            key={idx}
            className="bg-gray-50 dark:bg-dark text-[13px] m-1 rounded py-1 leading-relaxed px-2.5"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

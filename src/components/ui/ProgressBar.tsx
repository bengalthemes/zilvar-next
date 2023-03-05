import cn from "classnames";

export default function ProgressBar({
  className = "pt-px md:pt-0",
  title = "Success Rate",
  progressPercentage = 0,
}: {
  className?: string;
  title?: string;
  progressPercentage: number;
}) {
  return (
    <div className={cn("text-sm", className)}>
      <div className="flex items-center justify-between py-px mb-1 text-gray-500">
        {title}
        <span className="text-gray-800 dark:text-gray-300">
          {progressPercentage}%
        </span>
      </div>
      <div className="h-[3px] w-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <div
          className="h-full bg-black dark:bg-white"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

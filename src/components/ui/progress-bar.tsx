import cn from "classnames";

export default function ProgressBar({
  className = "pt-px md:pt-0",
  title = "Success Rate",
  variant = "default",
  progressPercentage = 0,
}: {
  className?: string;
  title?: string;
  variant?: "default" | "service";
  progressPercentage: number;
}) {
  return (
    <div className={cn("text-sm", className)}>
      <div
        className={cn("flex items-center justify-between py-px mb-1 ", {
          "text-black dark:text-white font-medium leading-relaxed":
            variant === "default",
          "text-gray-500": variant === "service",
        })}
      >
        {title}
        <span
          className={cn({
            "text-body dark:text-gray-200": variant === "default",
            "text-gray-800 dark:text-gray-300": variant === "service",
          })}
        >
          {progressPercentage}%
        </span>
      </div>
      <div
        className={cn("w-full  relative overflow-hidden", {
          "h-1 bg-gray-100 dark:bg-gray-700": variant === "default",
          "h-[3px] bg-gray-200 dark:bg-gray-700": variant === "service",
        })}
      >
        <div
          className="h-full bg-black dark:bg-white"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

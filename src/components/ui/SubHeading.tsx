import cn from "classnames";

interface SubHeadingProps {
  serialNo?: string;
  title: string;
  variant?: "default" | "medium";
}

const variantClasses = {
  default: "text-sm",
  medium: "!leading-relaxed 2xl:text-lg text-base",
};

export default function SubHeading({
  variant = "default",
  serialNo = "01",
  title,
}: SubHeadingProps) {
  return (
    <div
      className={cn(
        "flex items-center text-black font-bold text-sm tracking-[0.5px] dark:text-white",
        variantClasses[variant]
      )}
    >
      {serialNo}.
      {title && (
        <span className="relative lrt:pl-14 rtl:pr-14 ltr:md:pl-[70px] rtl:md:pr-[70px] before:absolute before:w-9 before:h-px before:bg-black before:z-10 md:before:w-12 rtl:before:right-2.5 ltr:before:left-2.5 before:top-[45%] dark:before:bg-white">
          {title}
        </span>
      )}
    </div>
  );
}

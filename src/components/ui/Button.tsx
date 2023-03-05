import cn from "classnames";

const variantClasses = {
  text: "text-dark dark:text-light",
  outline:
    "min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-transparent border border-light-500 dark:border-dark-600 text-dark dark:text-light hover:bg-light-400 focus:bg-light-500 dark:hover:bg-dark-600 dark:focus:bg-dark-600",
  solid:
    "min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark",
  icon: "transition-colors duration-200 text-dark-800 hover:text-dark-900 dark:hover:text-light-600",
  solidDanger:
    "min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600",
};

export default function Button({
  variant = "text",
  isLoading,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "text" | "outline";
  isLoading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "rounded-lg px-3 py-1 text-sm font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {isLoading && "loading"} {children}
    </button>
  );
}

import cn from 'classnames';

const variantClasses = {
  text: 'text-dark dark:text-light',
  secondary:
    'bg-black font-semibold text-white rounded-md tracking-[1px] px-5 py-3 leading-[1.5em] hover:bg-gray-900 dark:bg-white dark:text-black hover:dark:bg-opacity-80 md:py-4 md:px-8',
  contact:
    'bg-black text-white ltr:rounded-tl-full rtl:rounded-tr-full rounded-bl-full rounded-br-full px-8 py-3.5 text-sm md:text-[15px] md:py-4 font-semibold hover:bg-gray-900 dark:bg-white hover:dark:bg-opacity-80 dark:text-black',
  icon: 'transition-colors duration-200 text-dark-800 hover:text-dark-900 dark:hover:text-light-600',
  solidDanger:
    'min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600',
};

export default function Button({
  variant = 'text',
  isLoading,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: 'text' | 'secondary' | 'contact';
  isLoading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        'rounded-lg px-3 py-1 text-sm font-medium',
        variantClasses[variant],
        className
      )}
      type="button"
      {...props}
    >
      {isLoading && 'loading'} {children}
    </button>
  );
}

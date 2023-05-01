import cn from 'classnames';

const variantClasses = {
  text: 'text-dark dark:text-light',
  secondary:
    'bg-black font-semibold text-white rounded-md tracking-[1px] px-5 py-3 leading-[1.5em] hover:bg-gray-900 dark:bg-white dark:text-black hover:dark:bg-opacity-80 md:py-4 md:px-8',
  solid:
    'min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark',
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
  variant?: 'text' | 'secondary';
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
      {...props}
    >
      {isLoading && 'loading'} {children}
    </button>
  );
}

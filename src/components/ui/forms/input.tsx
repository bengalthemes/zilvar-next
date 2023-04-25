import { forwardRef } from "react";
import cn from "classnames";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  useUppercaseLabel?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = "text",
      className = "pb-0.5",
      inputClassName,
      useUppercaseLabel = true,
      ...props
    },
    ref
  ) => (
    <div className={className}>
      <div className="relative mb-1">
        <input
          className="h-11 rounded border border-gray-150 placeholder:tracking-widest placeholder:text-gray-600 text-sm text-black ltr:pl-14 rtl:pr-14 w-full pr-3 py-1.5 font-normal bg-white formControl dark:bg-gray-900 dark:border-gray-750 focus:border-black dark:focus:border-gray-300 dark:text-white dark:placeholder:text-gray-500"
          id="form_email"
          placeholder="Email"
          type={type}
          ref={ref}
          {...props}
        />
        <div className="absolute w-11 h-[calc(100%-2px)] ltr:border-r rtl:border-l border-gray-150 top-px rtl:rounded-tr ltr:rounded-tl ltr:rounded-bl rtl:rounded-br dark:border-gray-750 ltr:left-px rtl:right-px flex items-center justify-center text-base p-1 text-gray-600 bg-gray-50 bg-opacity-40 dark:bg-dark-100 dark:text-gray-300">
          <em className="fa-solid fa-at"></em>
        </div>
      </div>
      {error && (
        <span role="alert" className="mt-2 block text-red-500 sm:mt-2.5">
          {error}
        </span>
      )}
    </div>
  )
);

Input.displayName = "Input";
export default Input;

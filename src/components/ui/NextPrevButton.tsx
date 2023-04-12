import classNames from 'classnames'
import React from 'react'
export default function NextPrevButton({className, nextActiveId, prevActiveId}:{className?:string, nextActiveId: string, prevActiveId:string}) {
  return (
    <div className={classNames("flex items-center", className)}>
      <button className="btnPrev group bg-transparent border-0 text-xs font-semibold tracking-[0.2em] text-center inline-block uppercase relative transition-all h-10 px-0.5 py-1.5 lg:h-12 lg:tracking-[0.4em] text-gray-800 dark:text-gray-200 before:absolute before:top-0 before:transition-all before:h-10 before:w-12 lg:before:w-14 lg:before:h-12 before:border-t-2 before:border-gray-300 ltr:before:left-0 ltr:before:border-l-2 rtl:before:right-0 rtl:before:border-r-2 before:border-b-2 hover:text-black hover:before:border-black dark:before:border-gray-800 dark:hover:before:border-white">
        <span className="block ltr:pr-2.5 ltr:pl-5 rtl:pl-2.5 rtl:pr-4 leading-loose relative z-10 after:absolute before:absolute before:w-0.5 before:transition-all before:bg-gray-300 before:h-1.5 lg:before:h-2 after:h-1.5 lg:after:h-2 after:transition-all after:bg-gray-300 dark:after:bg-gray-800 dark:before:bg-gray-800 after:w-0.5 before:-top-1.5 ltr:before:left-11 before:right-11 lg:before:right-[52px] ltr:lg:before:left-[52px] lg:before:-top-[11px] after:-bottom-1.5 lg:after:-bottom-[11px] rtl:after:right-11 rtl:lg:after:right-[52px] dark:group-hover:text-white group-hover:before:bg-black group-hover:after:bg-black dark:group-hover:after:bg-white dark:group-hover:before:bg-white ltr:after:left-11 ltr:lg:after:left-[52px]">
          prev
        </span>
      </button>
      <button className="btnNext group bg-transparent border-0 leading-loose text-xs font-semibold tracking-[0.2em] text-center inline-block uppercase relative after:absolute transition-all h-10 px-0.5 py-1.5 lg:h-12 lg:tracking-[0.4em] text-gray-800 dark:text-gray-200 before:absolute before:top-0 before:transition-all before:h-10 before:w-12 lg:before:w-14 lg:before:h-12 before:border-t-2 before:border-gray-300 ltr:before:right-0 rtl:before:left-0 ltr:before:border-r-2 rtl:before:border-l-2 before:border-b-2 hover:text-black hover:before:border-black dark:before:border-gray-800 dark:hover:before:border-white">
        <span className="block ltr:pl-2.5 rtl:pr-2.5 ltr:pr-4 rtl:pl-5 relative z-10 before:absolute before:w-0.5 before:transition-all before:bg-gray-300 before:h-1.5 lg:before:h-2 after:absolute after:h-1.5 lg:after:h-2 after:transition-all after:bg-gray-300 dark:after:bg-gray-800 dark:before:bg-gray-800 after:w-0.5 before:-top-1.5 lg:before:-top-[11px] rtl:before:left-11 rtl:lg:before:left-[52px] ltr:before:right-11 rtl:after:left-11 rtl:lg:after:left-[52px] ltr:lg:before:right-[52px] after:-bottom-1.5 lg:after:-bottom-[11px] ltr:after:right-11 ltr:lg:after:right-[52px] group-hover:before:bg-black group-hover:after:bg-black dark:group-hover:after:bg-white dark:group-hover:before:bg-white dark:group-hover:text-white">
          next
        </span>
      </button>
    </div>
  )
}

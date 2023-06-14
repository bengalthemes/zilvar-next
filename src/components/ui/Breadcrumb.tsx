import { FaChevronRight } from 'react-icons/fa';
import AnchorLink from './anchor-link';

export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="mt-2.5 xl:mt-4 breadcrumb">
      <ol className="text-[15px] font-normal justify-center flex items-center flex-wrap text-gray-700 dark:text-gray-300">
        <li className="relative flex">
          <AnchorLink
            href="/"
            className="flex items-center transition-opacity opacity-80 hover:opacity-100"
          >
            Home
          </AnchorLink>
        </li>
        <li className="flex items-center px-2 text-xs font-black text-gray-700 opacity-80 dark:text-gray-300">
          <FaChevronRight />
        </li>
        <li className="relative flex active" aria-current="page">
          Blog
        </li>
      </ol>
    </nav>
  );
}

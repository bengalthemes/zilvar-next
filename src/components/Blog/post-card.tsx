import { Post } from '@/types';
import AnchorLink from '../ui/anchor-link';
import Image from 'next/image';

export default function PostCard({
  post,
  filePath,
}: {
  post: Post;
  filePath: string;
}) {
  return (
    <article className="rounded-md overflow-hidden relative min-h-[375px] bg-white-smoke dark:bg-dark-smoke group">
      <div
        className="absolute top-0 left-0 w-full h-full mb-0 bg-center bg-no-repeat bg-cover rounded-lg"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
      <div className="px-5 py-6 lg:py-8 lg:px-7 relative z-10 bg-white-smoke dark:bg-gray-900 group-hover:bg-black group-hover:bg-opacity-40 dark:group-hover:bg-opacity-70 duration-300 transition-all flex items-start min-h-[375px] xl:py-11 xl:px-9 flex-col group-hover:text-white">
        <div className="flex items-center justify-start mb-5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-[100px]">
          <div className="w-10 h-10 ltr:mr-3.5 rtl:ml-3.5 rounded-full shrink-0 group relative">
            <Image
              src={post.author?.avatar}
              alt={post.author?.name}
              fill
              className="object-cover"
            />
          </div>
          <AnchorLink
            href=""
            className="group-hover:text-white dark:hover:text-white"
          >
            {post.author?.name}
          </AnchorLink>
        </div>
        <div className="w-full group-hover:-translate-y-[60px] transition-all duration-300">
          <div className="mb-5 text-[13px] font-medium flex flex-wrap items-center">
            <AnchorLink
              href=""
              className="px-3 py-0.5 rounded-[20px] text-gray-800 dark:bg-gray-800 group-hover:text-gray-800 group-hover:bg-gray-100 bg-gray-100 dark:text-gray-200 leading-[1.7em] hover:!text-black"
            >
              {post.category}
            </AnchorLink>
            <span className="px-3">{post.date}</span>
          </div>
          <h2 className="text-xl font-semibold mb-3.5 leading-relaxed">
            <AnchorLink
              href={`/blog/${filePath}`}
              className="duration-200 bg-no-repeat group-hover:text-white transition-hoverLine bg-bgLine bg-gradient-current py-[0.3%] bg-[length:0px_2px] hover:bg-[length:100%_2px]"
            >
              {post.title}
            </AnchorLink>
          </h2>
          <div className="block">
            <div className="pt-3 text-white transition-all duration-200 opacity-0 group-hover:pt-0 group-hover:opacity-100">
              <p className="text-[15px] leading-[1.85em] line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
        <a
          className="font-semibold btn btn-primary group-hover:before:!w-full mt-auto dark:group-hover:before:!bg-white dark:group-hover:text-black"
          href="blog-details.html"
        >
          <span>Read More</span>
        </a>
      </div>
    </article>
  );
}

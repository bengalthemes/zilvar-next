import BlogCard from '@/components/blog/PostCard';
import PageHeader from '@/components/ui/PageHeader';
import SEO from '@/components/ui/SEO';
import Layout from '@/layouts/_layout';
import { getPosts } from '@/utils/mdx-utils';
import { GetStaticProps } from 'next/types';
import React from 'react';

export default function BlogPage({ posts }: any) {
  return (
    <>
      <SEO />
      <Layout>
        <PageHeader />

        {/* <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <div
                // as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                // href={`/posts/[slug]`}
              >
                <a className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="mb-3 font-bold uppercase opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                </a>
              </div>
            </li>
          ))}
        </ul> */}
        <div
          className="py-[100px] md:py-28 lg:py-32 xl:py-[150px] dark:bg-dark"
          id="blog"
        >
          <div className="container">
            <div className="grid gap-7 2xl:grid-cols-3 md:grid-cols-2 2xl:gap-10">
              {posts.map((post) => (
                <div className="relative" key={post.filePath}>
                  <BlogCard
                    post={post.data}
                    filePath={post.filePath.replace('.mdx', '')}
                  />
                </div>
              ))}
            </div>

            {/* <nav aria-label="pagination" className="pt-20 xl:mt-2 pagination">
              <ul
                className="flex items-center justify-center border-t border-gray-150 dark:border-gray-750"
              >
                <li className="ltr:mr-auto rtl:ml-auto disabled">
                  <a
                    className="font-medium tracking-[2px] text-gray-700 dark:text-gray-300 dark:hover:text-white md:text-base text-sm hover:text-black transition-colors pt-2.5 inline-block"
                    ><span
                      className="fas fa-chevron-left text-xs md:text-[13px] rtl:rotate-180"
                    ></span>
                    Previous</a
                  >
                </li>
                <li className="mx-1">
                  <a
                    className="w-11 h-12 flex items-center justify-center p-1.5 pt-4 relative font-semibold text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white md:text-base before:absolute before:w-0 before:-top-px before:h-0.5 before:bg-black dark:before:bg-white before:z-10 before:transition-all before:opacity-0 hover:text-black hover:before:w-full hover:before:opacity-100 before:duration-300 transition-colors"
                    href="#"
                    >1</a
                  >
                </li>
                <li className="mx-1 active" aria-current="page">
                  <a
                    className="w-11 h-12 flex items-center justify-center p-1.5 pt-4 relative font-semibold text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white md:text-base before:absolute before:w-0 before:-top-px before:h-0.5 before:bg-black dark:before:bg-white before:z-10 before:transition-all before:opacity-0 hover:text-black hover:before:w-full hover:before:opacity-100 before:duration-300 transition-colors"
                    href="#"
                    >2</a
                  >
                </li>
                <li className="mx-1">
                  <a
                    className="w-11 h-12 flex items-center justify-center p-1.5 pt-4 relative font-semibold text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white md:text-base before:absolute before:w-0 before:-top-px before:h-0.5 before:bg-black dark:before:bg-white before:z-10 before:transition-all before:opacity-0 hover:text-black hover:before:w-full hover:before:opacity-100 before:duration-300 transition-colors"
                    href="#"
                    >3</a
                  >
                </li>
                <li className="ltr:ml-auto rtl:mr-auto">
                  <a
                    className="font-medium tracking-[2px] text-gray-700 dark:text-gray-300 dark:hover:text-white md:text-base text-sm hover:text-black transition-colors pt-2.5 inline-block"
                    href="#"
                    >Next
                    <span
                      className="fas fa-chevron-right text-xs md:text-[13px] rtl:rotate-180"
                    ></span
                  ></a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return { props: { posts } };
};

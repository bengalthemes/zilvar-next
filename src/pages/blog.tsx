import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolios from "@/components/portfolio/Portfolios";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonial/Testimonials";
import SEO from "@/components/ui/SEO";
import Layout from "@/layouts/_layout";
import { getPosts } from "@/utils/mdx-utils";
import { GetStaticProps } from "next/types";
import React from "react";
import { Element } from "react-scroll";

export default function BlogPage({posts}:any) {

  console.log(posts, 'posts')
  return (
    <>
      <SEO />
      <Layout>
      <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <div
                // as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                // href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
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
        </ul>
      </Layout>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return { props: { posts } };
};
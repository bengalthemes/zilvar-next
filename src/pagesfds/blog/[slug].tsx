import Layout from '@/layouts/default-layout';
import { getPostBySlug, postFilePaths } from '@/utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';

export default function PostPage({ source, frontMatter }) {
  console.log(frontMatter, 'font');
  return (
    <Layout>
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="text-xl mb-4">{frontMatter.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} />
          </article>
        </main>
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data } = await getPostBySlug(params.slug);
  // const prevPost = getPreviousPostBySlug(params.slug);
  // const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      // prevPost,
      // nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

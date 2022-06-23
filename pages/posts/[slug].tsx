/* eslint-disable @next/next/no-img-element */
import PageLayout from "../../components/PageLayout";
import Link from "next/link";
import { getPosts, getNavItems, getSiteMetadata } from "../../lib/api";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Post, Page, NavItem, SiteMetadata } from "../../lib/types";

interface PostPageProps {
  site: SiteMetadata;
  navItems: NavItem[];
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ site, navItems, post }) => {
  const page: Page = {
    title: post.title,
    slug: post.slug,
    sections: [],
  };

  return (
    <PageLayout {...{ site, navItems, page }}>
      <div>
        <div id={post.slug} className="max-w-5xl mx-auto prose">
          {post.featuredImage ? (
            <div className="flex flex-col justify-center px-4">
              <Link href={post.featuredImage} passHref>
                <a className="mt-4 mb-0 md:mb-4 hover:opacity-70">
                  <img
                    className="m-0"
                    src={post.featuredImage}
                    alt={`image for ${post.title}`}
                  />
                </a>
              </Link>
            </div>
          ) : null}

          <div className="flex flex-col justify-center">
            <section className="max-w-3xl mx-auto px-4">
              <Link href={`#${post.slug}`} passHref>
                <a className="no-underline hover:opacity-70">
                  <h1 className="mt-4">{post.title}</h1>
                </a>
              </Link>

              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const posts = await getPosts();

  const post = posts.find((p) => p.slug === context.params?.slug);

  return {
    props: { site, navItems, post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return { paths, fallback: false };
};

export default PostPage;

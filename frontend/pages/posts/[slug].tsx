/* eslint-disable @next/next/no-img-element */
import PageLayout from "../../components/PageLayout";
import Link from "next/link";
import useAppContext from "../../lib/hooks/useAppContext";
import { getPosts, getNavItems, getSiteMetadata } from "../../lib/api";
import type { NextPage, GetServerSideProps } from "next";
import type { Post, Page, NavItem, SiteMetadata } from "../../lib/types";
import { excerpt } from "../../lib/utils";

interface PostPageProps {
  site: SiteMetadata;
  navItems: NavItem[];
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ site, navItems, post }) => {
  const { footerHeight } = useAppContext();

  const page: Page = {
    title: post.title,
    slug: post.slug,
    description: excerpt(post.body),
    featuredImage: post.featuredImage,
    sections: [],
  };

  return (
    <PageLayout {...{ site, navItems, page }}>
      <div
        id={post.slug}
        className="max-w-5xl mx-auto prose"
        style={{
          minHeight: `calc(100vh - 84px - ${footerHeight}px)`,
        }}
      >
        {post.featuredImage ? (
          <div className="flex flex-col justify-center px-4">
            <Link href={post.featuredImage} passHref>
              <a className="mt-4 mb-0 md:mb-4">
                <img
                  className="m-0 shadow-lg"
                  width="100%"
                  src={post.featuredImage}
                  alt={`image for ${post.title}`}
                />
              </a>
            </Link>
          </div>
        ) : null}

        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link href={`#${post.slug}`} passHref>
            <a className="no-underline hover:opacity-70">
              <h1 className="mt-0 mb-2">{post.title}</h1>
            </a>
          </Link>

          <div
            className="font-semibold text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />

          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="text-sm opacity-70 md:mb-8">
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const posts = await getPosts();

  const post = posts.find((p) => p.slug === context.params?.slug);

  return {
    props: { site, navItems, post },
  };
};

/*
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return { paths, fallback: false };
};
*/

export default PostPage;

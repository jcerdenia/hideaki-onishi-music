/* eslint-disable @next/next/no-img-element */
import {
  getSiteMetadata,
  getNavItems,
  getBlogPage,
  getPosts,
} from "../../lib/api";
import PageLayout from "../../components/PageLayout";
import PageSection from "../../components/PageSection";
import Link from "next/link";
import { compareBy } from "../../lib/utils";
import type { NextPage, GetStaticProps } from "next";
import type { SiteMetadata, NavItem, Page, Post } from "../../lib/types";

interface PostsProps {
  site: SiteMetadata;
  navItems: NavItem[];
  page: Page;
  posts: Post[];
}

const Posts: NextPage<PostsProps> = ({ site, navItems, page, posts }) => {
  return (
    <PageLayout {...{ site, navItems, page }}>
      <div className="min-h-[calc(100vh-84px)]">
        {page.sections.map((s, i) => {
          return (
            <PageSection key={i} className="max-w-5xl mx-auto" section={s} />
          );
        })}

        <div className="max-w-3xl mx-auto my-4 px-4">
          {posts.map((p, i) => {
            return (
              <div
                key={i}
                className="md:grid md:grid-cols-4 gap-2 border-t py-8 prose"
              >
                <div className="col-span-1 opacity-70">
                  {new Date(p.date).toLocaleDateString("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <div
                  className={
                    p.featuredImage ? "md:col-span-2" : "md:col-span-3"
                  }
                >
                  <Link href={`/posts/${p.slug}`} passHref>
                    <a className="no-underline hover:opacity-70">
                      <h3 className="my-0 font-bold">{p.title}</h3>
                    </a>
                  </Link>

                  <div className="mb-4 md:mb-0">{p.description}</div>
                </div>

                {p.featuredImage ? (
                  <div className="md:col-span-1">
                    <img
                      className="m-0 p-0"
                      src={p.featuredImage}
                      alt="featured post image"
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const page = await getBlogPage();
  const posts = await getPosts();

  return {
    props: {
      site,
      navItems,
      page,
      posts: posts.sort(compareBy("date")).reverse(),
    },
  };
};

export default Posts;

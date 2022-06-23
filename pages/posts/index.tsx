/* eslint-disable @next/next/no-img-element */
import {
  getSiteMetadata,
  getNavItems,
  getBlogPage,
  getPosts,
} from "../../lib/api";
import PageLayout from "../../components/PageLayout";
import Link from "next/link";
import { compareBy, slugify } from "../../lib/utils";
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
    <PageLayout site={site} navItems={navItems} page={page}>
      <div className="max-w-5xl mx-auto px-4 min-h-[calc(100vh-84px)]">
        <div className="grid grid-cols-3">
          <div className="col-span-3 md:col-span-1 my-4 prose">
            {page.sections.map((s, i) => {
              const slug = slugify(s.title);

              return (
                <div key={i}>
                  <div id={slug}>
                    <Link href={`#${slug}`} passHref>
                      <a className="no-underline hover:opacity-70">
                        <h3 className="mt-0">{s.title}</h3>
                      </a>
                    </Link>

                    <div dangerouslySetInnerHTML={{ __html: s.content }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-3 md:col-span-2 my-4 prose">
            {posts.map((p, i) => {
              return (
                <div key={i} className="card card-compact odd:bg-slate-100">
                  {p.featuredImage ? (
                    <figure>
                      <img
                        className="m-0"
                        src={p.featuredImage}
                        alt="featured post image"
                      />
                    </figure>
                  ) : null}

                  <div className="card-body">
                    <div className="text-sm">
                      {new Date(p.date).toLocaleDateString("default", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <h2 className="my-2">{p.title}</h2>
                    <div className="text-lg opacity-70">{p.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
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

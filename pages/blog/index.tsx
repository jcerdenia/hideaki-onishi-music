import {
  getSiteMetadata,
  getNavItems,
  getBlogPage,
  getPosts,
} from "../../lib/api";
import PageLayout from "../../components/PageLayout";
import type { NextPage, GetStaticProps } from "next";
import { SiteMetadata, NavItem, Page, Post } from "../../lib/types";

interface BlogProps {
  site: SiteMetadata;
  navItems: NavItem[];
  page: Page;
  posts: Post[];
}

const Blog: NextPage<BlogProps> = ({ site, navItems, page, posts }) => {
  return (
    <PageLayout site={site} navItems={navItems} page={page}>
      <div className="max-w-6xl mx-auto px-4 prose">
        <h3 className="uppercase opacity-70">{page.title}</h3>

        <p className="text-lg">This page will display a list of posts.</p>

        {posts.map((p, i) => {
          return (
            <section key={i}>
              <h1 className="mb-2">{p.title}</h1>
              <div className="text-lg opacity-70 mb-6">{p.description}</div>

              <div dangerouslySetInnerHTML={{ __html: p.content }} />

              <p className="opacity-70">Published {p.date}</p>
            </section>
          );
        })}
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
    props: { site, navItems, page, posts },
  };
};

export default Blog;

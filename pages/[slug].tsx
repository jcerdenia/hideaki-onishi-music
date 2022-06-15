import { getDynamicPages, getNavItems, getSiteMetadata } from "../lib/api";
import PageLayout from "../components/PageLayout";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Page, NavItem, SiteMetadata } from "../lib/types";

interface PageProps {
  site: SiteMetadata;
  page: Page;
  navItems: NavItem[];
}

const Page: NextPage<PageProps> = (props) => {
  return (
    <PageLayout {...props}>
      <div className="container mx-auto max-w-5xl pt-8">
        <h1 className="text-3xl font-bold">{props.page.title}</h1>

        <p className="py-6">This is the {props.page.title} page.</p>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const pages = await getDynamicPages();

  const page = pages.find((p) => p.slug === context.params?.slug);

  return {
    props: { site, page, navItems },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getDynamicPages();

  const paths = pages.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return { paths, fallback: false };
};

export default Page;

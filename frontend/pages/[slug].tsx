/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";

import PageLayout from "../components/PageLayout";
import PageSection from "../components/PageSection";
import { getDynamicPages, getNavItems, getSiteMetadata } from "../lib/api";
import useAppContext from "../lib/hooks/useAppContext";
import type { NavItem, Page, SiteMetadata } from "../lib/types";

interface PageProps {
  site: SiteMetadata;
  page: Page;
  navItems: NavItem[];
}

const Page: NextPage<PageProps> = (props) => {
  const { footerHeight } = useAppContext();
  const { page } = props;

  return (
    <PageLayout {...props}>
      <div style={{ minHeight: `calc(100vh - 84px - ${footerHeight}px)` }}>
        {page.sections.map((s, i) => {
          return (
            <PageSection
              key={i}
              containerClassName="even:bg-stone-100 py-8"
              className={
                "max-w-5xl mx-auto" +
                (i === page.sections.length - 1 ? " pb-8" : "")
              }
              section={s}
            />
          );
        })}
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const pages = await getDynamicPages();

  const page = pages.find((p) => p.slug === context.params?.slug);

  return {
    props: { site, page, navItems },
  };
};

/*
export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getDynamicPages();

  const paths = pages.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return { paths, fallback: false };
};
*/

export default Page;

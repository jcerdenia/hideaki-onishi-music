import Head from "next/head";
import AppNavbar from "./AppNavbar";
import type { Page, NavItem, SiteMetadata } from "../lib/types";

interface PageLayoutProps {
  site: SiteMetadata;
  page: Page;
  navItems: NavItem[];
  children: React.ReactNode;
}

const PageLayout = ({ site, page, navItems, children }: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta
          name="description"
          content={page.description || site.description}
        />
      </Head>

      <div className="container mx-auto xl:max-w-7xl px-4 font-raleway">
        <AppNavbar brand={site.title} navItems={navItems} email={site.email} />

        {children}
      </div>
    </div>
  );
};

export default PageLayout;

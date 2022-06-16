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
    <div className="font-raleway">
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta
          name="description"
          content={page.description || site.description}
        />
      </Head>

      <AppNavbar brand={site.title} navItems={navItems} email={site.email} />

      {children}
    </div>
  );
};

export default PageLayout;

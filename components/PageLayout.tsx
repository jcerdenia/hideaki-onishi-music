import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { SiteMetadata, NavItem, Page } from "../lib/types";
import Navigation from "./Navigation";

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

      <Navigation site={site} navItems={navItems}>
        {children}

        <Footer />
      </Navigation>
    </div>
  );
};

export default PageLayout;

import Head from "next/head";

import type { NavItem, Page, SiteMetadata } from "../lib/types";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface PageLayoutProps {
  site: SiteMetadata;
  page: Page;
  navItems: NavItem[];
  children: React.ReactNode;
  noNavbarAndFooter?: boolean;
}

const PageLayout = ({
  site,
  page,
  navItems,
  children,
  noNavbarAndFooter = false,
}: PageLayoutProps) => {
  return (
    <div className="font-dmSans">
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta property="og:title" content={`${page.title} | ${site.title}`} />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={page.description || site.description}
        />
        <meta
          property="og:description"
          content={page.description || site.description}
        />
        <meta
          property="og:image"
          content={page.featuredImage || site.featuredImage}
        />
      </Head>

      {!noNavbarAndFooter ? (
        <Navigation {...{ site, navItems }}>
          {children}

          <Footer {...{ site, navItems }} />
        </Navigation>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default PageLayout;

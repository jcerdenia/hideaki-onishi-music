import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
import type { SiteMetadata, NavItem, Page } from "../lib/types";

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
    <div className="font-raleway">
      <Head>
        <title>{`${page.title} | ${site.title}`}</title>
        <meta property="og:title" content={page.title} />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={page.description || site.description}
        />
        <meta
          property="og:description"
          content={page.description || site.description}
        />
        <meta property="og:image" content={site.featuredImage} />
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

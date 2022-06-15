import { getHomePage, getNavItems, getSiteMetadata } from "../lib/api";
import PageLayout from "../components/PageLayout";
import type { NextPage, GetStaticProps } from "next";
import type { HomePage, NavItem, SiteMetadata } from "../lib/types";

interface HomeProps {
  site: SiteMetadata;
  page: HomePage;
  navItems: NavItem[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <PageLayout {...props}>
      <div className="flex" style={{ height: "calc(100vh - 72px)" }}>
        <div className="hero">
          <div className="hero-content text-center py-12">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold">
                {props.page.tagline}
              </h1>

              <p className="text-lg md:text-2xl my-8 text-gray-500 font-light">
                {props.page.description}
              </p>

              <p className="btn btn-primary">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const site = await getSiteMetadata();
  const page = await getHomePage();
  const navItems = await getNavItems();

  return {
    props: { site, page, navItems },
  };
};

export default Home;

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
  const { site, page } = props;

  return (
    <PageLayout {...props}>
      <div className="relative flex h-[calc(100vh-72px)]">
        <div
          className="absolute left-0 top-0 h-[50%] w-[100%] bg-cover bg-top opacity-70"
          style={{ backgroundImage: `url(${site.featuredImage})` }}
        />

        <div className="hero">
          <div className="hero-content bg-base-100 p-6 rounded">
            <div className="max-w-xl md:max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold">{page.tagline}</h1>

              <div
                className="prose text-2xl md:text-3xl my-8 text-gray-500 font-thin"
                dangerouslySetInnerHTML={{ __html: page.description }}
              />

              <div className="btn btn-primary mr-2">Do Something</div>
              <div className="btn btn-secondary">Do Another Thing</div>
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

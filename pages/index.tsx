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
      <div className="max-w-7xl mx-auto relative min-h-[calc(100vh-84px)]">
        <div
          className="absolute left-0 top-0 h-[50%] w-[100%] bg-cover opacity-70"
          style={{ backgroundImage: `url(${site.featuredImage})` }}
        />

        <div className="hero">
          <div className="hero-content bg-base-100 p-4 rounded mt-[calc(100vh/3)]">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold">{page.tagline}</h1>

              <div
                className="prose text-2xl md:text-3xl my-8 opacity-70 font-thin"
                dangerouslySetInnerHTML={{ __html: page.description }}
              />

              <div className="btn btn-primary mr-2">Do Something</div>
              <div className="btn btn-secondary">Do Another Thing</div>
            </div>
          </div>
        </div>

        <div className="my-8 max-w-4xl mx-auto">More content can go here.</div>
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

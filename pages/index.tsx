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
      <div
        className="relative max-w-5xl mx-auto min-h-[calc(100vh-84px)]"
        // Workaround to preserve absolute positioning of child div:
        style={{ border: "1px solid transparent" }}
      >
        <div
          className="absolute left-0 top-0 h-[50%] w-[100%] bg-cover opacity-70 -z-50"
          style={{ backgroundImage: `url(${site.featuredImage})` }}
        />

        <div className="max-w-3xl mx-auto bg-base-100 mt-[calc(100vh/4)] p-4 rounded">
          <h1 className="mx-auto text-4xl md:text-6xl font-bold">
            {page.tagline}
          </h1>

          <div
            className="prose text-xl md:text-2xl my-8 opacity-70 font-thin"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />

          <div className="btn btn-primary mr-2">Do Something</div>
          <div className="btn btn-secondary">Do Another Thing</div>
        </div>

        <div className="my-8 max-w-5xl mx-auto px-4">
          More content can go here.
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

import PageLayout from "../components/PageLayout";
import PageSection from "../components/PageSection";
import useAppContext from "../lib/hooks/useAppContext";
import { getHomePage, getNavItems, getSiteMetadata } from "../lib/api";
import type { NextPage, GetStaticProps } from "next";
import type { HomePage, NavItem, SiteMetadata } from "../lib/types";

interface HomeProps {
  site: SiteMetadata;
  page: HomePage;
  navItems: NavItem[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { footerHeight } = useAppContext();
  const { page } = props;

  return (
    <PageLayout {...props}>
      <div
        className="relative"
        style={{
          border: "1px solid transparent", // Workaround to preserve absolute positioning of child div
          minHeight: `calc(100vh - 84px - ${footerHeight}px)`,
        }}
      >
        <div
          className="absolute left-0 top-0 h-[calc(50vh-84px)] w-[100%] opacity-50 -z-50 bg-base-100 bg-blend-darken bg-cover"
          style={{ backgroundImage: `url(${page.featuredImage})` }}
        />

        <div className="max-w-3xl mx-auto bg-base-100 mt-[calc(100vh/4)] p-4 rounded">
          <h1 className="mx-auto text-4xl md:text-6xl font-bold">
            {page.heroTitle}
          </h1>

          <div
            className="prose text-xl md:text-2xl my-8 opacity-70 font-light"
            dangerouslySetInnerHTML={{ __html: page.heroDescription }}
          />

          {page.primaryAction ? (
            <a className="btn btn-primary mr-2" href={page.primaryAction.path}>
              {page.primaryAction.label}
            </a>
          ) : null}

          {page.secondaryAction ? (
            <a
              className="btn btn-secondary mr-2"
              href={page.secondaryAction.path}
            >
              {page.secondaryAction.label}
            </a>
          ) : null}
        </div>

        <div className="mt-6 mb-8 max-w-3xl mx-auto">
          {page.sections.map((s, i) => {
            return <PageSection key={i} section={s} />;
          })}
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

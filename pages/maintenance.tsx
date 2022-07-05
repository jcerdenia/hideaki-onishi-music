import { getSiteMetadata } from "../lib/api";
import PageLayout from "../components/PageLayout";
import type { NextPage, GetServerSideProps } from "next";
import type { SiteMetadata, Page } from "../lib/types";

interface MaintenanceProps {
  site: SiteMetadata;
}

const Maintenance: NextPage<MaintenanceProps> = ({ site }) => {
  const page: Page = {
    title: "Coming Soon | Hideaki Onishi Music",
    description: "The official website of Hideaki Onishi Music",
    slug: "maintenance",
    sections: [],
    featuredImage: "https://hideakionishimusic.netlify.app/images/mahler.png",
  };

  return (
    <PageLayout site={site} navItems={[]} page={page} noNavbarAndFooter>
      <div className="max-w-5xl mx-auto relative min-h-[calc(100vh-84px)]">
        <div className="hero">
          <div className="hero-content p-0 bg-base-100 rounded mt-[calc(100vh/4)]">
            <div className="max-w-3xl p-8">
              <h1 className="mx-auto text-4xl md:text-6xl font-bold">
                Hideaki Onishi Music
              </h1>

              <div
                className="prose text-xl md:text-3xl my-8 opacity-70 font-thin"
                dangerouslySetInnerHTML={{
                  __html: "Where Theory and Practice Merge",
                }}
              />

              <div className="uppercase">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const site = await getSiteMetadata();

  return {
    props: { site },
  };
};

export default Maintenance;

import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import data from "../data";

const Home: NextPage = () => {
  const { site } = data;

  return (
    <PageLayout title={site.title} description={site.description}>
      <div className="flex" style={{ height: "calc(100vh - 72px)" }}>
        <div className="hero bg-base-100">
          <div className="hero-content text-center py-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">{site.tagline}</h1>
              <p className="text-lg md:text-xl my-6">{site.description}</p>

              <p className="btn btn-primary">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

//export const getStaticProps = async () => {};

export default Home;

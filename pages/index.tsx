import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import data from "../data";
import { attributes, react as HomeContent } from "../content/home.md";

const { site } = data;

const Home: NextPage = () => {
  const { title, cats } = attributes;

  return (
    <PageLayout title={site.title} description={site.description}>
      <div>
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

      <HomeContent />
      <ul>
        {cats.map((cat: any, k: number) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default Home;

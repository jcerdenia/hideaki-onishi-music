import type { SiteMetadata, HomePage, Page } from "./types";

interface DummyData {
  site: SiteMetadata;
  home: HomePage;
  pages: Page[];
}

const dummyData: DummyData = {
  site: {
    title: "Hideaki Onishi Music",
    description: "Lorem ipsum dolor sit amet.",
    author: "Hideaki Onishi",
    email: "name@email.com",
  },
  home: {
    title: "Home",
    slug: "",
    tagline: "Where Theory and Practice Merge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  pages: [
    {
      title: "About",
      slug: "about",
    },
    {
      title: "Offerings",
      slug: "offerings",
    },
    {
      title: "Sari-Sari",
      slug: "sari-sari",
    },
  ],
};

export default dummyData;

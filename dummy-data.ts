import type { SiteMetadata, HomePage, Page } from "./lib/types";

interface DummyData {
  site: SiteMetadata;
  home: HomePage;
  pages: Page[];
}

const lipsum =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

const dummyData: DummyData = {
  site: {
    title: "Hideaki Onishi Music",
    description: "Lorem ipsum dolor sit amet.",
    featuredImage: "/images/mahler.png",
    author: "Hideaki Onishi",
    email: "name@email.com",
  },
  home: {
    title: "Home",
    slug: "",
    tagline: "Where Theory and Practice Merge",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>`,
    sections: [],
  },
  pages: [
    {
      title: "About",
      slug: "about",
      sections: [
        {
          title: "About Hideaki Onishi",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Teaching Philosophy",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Hideaki Onishi Music",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
      ],
    },
    {
      title: "Offerings",
      slug: "offerings",
      sections: [
        {
          title: "Piano",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Kidz Music",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "ABRSM",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
      ],
    },
    {
      title: "Sari-Sari",
      slug: "sari-sari",
      sections: [
        {
          title: "Kulintang",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "About Sari-Sari",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Improvisation",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
      ],
    },
  ],
};

export default dummyData;

import type { SiteMetadata, HomePage, Page, Post } from "./lib/types";

interface DummyData {
  site: SiteMetadata;
  home: HomePage;
  blog: Page;
  pages: Page[];
  posts: Post[];
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
    tagline: "Hideaki Onishi Music",
    description: `Where theory and practice merge`,
    sections: [],
  },
  blog: {
    title: "Dr Onishi's Musings",
    shortTitle: "DOM",
    slug: "blog",
    sections: [],
  },
  posts: [
    {
      slug: "my-first-post",
      title: "My First Post",
      description: "This is a post.",
      content: lipsum + lipsum,
      date: "2022-06-16",
      author: "Hideaki Onishi",
      tags: ["music-theory", "mahler"],
    },
    {
      slug: "my-second-post",
      title: "My Second Post",
      description: "This is another post.",
      content: lipsum + lipsum,
      date: "2022-06-17",
      author: "Hideaki Onishi",
      tags: ["music-theory", "schoenberg"],
    },
  ],
  pages: [
    {
      title: "About",
      slug: "about",
      sections: [
        {
          title: "About Hideaki Onishi",
          content: lipsum + lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Teaching Philosophy",
          content: lipsum,
        },
        {
          title: "Hideaki Onishi Music",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Testimonials",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Music Theory",
          content: lipsum,
        },
        {
          title: "Why HOM?",
          content: lipsum,
        },
        {
          title: "NIE Classes",
          content: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Accomplishments",
          content: lipsum,
        },
      ],
    },
    {
      title: "Class Offerings",
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
        {
          title: "Upper Theory (Advanced)",
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
        },
      ],
    },
  ],
};

export default dummyData;

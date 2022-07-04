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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Hideaki Onishi",
    email: "name@email.com",
    copyright: "© 2022 Hideaki Onishi Music Pte. Ltd.",
    socials: [
      {
        name: "Facebook",
        url: "facebook.com",
      },
      {
        name: "YouTube",
        url: "youtube.com",
      },
      {
        name: "Twitter",
        url: "twitter.com",
      },
    ],
  },
  home: {
    title: "Home",
    slug: "",
    featuredImage: "/images/mahler.png",
    heroTitle: "Where Theory and Practice Merge",
    heroDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    primaryAction: {
      label: "Do Something",
      path: "/",
    },
    secondaryAction: {
      label: "Do Something Else",
      path: "/",
    },
    sections: [],
  },
  blog: {
    title: "DOM",
    slug: "posts",
    sections: [
      {
        title: "Dr Onishi's Musings",
        body: "<p>Optional description here.</p>",
      },
    ],
  },
  pages: [
    {
      title: "About",
      slug: "about",
      sections: [
        {
          title: "About Hideaki Onishi",
          body: lipsum + lipsum,
          featuredImage: "/images/profile.jpeg",
        },
        {
          title: "Teaching Philosophy",
          body: lipsum,
        },
        {
          title: "Hideaki Onishi Music",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Testimonials",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Music Theory",
          body: lipsum,
        },
        {
          title: "Why HOM?",
          body: lipsum,
        },
        {
          title: "NIE Classes",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Accomplishments",
          body: lipsum,
        },
      ],
    },
    {
      title: "Offerings",
      slug: "offerings",
      sections: [
        {
          title: "Piano",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Kidz Music",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "ABRSM",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Upper Theory (Advanced)",
          body: lipsum,
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
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "About Sari-Sari",
          body: lipsum,
          featuredImage: "/images/placeholder.jpeg",
        },
        {
          title: "Improvisation",
          body: lipsum,
        },
      ],
    },
  ],
  posts: [
    {
      slug: "my-first-post",
      title: "My First Post: Lorem ipsum dolor sit amet",
      featuredImage: "/images/mahler.png",
      description: "This is a post.",
      body: lipsum + lipsum,
      date: "2022-06-16",
      author: "Hideaki Onishi",
      tags: ["music-theory", "mahler"],
    },
  ],
};

export default dummyData;

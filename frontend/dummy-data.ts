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

const companyInformation = `<p><strong>Hideaki Onishi Music Pte. Ltd.</strong></p><p>Company Registration Number (UEN): 202144986H</p><p>Company Type: Exempt Private Company Limited By Shares</p><p>Status: Live Company</p><p>Company Incorporation Date: 30 December 2021</p><p></p><p><strong>Registered Office Address </strong></p><p>458 Corporation Road #05-04</p><p>Singapore 649814</p><p></p><p><strong>Officers</strong></p><p>Hideaki Onishi (Director)</p><p>Lim Wei, Jackson (Secretary)</p><p></p><p><strong>Contact:</strong></p><p>Phone/SMS/WhatsApp: +65 9433 0455</p><p>Email: hideakionishi@gmail.com</p><p>Website:<a href="http://www.hideakionishimusic.com">http://www.hideakionishimusic.com</a></p>`;

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
    heroDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    primaryAction: {
      label: "Do Something",
      path: "/",
    },
    secondaryAction: {
      label: "Do Something Else",
      path: "/",
    },
    sections: [
      {
        title: "Optional Section",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
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
        {
          title: "Company Information",
          body: companyInformation,
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

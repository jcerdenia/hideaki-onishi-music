import dummyData from "../dummy-data";
import { slugify } from "./utils";
import parseMarkdown from "./parseMarkdown";
import type { SiteMetadata, Page, HomePage, NavItem, Post } from "./types";

export const getSiteMetadata = async (): Promise<SiteMetadata> => {
  return parseMarkdown("content/site/master.md", ["metadata"]);
};

export const getHomePage = async (): Promise<HomePage> => {
  const {
    title,
    description,
    hero_title: heroTitle,
    hero_description: heroDescription,
    slug,
    sections,
  } = parseMarkdown("content/site/home.md", ["metadata"]);

  return {
    title,
    description: description || heroDescription,
    heroTitle,
    heroDescription,
    slug,
    sections,
  };
};

export const getPostsPage = async (): Promise<Page> => {
  return parseMarkdown("content/site/posts.md", ["metadata"]);
};

export const getDynamicPages = async (): Promise<Page[]> => {
  return require("fs")
    .readdirSync("content/pages")
    .map((p: any) => parseMarkdown(`content/pages/${p}`, ["metadata"]));
};

export const getPosts = async (): Promise<Post[]> => {
  return require("fs")
    .readdirSync("content/posts")
    .map((p: any) => {
      const { metadata, content } = parseMarkdown(`content/posts/${p}`);

      return { ...metadata, content };
    });
};

export const getNavItems = async (): Promise<NavItem[]> => {
  const home = await getHomePage();
  const pages = await getDynamicPages();
  const blog = await getPostsPage();

  return [home, ...pages, blog].map((p: Page) => {
    return {
      title: p.shortTitle || p.title,
      path: `/${p.slug}`,
      subItems: p.sections.map((s) => {
        return {
          title: s.title,
          path: `/${p.slug}/#${slugify(s.title)}`,
        };
      }),
    };
  });
};

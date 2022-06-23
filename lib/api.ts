import type { SiteMetadata, Page, HomePage, NavItem, Post } from "./types";
import dummyData from "../dummy-data";
import { slugify } from "./utils";

export const getSiteMetadata = async (): Promise<SiteMetadata> => {
  return dummyData.site;
};

export const getHomePage = async (): Promise<HomePage> => {
  return dummyData.home;
};

export const getBlogPage = async (): Promise<Page> => {
  return dummyData.blog;
};

export const getDynamicPages = async (): Promise<Page[]> => {
  return dummyData.pages;
};

export const getPosts = async (): Promise<Post[]> => {
  return dummyData.posts;
};

export const getNavItems = async (): Promise<NavItem[]> => {
  const home = await getHomePage();
  const pages = await getDynamicPages();
  const blog = await getBlogPage();

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

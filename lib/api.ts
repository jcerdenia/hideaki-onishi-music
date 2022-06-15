import type { Page, HomePage, NavItem, SiteMetadata } from "./types";
import dummyData from "./dummy-data";

export const getSiteMetadata = async (): Promise<SiteMetadata> => {
  return dummyData.site;
};

export const getHomePage = async (): Promise<HomePage> => {
  return dummyData.home;
};

export const getDynamicPages = async (): Promise<Page[]> => {
  return dummyData.pages;
};

export const getNavItems = async (): Promise<NavItem[]> => {
  const home = await getHomePage();
  const pages = await getDynamicPages();

  return [home, ...pages].map((p: Page) => {
    return {
      title: p.title,
      path: `/${p.slug}`,
    };
  });
};

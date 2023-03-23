import { toHTML } from "@portabletext/to-html";

import dummyData from "../dummy-data";
import client from "./sanityClient";
import type { HomePage, NavItem, Page, Post, SiteMetadata } from "./types";
import { slugify } from "./utils";

export const getSiteMetadata = async (): Promise<SiteMetadata> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    return dummyData.site;
  }

  const data = await client.fetch(`*[_type == "site"] {
    title,
    description,
    author,
    email,
    copyright,
    "socials": *[_type == "social"] {
      name,
      url
    }
  }[0]`);

  return {
    title: data.title || "",
    description: toHTML(data.description || ""),
    author: data.author || "",
    email: data.email || "",
    copyright: data.copyright || "",
    socials: data.socials || [],
  };
};

export const getHomePage = async (): Promise<HomePage> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    return dummyData.home;
  }

  const data = await client.fetch(`*[_type == "homePage"] {
    title,
    "featuredImage": featuredImage.asset->url,
    heroTitle,
    heroDescription,
    primaryAction,
    secondaryAction,
    "sections": sections[]-> {
      title,
      body
    }
  }[0]`);

  return {
    title: data.title,
    slug: "",
    heroTitle: data.heroTitle,
    heroDescription: toHTML(data.heroDescription),
    featuredImage: data.featuredImage,
    primaryAction: data.primaryAction,
    secondaryAction: data.secondaryAction,
    sections: data.sections
      ? data.sections.map((s: any) => {
          return {
            title: s.title,
            body: s.body ? toHTML(s.body) : "",
          };
        })
      : [],
  };
};

export const getPostsPage = async (): Promise<Page> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    return dummyData.blog;
  }

  const data = await client.fetch(`*[_type == "postsPage" ] {
    title,
    "slug": slug.current,
    "sections": sections[]-> {
      title,
      body
    }
  }[0]`);

  return {
    ...data,
    sections: data.sections
      ? data.sections
          .filter((s: any) => s)
          .map((s: any) => {
            return {
              title: s.title,
              body: s.body ? toHTML(s.body) : "",
            };
          })
      : [],
  };
};

export const getDynamicPages = async (): Promise<Page[]> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    return dummyData.pages;
  }

  const data = await client.fetch(`*[_type == "page"] | order(title) {
    title,
    "slug": slug.current,
    "sections": sections[]-> {
      title,
      "featuredImage": featuredImage.asset->url,
      body
    }
  }`);

  return data.map((p: any) => {
    return {
      ...p,
      sections: p.sections
        ? p.sections
            .filter((s: any) => s)
            .map((s: any) => {
              return {
                ...s,
                body: s.body ? toHTML(s.body) : "",
              };
            })
        : [],
    };
  });
};

export const getPosts = async (): Promise<Post[]> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    return dummyData.posts;
  }

  const data = await client.fetch(`*[_type == "post"] {
    title,
    "slug": slug.current,
    "featuredImage": featuredImage.asset->url,
    description,
    date,
    body
  }`);

  return data.map((p: any) => {
    return {
      ...p,
      body: toHTML(p.body),
    };
  });
};

export const getNavItems = async (): Promise<NavItem[]> => {
  if (process.env.NEXT_PUBLIC_DUMMY_MODE === "1") {
    const home = await getHomePage();
    const pages = await getDynamicPages();
    const blog = await getPostsPage();

    return [home, ...pages, blog].map((p: Page) => {
      return {
        title: p.shortTitle || p.title,
        path: `/${p.slug}`,
        subItems: p.sections
          .filter((s: any) => s)
          .map((s) => {
            return {
              title: s.title,
              path: `/${p.slug}/#${slugify(s.title)}`,
            };
          }),
      };
    });
  }

  const data = await client.fetch(`*[_type == "navigation"] {
    "navItems": menuItems[]-> {
      title,
      "slug": slug.current,
      "sections": sections[]-> {
        title,
      }
    }
  }[0]`);

  return data.navItems.map((n: any): NavItem => {
    return {
      title: n.title,
      path: n.slug ? `/${n.slug}` : "/",
      subItems: n.sections
        ? n.sections
            .filter((s: any) => s)
            .map((s: any): NavItem => {
              return {
                title: s.title,
                path: n.slug ? `/${n.slug}/#${slugify(s.title)}` : "",
              };
            })
        : [],
    };
  });
};

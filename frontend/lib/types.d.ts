export interface SiteMetadata {
  title: string;
  description: string;
  featuredImage?: string;
  author: string;
  email: string;
  copyright: string;
  socials: Social[];
}

export interface NavItem {
  title: string;
  path: string;
  subItems?: NavItem[];
}

export interface Page {
  title: string;
  shortTitle?: string;
  slug: string;
  description?: string;
  sections: Section[];
  featuredImage?: string;
}

export interface HomePage extends Page {
  heroTitle: string;
  heroDescription: string;
  primaryAction?: SiteAction;
  secondaryAction?: SiteAction;
}

export interface Section {
  title: string;
  featuredImage?: string;
  body: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  featuredImage?: string;
  body: string;
  date: string;
  author: string;
  tags: string[];
}

export interface Social {
  name: string;
  url: string;
  icon?: string;
}

interface SiteAction {
  label: string;
  path: string;
}

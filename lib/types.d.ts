export interface SiteMetadata {
  title: string;
  description: string;
  featuredImage: string;
  author: string;
  email: string;
}

export interface NavItem {
  title: string;
  path: string;
  subItems?: NavItem[];
}

export interface Page {
  title: string;
  slug: string;
  description?: string;
  sections: Section[];
}

export interface HomePage extends Page {
  tagline: string;
  description: string;
}

export interface Section {
  title: string;
  featuredImage?: string;
  content: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

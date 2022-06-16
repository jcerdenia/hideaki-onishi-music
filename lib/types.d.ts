export interface SiteMetadata {
  title: string;
  description: string;
  featuredImage: string;
  author: string;
  email: string;
}

export interface Page {
  title: string;
  slug: string;
  description?: string;
}

export interface HomePage extends Page {
  tagline: string;
  description: string;
}

export interface NavItem {
  title: string;
  path: string;
  subItems?: NavItem[];
}

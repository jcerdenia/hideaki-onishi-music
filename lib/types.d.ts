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

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  email: string;
}

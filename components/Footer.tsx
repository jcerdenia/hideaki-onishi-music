import Link from "next/link";
import { SiteMetadata, NavItem } from "../lib/types";

interface FooterProps {
  site: SiteMetadata;
  navItems: NavItem[];
}

const Footer = ({ site, navItems }: FooterProps) => {
  return (
    <div className="bg-neutral text-neutral-content scroll-smooth">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 text-sm font-thin prose-neutral">
            <div>{site.copyright}</div>

            <div
              className="my-1"
              dangerouslySetInnerHTML={{ __html: site.description }}
            />
          </div>

          <div className="col-span-6 py-8 md:col-span-3 md:py-0 text-sm font-thin prose-neutral">
            <h5 className="font-semibold">Site Map</h5>

            {navItems.map((n, i) => {
              return (
                <div key={i} className="my-1">
                  <Link href={n.path}>{n.title}</Link>
                </div>
              );
            })}
          </div>

          <div className="col-span-6 py-8 md:col-span-3 md:py-0 text-sm font-thin prose-neutral">
            <h5 className="font-semibold">Links</h5>

            {site.socials.map((s, i) => {
              return (
                <div key={i} className="my-1">
                  <a href={s.url} className="my-1">
                    {s.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

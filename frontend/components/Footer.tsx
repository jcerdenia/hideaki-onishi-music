import { useEffect, useRef } from "react";

import useAppContext from "../lib/hooks/useAppContext";
import useInnerWidth from "../lib/hooks/useInnerWidth";
import { NavItem, SiteMetadata } from "../lib/types";

interface FooterProps {
  site: SiteMetadata;
  navItems: NavItem[];
}

const Footer = ({ site, navItems }: FooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const innerWidth = useInnerWidth();
  const { setFooterHeight } = useAppContext();

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current?.clientHeight);
    }
  }, [footerRef, innerWidth, setFooterHeight]);

  return (
    <div
      ref={footerRef}
      className="bg-neutral text-neutral-content scroll-smooth text-slate-300"
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 font-light prose-neutral">
            <div>{site.copyright}</div>

            <div
              className="mt-4 mb-1"
              dangerouslySetInnerHTML={{
                __html: site.description.replace(/<p>\s*<\/p>/g, "<br>"),
              }}
            />
          </div>

          {/* Empty column for spacing */}
          <div className="hidden md:block col-span-12 md:col-span-1" />

          <div className="col-span-6 md:col-span-3 font-light prose-neutral">
            <h5 className="font-semibold">Pages</h5>

            {navItems.map((n, i) => {
              return (
                <div key={i} className="my-1">
                  {/* Use native link as a workaround since
                  NextJS Link won't scroll to top of page */}
                  <a className="hover:opacity-70" href={n.path}>
                    {n.title}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="col-span-6 md:col-span-3 font-light prose-neutral">
            <h5 className="font-semibold">Socials</h5>

            {site.socials.map((s, i) => {
              const domains = ["facebook", "twitter", "youtube", "instagram"];
              const domain = domains.find((d) => s.url.includes(`${d}.com`));
              const icon = domain ? `bi bi-${domain}` : "bi bi-link-45deg";

              return (
                <div key={i} className="my-1">
                  <i className={`${icon} mr-2`} />
                  <a href={s.url} className="my-1 hover:opacity-70">
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

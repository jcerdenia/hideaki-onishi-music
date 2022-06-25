import { SiteMetadata } from "../lib/types";

interface FooterProps {
  site: SiteMetadata;
}

const Footer = ({ site }: FooterProps) => {
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm font-thin">
        <div>{site.copyright}</div>

        <div dangerouslySetInnerHTML={{ __html: site.description }}></div>
      </div>
    </div>
  );
};

export default Footer;

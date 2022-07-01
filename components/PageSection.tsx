/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { slugify } from "../lib/utils";
import type { Section } from "../lib/types";

interface PageSectionProps {
  containerClassName?: string;
  className?: string;
  section: Section;
  noImage?: boolean;
}

const PageSection = ({
  containerClassName,
  className,
  section,
  noImage = false,
}: PageSectionProps) => {
  const slug = slugify(section.title);
  const hasImage = section.featuredImage && !noImage;

  return (
    <div className={containerClassName}>
      <div
        id={slug}
        className={
          `${className} prose` + (hasImage ? " grid md:grid-cols-2 gap-4" : "")
        }
      >
        {hasImage ? (
          <div className="flex flex-col justify-center px-4">
            <img
              className="mt-4 mb-0 md:mb-4"
              src={section.featuredImage}
              alt={`image for ${section.title}`}
            />
          </div>
        ) : null}

        <div className="flex flex-col justify-center max-w-3xl mx-auto px-4">
          <Link href={`#${slug}`} passHref>
            <a className="no-underline hover:opacity-70">
              <h3 className="font-bold mt-4 mb-2">{section.title}</h3>
            </a>
          </Link>

          <div dangerouslySetInnerHTML={{ __html: section.body }} />
        </div>
      </div>
    </div>
  );
};

export default PageSection;

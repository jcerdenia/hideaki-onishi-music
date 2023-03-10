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
  const hasLongText = section.body.length > 1200;

  const image = (
    <img
      className="mt-4 mb-0 md:mb-4 shadow-md"
      src={section.featuredImage}
      alt={`image for ${section.title}`}
    />
  );

  return (
    <div className={containerClassName}>
      <div
        id={slug}
        className={
          `${className} prose` +
          (hasImage && !hasLongText ? " grid md:grid-cols-2 gap-4" : "")
        }
      >
        {hasImage && hasLongText ? <div className="px-4">{image}</div> : null}

        {hasImage && !hasLongText ? (
          <div className="flex flex-col justify-center px-4">{image}</div>
        ) : null}

        <div className="flex flex-col justify-center max-w-3xl mx-auto px-4">
          <Link href={`#${slug}`} passHref>
            <a className="no-underline hover:opacity-70">
              <h2 className="md:text-4xl font-bold mt-4 mb-2">
                {section.title}
              </h2>
            </a>
          </Link>

          <div
            className="section-body"
            dangerouslySetInnerHTML={{ __html: section.body }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageSection;

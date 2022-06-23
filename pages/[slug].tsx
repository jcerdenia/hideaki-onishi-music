/* eslint-disable @next/next/no-img-element */
import { getDynamicPages, getNavItems, getSiteMetadata } from "../lib/api";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { slugify } from "../lib/utils";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Page, NavItem, SiteMetadata } from "../lib/types";

interface PageProps {
  site: SiteMetadata;
  page: Page;
  navItems: NavItem[];
}

const Page: NextPage<PageProps> = (props) => {
  const { page } = props;

  return (
    <PageLayout {...props}>
      <div className="max-w-5xl mx-auto px-4 prose">
        <h3 className="opacity-70 font-light uppercase">{page.title}</h3>
      </div>

      {page.sections.map((s, i) => {
        const slug = slugify(s.title);

        return (
          <div key={i} className="even:bg-base-200">
            <div
              id={slug}
              className={
                "max-w-5xl mx-auto prose" +
                (s.featuredImage ? " grid md:grid-cols-2 gap-4" : "")
              }
            >
              {s.featuredImage ? (
                <div className="flex flex-col justify-center px-4">
                  <img
                    className="mt-4 mb-0 md:mb-4"
                    src={s.featuredImage}
                    alt={`image for ${s.title}`}
                  />
                </div>
              ) : null}

              <div className="flex flex-col justify-center">
                <section className="max-w-3xl mx-auto px-4">
                  <Link href={`#${slug}`} passHref>
                    <a className="no-underline hover:opacity-70">
                      <h3 className="mt-4">{s.title}</h3>
                    </a>
                  </Link>

                  <div dangerouslySetInnerHTML={{ __html: s.content }} />
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = await getSiteMetadata();
  const navItems = await getNavItems();
  const pages = await getDynamicPages();

  const page = pages.find((p) => p.slug === context.params?.slug);

  return {
    props: { site, page, navItems },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getDynamicPages();

  const paths = pages.map((p) => {
    return {
      params: { slug: p.slug },
    };
  });

  return { paths, fallback: false };
};

export default Page;

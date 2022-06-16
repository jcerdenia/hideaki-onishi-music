/* eslint-disable @next/next/no-img-element */
import { getDynamicPages, getNavItems, getSiteMetadata } from "../lib/api";
import PageLayout from "../components/PageLayout";
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
      <div className="my-4 px-4">
        <div className="mx-auto max-w-7xl prose">
          <h1>{page.title}</h1>

          {page.sections.map((s, i) => {
            return (
              <div
                key={i}
                id={slugify(s.title)}
                className={`my-4 ${
                  s.featuredImage ? "grid md:grid-cols-2 md:gap-8" : ""
                } ${i % 2 !== 0 ? "" : ""}`}
              >
                {s.featuredImage ? (
                  <div className="flex flex-col justify-center">
                    <img
                      className="mx-auto"
                      src={s.featuredImage}
                      alt={`image for ${s.title}`}
                    />
                  </div>
                ) : null}

                <div className="flex flex-col justify-center">
                  <section className="max-w-4xl mx-auto">
                    <h2 className="mt-0">{s.title}</h2>
                    <div
                      className="text-lg"
                      dangerouslySetInnerHTML={{ __html: s.content }}
                    />
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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

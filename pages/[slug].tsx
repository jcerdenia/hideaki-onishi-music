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
      <div className="container mx-auto max-w-7xl pt-8 prose">
        <div className="max-w-4xl mx-auto">
          <h1>{page.title}</h1>
        </div>

        {page.sections.map((s, i) => {
          return (
            <div key={i} id={slugify(s.title)} className="max-w-5xl mx-auto">
              {s.featuredImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-4xl mx-auto"
                  src={s.featuredImage}
                  alt={`image for ${s.title}`}
                />
              ) : null}

              <div
                className={
                  i % 2 !== 0
                    ? "max-w-5xl mx-auto bg-base-200 border rounded"
                    : undefined
                }
              >
                <section className="max-w-4xl mx-auto">
                  <h2 className="mt-8">{s.title}</h2>
                  <div
                    className="text-lg mb-8"
                    dangerouslySetInnerHTML={{ __html: s.content }}
                  />
                </section>
              </div>
            </div>
          );
        })}
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

import Head from "next/head";
import AppNavbar from "./AppNavbar";

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main className="container mx-auto min-h-screen font-poppins">
        <AppNavbar />

        {children}
      </main>
    </div>
  );
};

export default PageLayout;

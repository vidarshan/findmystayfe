import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Findmystay | Find best hotels in California",
  description: "Find the most rated hotels in California.",
  keywords: "hotels, california, vacation, stay",
};

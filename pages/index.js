import Head from "next/head";
import Layout from "../components/layout";
import Quotes from "../components/quotes";
import { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">{siteTitle}</h1>
          <h4>Your daily dose of inspiration!</h4>
          <Quotes />
        </main>
      </Layout>
    </div>
  );
}

import Head from "next/head";
import Layout from "../components/layout";
import Quotes from "../components/quotes";
import Button from "../components/button";
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
          <Quotes />
          <Button />
        </main>
      </Layout>
    </div>
  );
}

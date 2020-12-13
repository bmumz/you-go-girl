import Head from "next/head";
import Layout from "../components/layout";
import Quotes from "../components/quotes";
import Button from "../components/button";
import { siteTitle } from "../components/layout";
<<<<<<< HEAD
import styles from "../components/layout.module.css";
=======
>>>>>>> 1d711432edb82d6247e917b5a8c34fcd7e2c33bb

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

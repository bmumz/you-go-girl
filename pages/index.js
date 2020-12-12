import Head from "next/head";
import Layout from "../components/layout";
import Quotes from "../components/quotes";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>You Go, Girl!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">Your source for a pick me up!</h1>
          <Quotes />
        </main>
      </Layout>
    </div>
  );
}

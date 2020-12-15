import Head from "next/head";
import Layout from "../components/layout";
import Quotes from "../components/quotes";
import Button from "../components/button";
import axios from "axios";

import { siteTitle } from "../components/seo";

let url = "https://inspirational-quotes-api.herokuapp.com/quotes";
const fetchData = async () =>
  await axios
    .get(url)
    .then((res) => ({
      error: false,
      quotes: res.data,
    }))
    .catch((err) => ({
      error: true,
      quotes: null,
    }));

export default function Home({ quotes, error }) {
  if (error) return <div>failed to load</div>;
  if (!quotes) return <div>loading...</div>;

  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Quotes quotes={quotes} error={error} />
          <Button />
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetchData();

  return {
    props: data,
  };
}

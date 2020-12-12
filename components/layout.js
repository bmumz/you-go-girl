import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "You Go, Girl!";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>
    </div>
  );
}

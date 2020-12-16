import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/layout.module.css";

export default function Custom404() {
  return (
    <div>
      <div className={styles.notFound}>
        <Layout>
          <div>
            <h2>Error 404: Page Not Found! </h2>
            Go{" "}
            <Link href="/">
              <a>home!</a>
            </Link>
          </div>
        </Layout>
      </div>
    </div>
  );
}

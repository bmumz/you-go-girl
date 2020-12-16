import Header from "./header";
import Seo from "./seo";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Seo />
      <main className={styles.flex} suppressHydrationWarning={true}>
        <Header />
        <div suppressHydrationWarning={true}>{children}</div>
      </main>
    </div>
  );
}

import styles from "./layout.module.css";

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <img src="https://i.ibb.co/hLdJ5wt/header.png" className={styles.img} />
      </div>
    </div>
  );
}

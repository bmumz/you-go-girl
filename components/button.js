import styles from "../styles/layout.module.css";

const handleClick = () => {
  window.location.reload();
};

export default function Button(props) {
  return (
    <div className={styles.button}>
      <button onClick={handleClick}>Generate New Quote</button>
    </div>
  );
}

import styles from "./layout.module.css";

const handleClick = (event) => {
  alert("Button clicked.");
};

export default function Button(props) {
  return (
    <div className={styles.button}>
      <button onClick={handleClick}>Generate New Quote</button>
    </div>
  );
}

import styles from "../styles/layout.module.css";

export default function Button(props) {
  return (
    <div className={styles.button}>
      <button onClick={props.handleClick}>Generate New Quote</button>
    </div>
  );
}

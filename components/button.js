import styles from "./layout.module.css";

<<<<<<< HEAD
const handleClick = (event) => {
  alert("Button clicked.");
=======
const handleClick = () => {
  window.location.reload();
>>>>>>> 1d711432edb82d6247e917b5a8c34fcd7e2c33bb
};

export default function Button(props) {
  return (
    <div className={styles.button}>
      <button onClick={handleClick}>Generate New Quote</button>
    </div>
  );
}

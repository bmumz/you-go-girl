import styles from "../styles/layout.module.css";

export default function Quote(props) {
  const quoteEntry = props.quote;

  return (
    <div suppressHydrationWarning={true}>
      <div className={styles.quoteBox} suppressHydrationWarning={true}>
        <div className={styles.quote} suppressHydrationWarning={true}>
          <h2 suppressHydrationWarning={true}>
            <span className={styles.highlight} suppressHydrationWarning={true}>
              {" "}
              {quoteEntry.quote}
            </span>{" "}
          </h2>{" "}
        </div>

        {quoteEntry.link === "" ? (
          <h3 suppressHydrationWarning={true}>- {quoteEntry.author}</h3>
        ) : (
          <h3>
            -{" "}
            <a href={quoteEntry.link} suppressHydrationWarning={true}>
              {quoteEntry.author}{" "}
            </a>
          </h3>
        )}
      </div>
    </div>
  );
}

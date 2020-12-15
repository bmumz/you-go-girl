import styles from "../styles/layout.module.css";

export default function Quote(props) {
  const getRandomKey = Math.floor(Math.random() * props.quoteCount);

  const getRandomQuote = props.quoteList.props.children[getRandomKey];

  return (
    <div suppressHydrationWarning={true}>
      <div key={getRandomKey} className={styles.quoteBox}>
        <div className={styles.quote}>
          <h2>
            <span className={styles.highlight}> {getRandomQuote.quote}</span>{" "}
          </h2>{" "}
        </div>

        {getRandomQuote.link === "" ? (
          <h3>- {getRandomQuote.author}</h3>
        ) : (
          <h3>
            - <a href={getRandomQuote.link}>{getRandomQuote.author} </a>
          </h3>
        )}
      </div>
    </div>
  );
}

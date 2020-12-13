import useSWR from "swr";
import styles from "../components/layout.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

<<<<<<< HEAD
export default function Quotes() {
=======
export default function Quotes(props) {
>>>>>>> 1d711432edb82d6247e917b5a8c34fcd7e2c33bb
  const { data, error } = useSWR("/api/quotes", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const quoteList = data.data;

  const quotes = Object.entries(quoteList).map((item, index) => (
    <div>
      <div key={index} className={styles.quote}>
        <h2>
          <span className={styles.boxshadow}>"{item[1].quote}"</span>
        </h2>{" "}
        {item[1].link === "" ? (
          <h3>- {item[1].source}</h3>
        ) : (
          <h3>
            - <a href={item[1].link}>{item[1].source} </a>
          </h3>
        )}
      </div>
    </div>
  ));
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  return <div>{random}</div>;
}

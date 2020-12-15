import Quote from "./quote";

export default function Quotes(props) {
  if (props.error) return <div>failed to load</div>;
  if (!props.quotes) return <div>loading...</div>;

  const quoteIndex = props.quotes.length;

  const quoteList = (
    <div>
      {props.quotes.map((quote) => ({
        quote: quote.quote,
        author: quote.source,
        link: quote.link,
      }))}
    </div>
  );

  return <Quote quoteList={quoteList} quoteCount={quoteIndex} />;
}

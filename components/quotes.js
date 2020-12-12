import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Quotes() {
  const { data, error } = useSWR("/api/quotes", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const quote = data.data[0].quote;
  const source = data.data[0].source;
  console.log(quote, source);

  return (
    <div>
      <h1>{quote}</h1> <h3>{source}</h3>
    </div>
  );
}

// export async function getStaticProps() {
//   const request = await fetch(
//     "https://inspirational-quotes-api.herokuapp.com/quotes"
//   );
//   const json = await request.json();

//   return {
//     props: {
//       data: json.data,
//     },
//   };
// }

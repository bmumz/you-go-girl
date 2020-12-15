import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component suppressHydrationWarning={true} {...pageProps} />;
}

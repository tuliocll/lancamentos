import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import LayoutWrapper from "../components/LayoutWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component, "page");
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
export default MyApp;

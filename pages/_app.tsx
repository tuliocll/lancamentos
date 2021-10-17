import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider, useSession, signIn } from "next-auth/react";

import LayoutWrapper from "../components/LayoutWrapper";

function ApplicationRender({ Component, pageProps }: AppInterface) {
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

type AppInterface = AppProps & {
  Component: {
    auth: boolean;
  };
};

function Auth({ children }: { children: React.ReactElement }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  return <div>Loading...</div>;
}

function MyApp({ Component, pageProps, router }: AppInterface) {
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <ApplicationRender
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </Auth>
      ) : (
        <ApplicationRender
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      )}
    </SessionProvider>
  );
}
export default MyApp;

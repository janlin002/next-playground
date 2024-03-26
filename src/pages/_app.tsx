import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// i18n
import { appWithTranslation } from "next-i18next";

type Props = {
  Component: AppProps["Component"];
  pageProps: any;
};

const App = ({ Component, pageProps: { session, ...pageProps } }: Props) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default appWithTranslation(App);

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

type Props = {
  Component: AppProps["Component"];
  pageProps: any;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: Props) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

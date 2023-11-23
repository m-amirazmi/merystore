import "@/styles/globals.css";
import { IPageWithLayout } from "@/types/IPageWithLayout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

interface IAppProps extends AppProps {
  Component: IPageWithLayout;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: IAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  const component = (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
  return getLayout(component);
}

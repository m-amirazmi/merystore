import "@/styles/globals.css";
import { IPageWithLayout } from "@/types/IPageWithLayout";
import type { AppProps } from "next/app";

interface IAppProps extends AppProps {
  Component: IPageWithLayout;
}

export default function App({ Component, pageProps }: IAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

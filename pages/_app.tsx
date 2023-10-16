import "@/styles/globals.css";
import Layout from "@/layout";
import { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-XEWDDV97D4' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-XEWDDV97D4');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

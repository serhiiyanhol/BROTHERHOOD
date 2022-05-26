import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BRO</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

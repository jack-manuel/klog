import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Klog // Clear your bacKlog</title>
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

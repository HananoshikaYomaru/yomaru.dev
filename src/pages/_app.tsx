import "../styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/routers/_app";
import Head from "next/head";
import { useEffect } from "react";

import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider } from "../contexts/theme";
import { LayoutProvider } from "../contexts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <>
      <Head>
        <title>Yomaru</title>
      </Head>
      <NextThemeProvider
        themes={["light", "dark"]}
        attribute="data-theme"
        enableSystem={false}
        defaultTheme="light"
        enableColorScheme={false}
      >
        <ThemeProvider>
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </ThemeProvider>
      </NextThemeProvider>
    </>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(appWithTranslation(MyApp));

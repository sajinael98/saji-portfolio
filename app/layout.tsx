import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Head from "next/head";
import { theme } from "../theme";
import AppLayout from "./components/AppLayout";
import './global.css';
import Providers from "./providers";
import TransitionProvider from "./transitionProvider";

export const metadata = {
  title: "Saji's Portfolio",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        
      </Head>
      <body>
        <Providers>
          <TransitionProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </TransitionProvider>
        </Providers>
      </body>
    </html>
  );
}

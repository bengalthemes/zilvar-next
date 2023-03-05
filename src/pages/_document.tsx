import SEO from "@/components/ui/SEO";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="ltr">
      <Head>
        <SEO />
      </Head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import SEO from "@/components/ui/SEO";
import { Html, Head, Main, NextScript } from "next/document";
import { poppinsFont } from "./_app";

export default function Document() {
  return (
    <Html dir="ltr">
      <Head>
        <SEO />
      </Head>
      <body className={`overflow-y-scroll ${poppinsFont.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

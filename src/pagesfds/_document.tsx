import SEO from '@/components/ui/SEO';
import { Html, Head, Main, NextScript } from 'next/document';
import { poppinsFont } from './_app';

export default function Document() {
  return (
    <Html lang="en-US" dir="ltr" className="light">
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

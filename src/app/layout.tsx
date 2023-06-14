import { Poppins } from 'next/font/google';
import QueryProvider from './providers/query-provider';
import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: 'Zilver | %s',
    default: 'Zilver',
  },
};

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${poppins.variable}`}>
        <QueryProvider>
          {children}
          {/* <ManagedUIContext>
            <ManagedModal lang={lang} />
            <ManagedDrawer lang={lang} />
            <ToasterProvider />
          </ManagedUIContext> */}
        </QueryProvider>
      </body>
    </html>
  );
}

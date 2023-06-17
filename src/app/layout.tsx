import { Poppins } from 'next/font/google';
import QueryProvider from './providers/query-provider';
import { Metadata } from 'next';
import DrawersContainer from '@/components/ui/drawer-views/drawer-container';

// external
import 'swiper/css';
import 'overlayscrollbars/overlayscrollbars.css';

// base css file
import './globals.css';
import '../assets/css/customize-plugins.css';
import ModalContainer from '@/components/ui/modal/modal-container';

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
          <ModalContainer />
          <DrawersContainer />
        </QueryProvider>
      </body>
    </html>
  );
}

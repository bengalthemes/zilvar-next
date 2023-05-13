import { AppProps } from 'next/app';
import 'swiper/css';
import '../assets/css/globals.css';
import '../assets/css/customize-plugins.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { Poppins } from '@next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import DrawersContainer from '@/components/ui/drawer-views/DrawerContainer';
import ModalContainer from '@/components/ui/modal/ModalContainer';
import { useState } from 'react';

export const poppinsFont = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ModalContainer />
      <DrawersContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

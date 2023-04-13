import { AppProps } from "next/app";
import "swiper/css";
import "../assets/css/globals.css";
import "../assets/css/customize-plugins.css";
import { Poppins } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import DrawersContainer from "@/components/drawer-views/DrawerContainer";
import { ModalProvider } from "@/components/ui/modal/modal.context";

const queryClient = new QueryClient();

export const poppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
      <main className={poppinsFont.className}>
        <Component {...pageProps} />
      </main>
      </ModalProvider>
      <DrawersContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

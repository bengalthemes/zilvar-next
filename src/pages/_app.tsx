import { AppProps } from "next/app";
import "swiper/css";
import "../assets/css/globals.css";
import { Poppins } from "@next/font/google";

const poppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppinsFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

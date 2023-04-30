import React from "react";
import Footer from "./_footer";
import Header from "./_header";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative z-10 min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}

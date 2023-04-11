import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolios from "@/components/portfolio/Portfolios";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonial/Testimonials";
import SEO from "@/components/ui/SEO";
import Layout from "@/layouts/_layout";
import React from "react";

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Services />
        <Portfolios />
        <Testimonials />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}

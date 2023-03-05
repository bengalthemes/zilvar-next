import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
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
        <Testimonial />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}

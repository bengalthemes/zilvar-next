import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolios from "@/components/portfolio/Portfolios";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonial/Testimonials";
import SEO from "@/components/ui/SEO";
import Layout from "@/layouts/_layout";
import React from "react";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Element name="home">
          <Hero />
          <Services />
        </Element>
        <Element name="work">
          <Portfolios />
        </Element>
        <Element name="client">
          <Testimonials />
        </Element>
        <Element name="blog">
          <Blog />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Layout>
    </>
  );
}

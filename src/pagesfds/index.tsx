import Blog from '@/components/blog/blog';
import Contact from '@/components/contact/contact';
import Hero from '@/components/hero/hero';
import Portfolios from '@/components/portfolio/portfolios';
import Services from '@/components/services/services';
import Testimonials from '@/components/testimonial/testimonials';
import SEO from '@/components/ui/SEO';
import Layout from '@/layouts/default-layout';
import React from 'react';
import { Element } from 'react-scroll';

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
        {/* <Element name="blog">
          <Blog />
        </Element> */}
        <Element name="contact">
          <Contact />
        </Element>
      </Layout>
    </>
  );
}

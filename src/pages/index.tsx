import * as React from 'react';
import Layout from './../components/layout';
import Hero from './../components/hero';
import Profile from './../components/profile';
import About from './../components/about';
import Carousel from './../components/carousel';
import Contact from './../components/contact';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 10vh;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <Hero />
        <Profile id={'profile'} />
        <About id={'about'} />
        <Carousel id={'work'} />
        <Contact id={'contact'} />
      </Section>
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import Layout from './../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Padding } from './../styles';
import GatsbyBelly from './../images/gatsbybelly.png';

const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0em 1rem;
    width: 50vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0em 2rem;
  }
`;

interface ThanksProps {
  location: {
    state: {
      name: string;
    };
  };
}

const Thanks = ({ location }: ThanksProps) => {
  return (
    <Layout>
      <Container>
        <Padding>
          <ImageContainer>
            <img src={GatsbyBelly} />
          </ImageContainer>
          <TextContainer>
            <h1>thanks, {location.state.name}!</h1>
            <p>I'll get back to you soon.</p>
            <p>In the meantime, Gatsby here can keep you company.</p>
            <p>
              <Link to="/">go home?</Link>
            </p>
          </TextContainer>
        </Padding>
      </Container>
    </Layout>
  );
};

export default Thanks;

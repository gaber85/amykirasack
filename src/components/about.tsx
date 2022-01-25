import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AboutMe1 from './../images/viaduct.png';
import AboutMe2 from './../images/fundy.png';
import AboutMe3 from './../images/espai.png';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }

  img {
    max-width: 320px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }, absolutePath: { regex: "/cv/" }) {
        publicURL
        name
      }
    }
  `);

  return (
    <>
      <AboutContainer id={id}>
        <img src={AboutMe3} />
        <TextContainer>
          <h1>What’s in a name?</h1>
          <p>
            Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve
            lived in Canada, the US, Singapore, Japan, and Spain, but spent time
            in many more. Currently based in the UK, where you’ll find me
            meditating on my balcony with far too many plants.
          </p>

          <a href={data.file.publicURL} target="_blank" className="button">
            Download my CV
          </a>
          <br />
          <a
            href="https://github.com/momentmuse"
            target="_blank"
            className="button"
          >
            Github
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/amy-kirasack"
            target="_blank"
            className="button"
          >
            LinkedIn
          </a>
          <img src={AboutMe1} />
          <img src={AboutMe2} />
        </TextContainer>
      </AboutContainer>
    </>
  );
};

export default About;

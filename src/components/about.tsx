import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const About = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }, absolutePath: { regex: "/cv/" }) {
        publicURL
        name
      }
    }
  `);

  console.log('here be data ', data);

  return (
    <div
      id={id}
      style={{
        backgroundColor: `#ace1af`,
        height: `80vh`,
      }}
    >
      <h1>👩🏻‍💻What's in a name? 👩🏻‍💻</h1>
      <p>Clean, communicative, and comprehensive code.</p>
      <p>Because code isn’t just for computers. It’s for humans, too.</p>

      <p>
        Canadian-born coffee enthusiast, cat lover, and globetrotter. I’ve lived
        in Canada, the US, Singapore, Japan, and Spain, but spent time in many
        more. Currently based in the UK, where you’ll find me meditating on my
        balcony with far too many plants.
      </p>

      <a href={data.file.publicURL} target="_blank" className="button">
        Download my CV
      </a>
    </div>
  );
};

export default About;

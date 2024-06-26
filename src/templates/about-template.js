import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const profileImage = getImage(frontmatter.profile_image);

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <AbountImageContainer>
          <AboutImageWrapper image={profileImage} alt="ロボ団いりなか校" />
        </AbountImageContainer>
        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const AbountImageContainer = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  max-height: 160px;
  max-width: 360px;
  width: auto;
  padding: 2rem;
  background-color: #ffffff;
`

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  position: relative;
  height: auto;
  width: auto;
  object-fit: contain;
`;

const AboutCopy = styled.div`
  max-width: 60ch;

  & h1 {
    font-size: var(--size-700);
    display: block;
    margin-bottom: 1rem;
  }

  & p {
    font-size: var(--size-400);
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profile_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`;

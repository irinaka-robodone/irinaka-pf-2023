import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const profileImage = getImage(frontmatter.profile_image);
  const pollQRCodeImage = getImage(frontmatter.poll_qrcode);

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <AbountImageContainer>
          <AboutImageWrapper image={profileImage} alt="ロボ団いりなか校" />
        </AbountImageContainer>
        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
        <PollQRCodeImageContainer>
          <PollQRCodeTextWrapper>投票先URLのQRコード</PollQRCodeTextWrapper>
          <PollQRCodeImageWrapper>
            <PollQRCodeImage image={pollQRCodeImage} alt="投票先URLのQRコード" />
          </PollQRCodeImageWrapper>
        </PollQRCodeImageContainer>
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
  width: 200px;
  padding: 2rem;
  // background-color: #ffffff;
`

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  position: relative;
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
`;

const PollQRCodeImageContainer = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: middle;
  max-height: 240px;
  height: auto;
  max-width: 28rem;
  width: 24rem;
  padding: 1rem 0;
  background-color: #ffffff;
`

const PollQRCodeTextWrapper = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 60%;
  font-size: var(--size-500);
  font-weight: bold;
`;

const PollQRCodeImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 40%;
  height: 100%;
  object-fit: contain;
  padding-left: 2px;
`;

const PollQRCodeImage = styled(GatsbyImage)`
  position: relative;
  width: auto;
  height: 100%;
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
        poll_qrcode {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`;

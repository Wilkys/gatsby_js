import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import PostHeadInfo from './PostHeadInfo';


const PostHead = function ({
  title,
  date,
  categories,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={gatsbyImageData} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BackgroundImage = styled((props) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  /* z-index: -1; */
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;
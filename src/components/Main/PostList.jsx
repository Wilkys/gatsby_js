import React from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import useInfiniteScroll from './useInfiniteScroll';
// import { FluidObject } from 'gatsby-image';

// const POST_ITEM_DATA = {
//   title: 'Post Item Title',
//   date: '2020.01.29.',
//   categories: ['Web', 'Frontend', 'Testing'],
//   summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//   thumbnail: 'https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp',
//   link: 'https://www.google.co.kr/',
// };

const PostList = ({ selectedCategory, posts }) => {
  const { containerRef, postList} = useInfiniteScroll(selectedCategory, posts);
  return (
    <PostListWrapper ref={containerRef}>
    {/* <PostListWrapper> */}
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter
          },
        }) => (
          <PostItem
            {...frontmatter}
            link={slug}
            key={id}
          />
        )
      )}      
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px){
    grid-template-columns: 1fr;
    width: 100%auto;
    padding: 50px 20px;
  }
`;
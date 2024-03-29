import React from 'react';
import { graphql } from 'gatsby';
import Template from '../components/Common/Template';
import PostHead from '../components/Post/PostHead';
import PostContent from '../components/Post/PostContent';

const PostTemplate = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const { node: { html, frontmatter }, } = edges[0];

  return (
    <Template>
      <PostHead {...frontmatter} />
      <PostContent html={html} />
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
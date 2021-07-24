import React, {useMemo} from 'react';
import Introduction from '../components/Main/Introduction';
import CategoryList from '../components/Main/CategoryList';
import PostList from '../components/Main/PostList';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import Template from '../components/Common/Template';


const IndexPage = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  const parsed = queryString.parse(search);
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category
    ? 'All'
      : parsed.category;
  const categoryList = useMemo(
    () =>
    edges.reduce(
      (
        list,
        {
          node: {
            frontmatter: {
              categories
            },
          }
        }
      ) => {
        categories.forEach(category => {
          if (list[category] === undefined | list[category] === null) list[category] = 1;
          else list[category]++;        
        });
        list['All']++;
        return list;
      },
      { 'All': 0 },
    ),[],      
  ) 
  
  return (
    <Template>
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList
        selectedCategory={selectedCategory}
        posts={edges}
      />
    </Template>
  );
};

export default IndexPage;


export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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
    file(name: {eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
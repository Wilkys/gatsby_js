import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const CategoryList = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};
export default CategoryList;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px){
    width: 100%auto;
    margin-top: 50px;
    padding: 0 20px;
  }
`;
const CategoryItem = styled(Link)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;  
  cursor: pointer;    
  font-weight: ${({ active }) => (active ? '800' : '400')};

  &:last-of-type{
    margin-right: 0;
  }
`;
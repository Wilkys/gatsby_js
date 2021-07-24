import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';


const Template = function ({ children }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
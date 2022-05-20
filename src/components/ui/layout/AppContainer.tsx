import { NextSeo, NextSeoProps } from 'next-seo';
import * as React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  background-color: #fbf8f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

interface IContainer {
  children: React.ReactNode;
  seo?: NextSeoProps;
}

const AppContainer: React.FC<IContainer> = ({ children, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default AppContainer;

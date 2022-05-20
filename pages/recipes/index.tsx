import { gql } from '@apollo/client';

import { Container, Grid, Paper, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import FeaturedItem from '../../src/components/features/home/FeaturedItem';
import AppContainer from '../../src/components/ui/layout/AppContainer';
import NavBar from '../../src/components/ui/layout/NavBar';
import client from '../../src/lib/apolloClient';

const RecipesPage = ({ recipes }) => {
  return (
    <AppContainer>
      <Container disableGutters>
        <NavBar />
        <Typography variant="h1">Recipes</Typography>
        <Grid container spacing={1}>
          {recipes?.map((recipe, index) => (
            <FeaturedItem recipe={recipe} index={index} key={recipe.slug} />
          ))}
        </Grid>
      </Container>
    </AppContainer>
  );
};

export default RecipesPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        recipes {
          title
          shortDescription
          slug
          coverImage {
            url
          }
          creator
          createdAt
          content {
            raw
          }
          featured
        }
      }
    `,
  });
  const { recipes } = data;
  return {
    props: { recipes },
  };
};

import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { CircularProgress, Grid, Typography } from '@mui/material';
import * as React from 'react';
import FeatureItem from './FeaturedItem';

const QUERY = gql`
  query Recipes {
    recipes(last: 4) {
      title
      shortDescription
      slug
      coverImage {
        url
      }
      creator
      createdAt
      featured
    }
  }
`;

const FeaturedSection = styled.section`
  padding: 2rem 0;
`;

const FeaturedContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Featured = () => {
  const { data, loading, error } = useQuery(QUERY);
  if (error) {
    console.error(error);
    return null;
  }
  console.log(data?.recipes);
  return (
    <FeaturedSection>
      <Typography variant="h2">Featured</Typography>
      <FeaturedContainer>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={1}>
            {data?.recipes?.map((recipe, index) => (
              <FeatureItem recipe={recipe} index={index} key={recipe.slug} />
            ))}
          </Grid>
        )}
      </FeaturedContainer>
    </FeaturedSection>
  );
};

export default Featured;

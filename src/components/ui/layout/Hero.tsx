import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Autocomplete, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { TRecipe } from '../../../../pages/recipes/[...slug]';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url('/hero.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  @media only screen and (max-width: 650px) {
    border-radius: 0;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 5px;
`;

const QUERY = gql`
  query Recipes {
    recipes {
      title
      slug
    }
  }
`;

interface TRecipeData {
  recipes: TRecipe[];
}

const Hero = () => {
  const { data, loading } = useQuery<TRecipeData>(QUERY);

  const recipeData = React.useMemo(() => {
    return data?.recipes?.map(recipe => ({
      label: recipe.title,
      slug: recipe.slug,
    }));
  }, [data]);
  return (
    <HeroContainer>
      {loading ? null : (
        <SearchContainer>
          <Autocomplete
            fullWidth
            disablePortal
            id="combo-box-demo"
            options={recipeData}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Link href={`/recipes/${option.slug}`}>
                  <a>{option.label}</a>
                </Link>
              </Box>
            )}
            renderInput={params => (
              <TextField
                {...params}
                label="Search"
                size="medium"
                variant="outlined"
                fullWidth={true}
              />
            )}
          />
        </SearchContainer>
      )}
    </HeroContainer>
  );
};

export default Hero;

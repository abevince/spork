import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { TRecipe } from '../../../../pages/recipes/[...slug]';

const FeaturedOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4));
  display: flex;
  justify-content: end;
  align-items: flex-end;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.8));
  }
`;

const FeatureDetailContainer = styled.div`
  width: 80%;
  background-color: rgba(51, 65, 85, 0.5);
  display: flex;
  justify-content: end;
  color: white;
  padding: 8px 16px;
  flex-direction: column;
  text-align: right;

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

const FeaturedTitle = styled.h3`
  font-size: 1.5rem;
  margin: 8px;
`;

const FeaturedDetails = styled.span`
  font-style: italic;
`;

interface FeaturedItemsProps {
  recipe: TRecipe;
  index: number;
}

const FeaturedItem: React.FC<FeaturedItemsProps> = ({ recipe, index }) => {
  return (
    <Grid
      item
      xs={12}
      md={index === 1 || index === 2 ? 4 : 8}
      key={recipe.slug}
    >
      <Link href={`/recipes/${recipe.slug}`}>
        <a>
          <Paper
            elevation={1}
            sx={{
              width: '100%',
              height: '450px',
              position: 'relative',
            }}
          >
            <Image
              src={recipe.coverImage.url}
              layout="fill"
              alt={recipe.title}
              objectFit="cover"
            />
            <FeaturedOverlay>
              <FeatureDetailContainer>
                <FeaturedTitle>{recipe.title}</FeaturedTitle>
                <FeaturedDetails>{recipe.shortDescription}</FeaturedDetails>
                <span>by: {recipe.creator}</span>
              </FeatureDetailContainer>
            </FeaturedOverlay>
          </Paper>
        </a>
      </Link>
    </Grid>
  );
};

export default FeaturedItem;

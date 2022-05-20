import { gql } from '@apollo/client';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { RichText } from '@graphcms/rich-text-react-renderer';
import AppContainer from '../../src/components/ui/layout/AppContainer';
import client from '../../src/lib/apolloClient';
import styled from '@emotion/styled';
import Image from 'next/image';
import NavBar from '../../src/components/ui/layout/NavBar';
import { Container, Typography } from '@mui/material';
import { RichTextContent } from '@graphcms/rich-text-types';
import { ParsedUrlQuery } from 'querystring';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.article`
  max-width: 650px;
  padding: 0 1.75rem;
`;

const RecipeImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
`;

const RecipeHeader = styled.article`
  max-width: 650px;
  padding: 0 1.75rem;
  text-align: center;
`;

export interface TRecipe {
  title: string;
  shortDescription: string;

  slug: string;
  coverImage: {
    url: string;
  };
  creator: string;
  createdAt: string;
  content: {
    raw: RichTextContent;
  };
  featured: string;
}

interface RecipePageProps {
  recipe: TRecipe;
}

const RecipePage: NextPage<RecipePageProps> = ({ recipe }) => {
  return (
    <AppContainer
      seo={{
        title: `Spork - ${recipe.title}`,
        description: recipe.shortDescription,
        openGraph: {
          title: `Spork - ${recipe.title}`,
          description: recipe.shortDescription,
          images: [
            {
              url: recipe.coverImage.url,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: recipe.coverImage.url,
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Spork',
        },
      }}
    >
      <Container disableGutters>
        <NavBar />
        <RecipeContainer>
          <RecipeImageContainer>
            <Image
              src={recipe.coverImage.url}
              layout="fill"
              alt={recipe.title}
              objectFit="cover"
            />
          </RecipeImageContainer>
          <RecipeHeader>
            <Typography variant="h1">{recipe.title}</Typography>
            <Typography variant="h4" sx={{ fontStyle: 'italic' }}>
              {recipe.shortDescription}
            </Typography>
            <Typography variant="h4">by {recipe.creator}</Typography>
          </RecipeHeader>
          <ContentContainer>
            <RichText content={recipe.content.raw} />
          </ContentContainer>
        </RecipeContainer>
      </Container>
    </AppContainer>
  );
};

export default RecipePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Recipes {
        recipes {
          slug
        }
      }
    `,
  });
  const { recipes } = data;
  const paths = recipes.map((recipe: { slug: string }) => ({
    params: { slug: [recipe.slug] },
  }));
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  slug: [string];
}
export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams;
  const { data } = await client.query({
    query: gql`
      query RecipeBySlug($slug: String!) {
        recipes(where: { slug: $slug }) {
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
    variables: { slug: slug[0] },
  });
  const { recipes } = data;
  return {
    props: { recipe: recipes[0] },
  };
};

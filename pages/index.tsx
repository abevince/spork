import * as React from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';

import AppContainer from '../src/components/ui/layout/AppContainer';
import Featured from '../src/components/features/home/Featured';
import NavBar from '../src/components/ui/layout/NavBar';
import Hero from '../src/components/ui/layout/Hero';

const Home: NextPage = () => {
  return (
    <AppContainer
      seo={{
        title: 'Spork - Home',
        description: 'Your one-stop culinary site',
        openGraph: {
          title: `Spork - Home`,
          description: 'Your one-stop culinary site',
          images: [
            {
              url: '/banner.jpeg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/banner.jpeg',
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
        <Hero />
        <Featured />
      </Container>
    </AppContainer>
  );
};

export default Home;

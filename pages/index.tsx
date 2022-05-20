import * as React from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';

import AppContainer from '../src/components/ui/layout/AppContainer';
import Featured from '../src/components/features/home/Featured';
import NavBar from '../src/components/ui/layout/NavBar';
import Hero from '../src/components/ui/layout/Hero';

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Container disableGutters>
        <NavBar />
        <Hero />
        <Featured />
      </Container>
    </AppContainer>
  );
};

export default Home;

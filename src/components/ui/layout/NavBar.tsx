import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: space-between;
  @media only screen and (max-width: 650px) {
    padding: 12px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  list-style: none;
  font-size: 1.2rem;
  font-weight: medium;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const ColorButton = styled(Button)`
  color: white;
  background-color: #ff5f00;
  padding: 4px 2rem;
  border-radius: 25px;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: normal;

  &:hover {
    background-color: #ff8000;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <Image
            src="/logo/spork-logo.svg"
            width={150}
            height={90}
            alt="Spork logo"
            layout="fixed"
          />
        </a>
      </Link>
      <NavLinks>
        <li>
          <Link href="/recipes">
            <NavLink>Recipes</NavLink>
          </Link>
        </li>
        <li>About us</li>
        <li>Contact us</li>
      </NavLinks>
      <ColorButton variant="contained" href="#contained-buttons">
        Join
      </ColorButton>
    </StyledNav>
  );
};

export default NavBar;

import React from 'react';
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <Copywrite>created by <Link href="https://github.com/ozngnr">ozngnr</Link> - devChallenges.io</Copywrite>
    </Container>
  )
}
 
export default Footer;

const Container = styled.footer`
  padding: 0 80px 50px 80px;
`;

const Copywrite = styled.p`
  font-family: montserrat;
  font-weight: 400;
  font-size: 16px;
  color: #a9a9a9;
`;

const Link = styled.a`
  font-weight: 700;
  color: inherit;
`;
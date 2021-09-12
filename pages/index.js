// https://brunodup-portfolio-brunodup.vercel.app/

import App from './_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Lettering from '/components/Lettering';
import Countdown from '/components/Countdown';
import Nav from '/components/Nav';

function home() {
  return (
    <>
    <Container>
      <Logo />
      <Nav />
      <Lettering>
        <span>E-COMMERCE</span>
        <span>DESIGN</span>
        <span>DESENVOLVIMENTO WEB</span>
        <span>NOMADISMO DIGITAL</span>
        <span>MINIMALISMO</span>
      </Lettering>
      <Countdown />
    </Container>
    </>
  )
}

export default home;
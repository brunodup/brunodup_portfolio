// https://brunodup-portfolio-brunodup.vercel.app/

import App from '../_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Nav from '/components/Nav';
import Countdown from '/components/Countdown';

function aboutUs() {
  return (
    <>
    <Container>
      <Logo />
      <Nav />
      <h1>Teste about us</h1>
    </Container>
    <Countdown />
    </>
  )
}

export default aboutUs;
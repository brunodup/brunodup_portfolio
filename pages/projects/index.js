// https://brunodup-portfolio-brunodup.vercel.app/

import App from '../_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Nav from '/components/Nav';
import Countdown from '/components/Countdown';

function projects() {
  return (
    <>
    <Container>
      <Logo />
      <Nav />
      <h1>Teste projects</h1>
      <Countdown />
    </Container>
    </>
  )
}

export default projects;
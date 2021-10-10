// https://brunodup-portfolio-brunodup.vercel.app/

import App from '../_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Nav from '/components/Nav';
import Lettering from '/components/Lettering/';

function aboutUs() {
  return (
    <>
    <Container>
       <aside>
      <Logo />
      <Lettering>
        <span>E-COMMERCE</span>
        <span>DESIGN</span>
        <span>DESENVOLVIMENTO WEB</span>
        <span>NOMADISMO DIGITAL</span>
        <span>MINIMALISMO</span>
      </Lettering>
      <Nav />
      </aside>
      <h1>Teste about us</h1>
    </Container>
    </>
  )
}

export default aboutUs;
// https://brunodup-portfolio-brunodup.vercel.app/

import Logo from '../components/Logo';
import Container from '../components/Container';
import Lettering from '../components/Lettering';
import Countdown from '../components/Countdown';

function home() {
  return (
    <>
    <Container>
      <Logo />
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
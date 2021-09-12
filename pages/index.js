import Logo from '../components/Logo';
import Container from '../components/Container';
import Lettering from '../components/Lettering';

function home() {
  return (
    <>
    <Container>
      <Logo />
      <Lettering>
        <span>DESENVOLVIMENTO WEB</span>
        <span>DESIGN</span>
        <span>E-COMMERCE</span>
        <span>NOMADISMO DIGITAL</span>
        <span>MINIMALISMO</span>
      </Lettering>
    </Container>
    </>
  )
}

export default home;
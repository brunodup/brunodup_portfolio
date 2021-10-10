import App from './_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Lettering from '/components/Lettering';
import Nav from '/components/Nav';
import Thumb from '../components/Thumb';
import GridContainer from '../components/GridContainer';

import projects from './api/content.json';

function Home() {
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
      <GridContainer>
        {
          projects.map((project,i) => <Thumb key={i} gridItem={`Item-${i+1}`} link={project.slug} icon={project.icon} name={project.name} />)
        }
      </GridContainer>
    </Container>
    </>
  )
}

export default Home;
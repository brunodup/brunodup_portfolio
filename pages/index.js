import App from './_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Lettering from '/components/Lettering';
import Nav from '/components/Nav';
import Thumb from '../components/Thumb';
import GridContainer from '../components/GridContainer';

import useTranslation from "next-translate/useTranslation";

import projects from './api/content.json';



function Home() {
  // const {t,lang} = useTranslation('home');

  return (
    <>
    <Container>
      <aside>
      <Logo />
      <Lettering>
        <h2>E-COMMERCE</h2>
        <h2>DESIGN</h2>
        <h2>DESENVOLVIMENTO WEB</h2>
        <h2>NOMADISMO DIGITAL</h2>
        <h2>MINIMALISMO</h2>
      </Lettering>
      <Nav />
      </aside>
      <GridContainer>
        {
          projects.map((project,i) => <Thumb key={i} gridItem={`Item-${i+1}`} link={`/project/${project.slug}`} type={'title'} name={project.name} target="internal" />)
        }
      </GridContainer>
    </Container>
    </>
  )
}

export default Home;
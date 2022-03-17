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
      <Lettering />
      <Nav />
      </aside>
      <GridContainer>
        {
          projects.map((project,i) => <Thumb key={i} gridItem={`Item-${i+1}`} link={`${project.link}`} type={'title'} name={project.name} target="internal" />)
        }
      </GridContainer>
    </Container>
    </>
  )
}

export default Home;
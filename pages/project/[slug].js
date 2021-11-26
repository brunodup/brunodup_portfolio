import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Lettering from '/components/Lettering';
import Nav from '/components/Nav';
import Thumb from '/components/Thumb';
import GridContainer from '/components/GridContainer';
import Title from '/components/Title/';

import projects from '/pages/api/content.json';

function Home() {
  const router = useRouter();
  const { slug } = router.query;
  // const [project,setProject] = useState([]);

    const project = projects.filter((project,i) => project.slug === slug)

    console.log(projects)
    console.log(slug)
    console.log(project)
        

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
      <div>
        {
          project.length > 0 ?
           <>
              <Title>{project[0].name} <small>(em breve)</small></Title>
           </>
          :
          <h1>Não consegui encontrar essa página, tenta de novo por favor</h1>
        }
         
      </div>
    </Container>
    </>
  )
}

export default Home;
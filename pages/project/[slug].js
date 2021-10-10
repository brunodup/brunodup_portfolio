import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Lettering from '/components/Lettering';
import Nav from '/components/Nav';
import Thumb from '/components/Thumb';
import GridContainer from '/components/GridContainer';

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
         <h1>{project[0].name}</h1>
         <h2>{project[0].year}</h2>
      </div>
    </Container>
    </>
  )
}

export default Home;
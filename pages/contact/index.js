// https://brunodup-portfolio-brunodup.vercel.app/

import App from '../_app';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Nav from '/components/Nav';
import Lettering from '/components/Lettering/';
import Content from '/components/Content/';
import Title from '/components/Title/';
import TextBlock from '/components/TextBlock';
import VerticalGrid from '/components/VerticalGrid/';
import Thumb from '/components/Thumb';

import socials from '../api/socials.json';

function contact() {
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
      <Content>
        <div class="_flex">
          <VerticalGrid>
            {
              socials.map((social,i) => <Thumb key={i} link={`${social.link}`} type={'title'} name={social.name} target={'external'} />)
            }
          </VerticalGrid>
          <div>
            <Title>
              Quer<br />
              Falar<br />
              Comigo?
            </Title>
            <TextBlock>
              Se você se interessou pelo meu trabalho, ja fico muito feliz de antemão, mas se quiser falar comigo sobre, vou ficar mais feliz ainda.<br />
              Seja para fazer algum projeto, para me dar alguma dica, para dar algum feedback, vai ser muito bem vindo.
            </TextBlock>
            <TextBlock>
              É só clicar em qualquer um dos botões e falar comigo por onde quiser :)
            </TextBlock>
          </div>
      </div>
      </Content>
    </Container>
    </>
  )
}

export default contact;
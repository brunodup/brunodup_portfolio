// https://brunodup-portfolio-brunodup.vercel.app/

import App from '../_app';
import Image from 'next/image';

import Logo from '/components/Logo';
import Container from '/components/Container';
import Nav from '/components/Nav';
import Lettering from '/components/Lettering/';
import Title from '../../components/Title';
// import Image from '../../components/Image';
import TextBlock from '../../components/TextBlock';
import Content from '../../components/Content';
import Quote from '../../components/Quote';
import VerticalGrid from '/components/VerticalGrid/';
import Thumb from '/components/Thumb';

import socials from '../api/socials.json';


import useTranslation from "next-translate/useTranslation";


function aboutUs() {
  // const {t,lang} = useTranslation('about');

  return (
    <>
    <Container>
       <aside>
      <Logo />
      <Lettering />
      <Nav />
      </aside>
      <Content>
        <div class="_flex">
          <VerticalGrid>
            {
              socials.map((social,i) => <Thumb key={i} link={`${social.link}`} type={'title'} name={social.name} target="external" />)
            }
          </VerticalGrid>
          <div>
            <Title>
              Um pouco sobre mim
            </Title>
            {/* <Image src="/notion-capa.jpg" alt="me" width="900" height="250" /> */}
            <Quote author="Walter Mitty">
              Ver o mundo, as coisas perigosas por vir, viver por trás dos muros, se aproximar, <br />
              encontrar o outro e sentir. <strong>esse é o propósito da vida</strong>.
            </Quote>
            <TextBlock>
              Eu sou um pouco das experiências que vivo, e isso reflete em todas as áreas da vida.
            </TextBlock>
            <TextBlock>
              Parece um clichê, já que todo mundo é uma reunião de experiencias, mas ter essa percepção me faz planejar, entender, focar e buscar as experiências que me trarão exatamente aquilo que quero ser. <br />
              Hoje, aos 31 anos (e contando), nomade digital, empreendedor, busco nas experiências da estrada e dos meus parceiros sempre melhorar minhas entregas, comunicação, e expertise para contribuir em cada vez mais áreas. <br />
              Tenho a liberdade de atuar em projetos que acredito, que me alegram e me motivam a trabalhar e fazer cada vez um melhor trabalho, e é esse o critério que me norteia a assinar um novo contrato e fechar um novo projeto, acreditar no que estou fazendo. <br />
              Com mais de 10 anos de experiência em agências de publicidade, tecnologia, software houses e startups, trabalho atualmente com principal foco em desenvolvimento e evolução de e-commerces de quaildade, performáticos e que levem uma melhor experiência para quem utilizar.
            </TextBlock>
            <TextBlock>
              Criatividade e tecnologia são as ferramentas para que tudo isso aconteça, e para que eu consiga me manter vivendo o sonho da liberdade geográfica, vivendo e conhecendo diversos lugares e culturas pelo Brasil e futuramente pelo mundo.
            </TextBlock>
          </div>
        </div>
      </Content>
    </Container>
    </>
  )
}

export default aboutUs;
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


import useTranslation from "next-translate/useTranslation";


function aboutUs() {
  const {t,lang} = useTranslation('about');

  return (
    <>
    <Container>
       <aside>
      <Logo />
      <Lettering>
        <span>{t('ecommerce')}</span>
        <span>{t('design')}</span>
        <span>{t('webdev')}</span>
        <span>{t('nomadic')}</span>
        <span>{t('minimalism')}</span>
      </Lettering>
      <Nav />
      </aside>
      <Content>
        <Title>
          Sobre mim
        </Title>
        <Image src="/notion-capa.jpg" alt="me" width="900" height="250" />
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus vel tortor auctor varius. Pellentesque egestas augue ac ante interdum, quis pharetra nisl rutrum. Quisque id orci sit amet dui volutpat venenatis vitae at arcu. Aenean consectetur maximus est, sit amet sollicitudin ex suscipit quis. Aenean at convallis mi. Suspendisse vel neque suscipit, vestibulum quam finibus, luctus orci. Vivamus auctor faucibus odio sit amet cursus. Vestibulum libero nunc, mollis eget odio varius, venenatis laoreet est. Fusce nec iaculis orci, at commodo eros. Vivamus luctus neque urna, eu imperdiet massa efficitur vel. Nullam pharetra porta condimentum. Curabitur eget ultricies leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque ipsum vel mi volutpat, eu egestas turpis interdum. Vestibulum gravida dignissim convallis. Mauris convallis semper pretium.
        </TextBlock>
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus vel tortor auctor varius. Pellentesque egestas augue ac ante interdum, quis pharetra nisl rutrum. Quisque id orci sit amet dui volutpat venenatis vitae at arcu. Aenean consectetur maximus est, sit amet sollicitudin ex suscipit quis. Aenean at convallis mi. Suspendisse vel neque suscipit, vestibulum quam finibus, luctus orci. Vivamus auctor faucibus odio sit amet cursus. Vestibulum libero nunc, mollis eget odio varius, venenatis laoreet est. Fusce nec iaculis orci, at commodo eros. Vivamus luctus neque urna, eu imperdiet massa efficitur vel. Nullam pharetra porta condimentum. Curabitur eget ultricies leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque ipsum vel mi volutpat, eu egestas turpis interdum. Vestibulum gravida dignissim convallis. Mauris convallis semper pretium.
        </TextBlock>
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus vel tortor auctor varius. Pellentesque egestas augue ac ante interdum, quis pharetra nisl rutrum. Quisque id orci sit amet dui volutpat venenatis vitae at arcu. Aenean consectetur maximus est, sit amet sollicitudin ex suscipit quis. Aenean at convallis mi. Suspendisse vel neque suscipit, vestibulum quam finibus, luctus orci. Vivamus auctor faucibus odio sit amet cursus. Vestibulum libero nunc, mollis eget odio varius, venenatis laoreet est. Fusce nec iaculis orci, at commodo eros. Vivamus luctus neque urna, eu imperdiet massa efficitur vel. Nullam pharetra porta condimentum. Curabitur eget ultricies leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque ipsum vel mi volutpat, eu egestas turpis interdum. Vestibulum gravida dignissim convallis. Mauris convallis semper pretium.
        </TextBlock>
      </Content>
    </Container>
    </>
  )
}

export default aboutUs;
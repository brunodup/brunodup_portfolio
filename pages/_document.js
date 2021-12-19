import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link rel="shortcut icon" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link>
          <title>Bruno Dup - Faça sua loja virtual, rápida e de qualidade</title>
          <meta name="description" content="Desenvolvimento de lojas virtuais e consultoria de tecnologia para e-commerce. Especialista em vtex"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
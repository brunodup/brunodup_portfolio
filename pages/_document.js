import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link>
          <meta name="google-site-verification" content="AMLY2S1nHk0pslY-VD67snNZzT20ZDoT053L_3V0DgM"/>
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
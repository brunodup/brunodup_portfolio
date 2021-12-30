import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="canonical" href="https://brunodup.com" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link>
          <title>Bruno Dup - Faça sua loja virtual, rápida e de qualidade</title>
          <meta name="description" content="Desenvolva sua loja virtual, ou tenha uma consultoria tecnológica para lojas virtuais com um especialista em Vtex e Shopify."></meta>

        
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9JNV8Q');`}}></script>
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9JNV8Q" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
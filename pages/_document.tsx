import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L5JETX6T4E"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-L5JETX6T4E');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

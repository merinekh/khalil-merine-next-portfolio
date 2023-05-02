import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        //Google Analytics
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS}', {
              page_path: window.location.pathname,
          });
          `,
          }}
        />
      </Head>
      <body>
        //Google Tag Manager (noscript)
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZSHXZ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        //End Google Tag Manager (noscript)
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

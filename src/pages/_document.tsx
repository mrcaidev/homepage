import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html
    lang="en"
    className="scroll-smooth [-webkit-tap-highlight-color:transparent]"
  >
    <Head>
      <meta name="description" content="Yuwang Cai's homepage" />
    </Head>
    <body className="bg-normal text-normal">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

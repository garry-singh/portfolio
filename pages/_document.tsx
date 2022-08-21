import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Front-end developer and TypeScript enthusiast"
        />
        <link rel="canonical" href="https://garrysingh.dev/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

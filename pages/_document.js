import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="author" content="Alex Danisz"/>
          <meta name="description" content="Alex Danisz | Passioniate Web Developer | Full Stack | React | Node"/>
          <meta name="keywords" content="coding, html, css, javascript, react, portfolio"/>
          <meta name="description" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

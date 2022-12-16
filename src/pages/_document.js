import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet preload" href="/styles/styles.css" as="style" />
          <link rel="stylesheet preload" href="/styles/flicking.css" as="style" /> */}
        </Head>
        <body className="bg-white text-sm font-open-sans overflow-y-scroll">
          <Main />
          <div id="modal-root" />
          <div id="alert-root" />
          <div id="snackbar" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

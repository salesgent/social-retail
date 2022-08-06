import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
// import theme from "../src/theme";
import createEmotionCache from "../src/utilities/theme/createEmotionCache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="emotion-insertion-point" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        sheets.collect(<App emotionCache={cache} {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

import Navbar from '@/components/navbar/Navbar'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <meta name="charset" content="utf-8" />
          <link rel="shortcut icon" href="./assets/icons/favicon.png" type="image/png" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&family=Montserrat:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            media="print"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Navbar
            items={
              [
                {
                  destination: "blog",
                  image: "blog.svg",
                  title: "Blog",
                }
              ]
            }
          /> */}
        </body>
      </Html>
    )
  }
}
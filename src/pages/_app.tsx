import GlobalStyle from "@/styles/GlobalStyle";
import useWindowSize from '@/lib/useWindowSize'

export default function MyApp({ Component, pageProps }) {
  useWindowSize();

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

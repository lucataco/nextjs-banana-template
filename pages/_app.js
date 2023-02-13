import Script from 'next/script'
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script defer data-domain="nextjs-banana-template.vercel.app" src="https://data.lucata.co/js/script.js" />
      <Component {...pageProps} />
    </>
  )
}

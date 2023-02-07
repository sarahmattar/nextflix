import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <>
        <Component {...pageProps} />
      </>
    </SessionProvider>
  )
}

export default MyApp

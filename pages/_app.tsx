import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {

  const AnyComponent = Component as any
  return (
    <Provider session={pageProps.session}>
      <AnyComponent {...pageProps} />
    </Provider>
  )
}

export default MyApp

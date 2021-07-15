import type { AppProps, NextWebVitalsMetric  /*, AppContext */ } from 'next/app'

import { Provider as SessionProvider } from 'next-auth/client'

import '../styles/globals.scss'

export function reportWebVitals(metric: NextWebVitalsMetric) {
    if (process.env.NODE_ENV !== 'production') {
        console.log(metric);
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp

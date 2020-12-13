import React from 'react'
import { wrapper } from 'lib/store.js'
import withReduxSaga from 'next-redux-saga'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
import Head from 'next/head'

// import local Chacra theme, which feeds variables to Chakra ui components
import { localTheme } from 'theme/theme'
import { ThemeProvider } from 'emotion-theming'
import { CSSReset } from '@chakra-ui/core'

import 'theme/general.scss'

// import main App wrapper with layour, header, menu etc.. which are present on app pages
import App from './App'

const Application = (props) => {
    const store = useStore()
    const { Component: ActivePage, ...pageProps } = props

    return (
        <PersistGate persistor={store.__persistor}>
            <ThemeProvider theme={localTheme}>
                <CSSReset />
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <App>
                    <ActivePage {...pageProps} store={store} />
                </App>
            </ThemeProvider>
        </PersistGate>
    )
}

export default wrapper.withRedux(withReduxSaga(Application))
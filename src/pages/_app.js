import React from 'react'
import { wrapper } from '~/../lib/store.js'
import withReduxSaga from 'next-redux-saga'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'

const App = (props) => {
    const store = useStore((state) => state)
    const { Component: ActivePage, ...pageProps } = props
    console.log('_app props', props)
    console.log('_app store hook', store)
    return (
        <PersistGate persistor={store.__persistor}>
            <ActivePage />
        </PersistGate>
    )
}

export default wrapper.withRedux(withReduxSaga(App))
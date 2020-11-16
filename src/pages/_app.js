import React from 'react'
import NextApp, { Container } from 'next/app'
import configureStore from '~/../lib/store'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'

class App extends NextApp {

    static async getInitialProps({ Component, ctx, router }) {
        console.log('_app ctx', Object.keys(ctx))
        // Wait for all page actions to dispatch &&  Return props
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {},
        }
    }

    componentDidCatch() {

    }

    render() {
        console.log('_app render props', Object.keys(this.props))
        const { Component: ActivePage, pageProps, store } = this.props

        return (
            <Container>
                <ActivePage
                    {...pageProps}
                />
            </Container>
        )
    }
}

export default withRedux(configureStore)(withReduxSaga(App))
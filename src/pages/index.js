import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { CSSReset } from '@chakra-ui/core'
import App from './App'
import { localTheme } from 'theme/theme'
import { wrapper } from '~/../lib/store'
import { openModal } from 'redux/modal/modal.actions'

import { END } from 'redux-saga'

const Index = (props) => {
    console.log('index props', props)
    return (
        <ThemeProvider theme={localTheme}>
            <CSSReset />
            <App />
        </ThemeProvider>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('index getStaticProps', store)

    store.dispatch(openModal('someModal', { subtitle: 'ok' }))
    store.dispatch(END)

    // if (!store.getState().placeholderData) {
    //   store.dispatch(loadData())
    // }


    await store.sagaTask.toPromise()

    return {}
})


export default Index

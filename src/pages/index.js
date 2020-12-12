import React from 'react'

// import App wrapper
import App from './App'

// import store wrapper
import { wrapper } from 'lib/store'
import HomePage from './Home/Home.page'

// Load context providers that feed server fetched data to app

const Index = (props) => {
    console.log('index props', props)
    return (
        <App>
            <HomePage />
        </App>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('index getStaticProps', store)

    // store.dispatch(openModal('someModal', { subtitle: 'ok' }))
    // store.dispatch(END)

    // if (!store.getState().placeholderData) {
    //   store.dispatch(loadData())
    // }


    // await store.sagaTask.toPromise()

    return {}
})


export default Index

import React from 'react'

// import Home page
import HomePage from './Home/Home.page'

import { useRouter } from 'next/router'

// import store wrapper
import { wrapper } from 'lib/store'

// Load context providers that feed server fetched data to app


const Index = (props) => {
    const router = useRouter()
    
    console.log('index/home props', props)

    return (
        <HomePage />
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

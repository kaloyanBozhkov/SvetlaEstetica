import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'
import OffersPage from './Offers/Offers.page'

const Offers = (props) => {
    
    return (
        <OffersPage {...props} />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('offers getStaticProps', store)

    // store.dispatch(openModal('someModal', { subtitle: 'ok' }))
    // store.dispatch(END)

    // if (!store.getState().placeholderData) {
    //   store.dispatch(loadData())
    // }


    // await store.sagaTask.toPromise()

    return {}
})


export default Offers

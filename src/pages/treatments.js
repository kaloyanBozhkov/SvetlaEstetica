import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'
import TreatmentsPage from './Treatments/Treatments.page'

const Treatments = (props) => {
    
    return (
        <TreatmentsPage {...props} />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('treatments getStaticProps', store)

    // store.dispatch(openModal('someModal', { subtitle: 'ok' }))
    // store.dispatch(END)

    // if (!store.getState().placeholderData) {
    //   store.dispatch(loadData())
    // }


    // await store.sagaTask.toPromise()

    return {}
})


export default Treatments

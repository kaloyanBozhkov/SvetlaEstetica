import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import TreatmentsPage from './Treatments/Treatments.page'

const Treatments = ({ pageProps, ...treatmentsProps }) => {

    const {
        categories = [],
        maxPrice = 100,
        minPrice = 0.5,
        currency,
        treatments
    } = pageProps

    return (
        <TreatmentsPage
            treatments={treatments}
            categories={categories}
            maxPrice={maxPrice}
            minPrice={minPrice}
            currency={currency}
            {...treatmentsProps}
        />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('treatments getStaticProps', store)

    const maxPrice = 100
    const minPrice = 0
    const currency = '€'
    const categories = [
        { id: '1', category: 'Make Up' },
        { id: '2', category: 'Ceretta' },
        { id: '3', category: 'Solarium' }
    ]

    const treatments = []
    return {
        props: {
            currency,
            categories,
            minPrice,
            maxPrice,
            treatments
        }
    }
})


export default Treatments

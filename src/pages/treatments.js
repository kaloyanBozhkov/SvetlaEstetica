import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import TreatmentsPage from './Treatments/Treatments.page'

// import components
import Filter from '~/components/Filter/Filter'

// import hooks
import useControlFilter from '~/hooks/useControlFilter'

const Treatments = ({ pageProps, ...treatmentsProps }) => {

    const {
        categories = [],
        maxPrice = 100
    } = pageProps

    // controller for filter
    const {
        selectedCategory,
        currentPrice,
        setPriceRange,
        setSelectedCategory
    } = useControlFilter({ categories, maxPrice })

    return (
        <>
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                maxPrice={maxPrice}
                currentPrice={currentPrice}
                setPriceRange={setPriceRange}
                setSelectedCategory={setSelectedCategory}
            />
            <TreatmentsPage {...treatmentsProps} />
        </>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('treatments getStaticProps', store)

    const categories = [
        { id: '1', category: 'Make Up' },
        { id: '2', category: 'Ceretta' },
        { id: '3', category: 'Solarium' }
    ]

    return {
        props: {
            categories
        }
    }
})


export default Treatments

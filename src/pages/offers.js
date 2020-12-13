import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'
import OffersPage from './Offers/Offers.page'
import Filter from '~/components/Filter/Filter'
import useControlFilter from '~/hooks/useControlFilter'

const Offers = ({ pageProps, ...offersProps }) => {

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


    // apply filtering to products to show by passing down to offers page

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
            <OffersPage {...offersProps} />
        </>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('offers getStaticProps', store)

    const categories = [
        { id: '1', category: 'Viso' },
        { id: '2', category: 'Cappelli' },
        { id: '3', category: 'Corpo' }
    ]

    return {
        props: {
            categories
        }
    }
})


export default Offers

import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import OffersPage from './Offers/Offers.page'

// import components
import Filter from '~/components/Filter/Filter'

// import hooks
import useControlFilter from '~/hooks/useControlFilter'

const Offers = ({ pageProps, ...offersProps }) => {

    const {
        categories = [],
        maxPrice = 100,
        offers
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
            <OffersPage offers={offers} {...offersProps} />
        </>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('offers getStaticProps', store)

    const categories = [
        { id: '1', category: 'Viso Offerte' },
        { id: '2', category: 'Cappelli Offerte' },
        { id: '3', category: 'Corpo Offerte' }
    ]

    const offers = [
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg'
        }
    ]

    return {
        props: {
            categories,
            offers
        }
    }
})


export default Offers

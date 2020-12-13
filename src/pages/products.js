import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import ProductsPage from './Products/Products.page'

// import components
import Filter from '~/components/Filter/Filter'

// import hooks
import useControlFilter from '~/hooks/useControlFilter'

const Products = ({ pageProps, ...productProps }) => {

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
            <ProductsPage {...productProps} />
        </>
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('products getStaticProps', store)

    const categories = [
        { id: '1', category: 'Viso' },
        { id: '2', category: 'Solari' },
        { id: '3', category: 'Corpo' }
    ]

    return {
        props: {
            categories
        }
    }
})


export default Products

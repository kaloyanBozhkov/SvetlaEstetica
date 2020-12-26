import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import ProductsPage from './Products/Products.page'

const Products = ({ pageProps, ...productProps }) => {

    const {
        categories = [],
        maxPrice = 100,
        minPrice = 0.5,
        currency,
        products
    } = pageProps

    return (
        <ProductsPage
            products={products}
            categories={categories}
            maxPrice={maxPrice}
            minPrice={minPrice}
            currency={currency}
            {...productProps}
        />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('products getStaticProps', store)

    const maxPrice = 100
    const minPrice = 0
    const currency = '€'
    const categories = [
        { id: '1', category: 'Viso' },
        { id: '2', category: 'Solari' },
        { id: '3', category: 'Corpo' }
    ]
    const products = []

    return {
        props: {
            currency,
            categories,
            minPrice,
            maxPrice,
            products
        }
    }
})


export default Products

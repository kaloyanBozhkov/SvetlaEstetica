import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'

// import Page
import OffersPage from './Offers/Offers.page'

const Offers = ({ pageProps, ...offersProps }) => {

    const {
        categories = [],
        maxPrice = 100,
        offers
    } = pageProps

    return (
        <OffersPage 
            offers={offers} 
            categories={categories} 
            maxPrice={maxPrice} 
            {...offersProps} 
        />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('offers getStaticProps', store)

    const categories = [
        { id: 1, category: 'Viso Offerte' },
        { id: 2, category: 'Cappelli Offerte' },
        { id: 3, category: 'Corpo Offerte' }
    ]

    const offers = [
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 1
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 1
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 1
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 1
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 2
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 2
        },
        {
            id: 'offer-1',
            title: 'some product title',
            price: '19.99',
            currency: '$',
            description: 'some description for product',
            imgSrc: 'https://www.svetlaestetica.com/img/trattamenti/mr.jpg',
            category: 3
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

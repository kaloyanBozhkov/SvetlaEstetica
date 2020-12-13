import React from 'react'

// import store wrapper
import { wrapper } from 'lib/store'
import ProductsPage from './Products/Products.page'

const Products = (props) => {
    
    return (
        <ProductsPage {...props} />
    )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    console.log('products getStaticProps', store)

    // store.dispatch(openModal('someModal', { subtitle: 'ok' }))
    // store.dispatch(END)

    // if (!store.getState().placeholderData) {
    //   store.dispatch(loadData())
    // }


    // await store.sagaTask.toPromise()

    return {}
})


export default Products

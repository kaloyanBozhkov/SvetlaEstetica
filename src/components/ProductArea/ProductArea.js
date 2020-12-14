import React from 'react'
import { Grid } from '@chakra-ui/core'
import ProductCard from '../ProductCard/ProductCard'
import styles from './styles'

const ProductArea = ({ items = [], ...gridStyleProps}) => {
    return (
        <Grid {...styles.productArea} {...gridStyleProps}>
            {items.map((item, index) => (
                <ProductCard {...item} key={index} />
            ))}
        </Grid>
    )
}

export default ProductArea
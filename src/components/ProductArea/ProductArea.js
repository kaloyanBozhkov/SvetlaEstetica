import React from 'react'
import { Grid, PseudoBox } from '@chakra-ui/core'
import ProductCard from '../ProductCard/ProductCard'
import styles from './styles'

const ProductArea = ({ items = [], ...gridStyleProps}) => {
    return (
        <Grid {...styles.productArea} {...gridStyleProps}>
            {items.map((item, index) => (
                <PseudoBox {...styles.producetWrapper}>
                    <ProductCard {...item} key={index} />
                </PseudoBox>
            ))}
        </Grid>
    )
}

export default ProductArea
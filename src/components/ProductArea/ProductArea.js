import React from 'react'
import { Grid, PseudoBox } from '@chakra-ui/core'
import ProductCard from '../ProductCard/ProductCard'
import styles from './styles'

const ProductArea = ({ items = [], ...gridStyleProps}) => {
    return (
        <Grid {...styles.productArea} {...gridStyleProps}>
            {items.map((item, index) => (
                <PseudoBox {...styles.producetWrapper} key={index}>
                    <ProductCard {...item} />
                </PseudoBox>
            ))}
        </Grid>
    )
}

export default ProductArea
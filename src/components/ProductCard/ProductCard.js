import React, { useState } from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/core'

import styles from './styles'

// import components
import Loading from 'UI/Loading/Loading'
import { actionBtn } from '~/theme/components/button'

const ProductCard = ({ title, price, currency, imgSrc, onAddToCart = (f) => f }) => {

    const [isLoading, setLoading] = useState(true)
    const [hasError, setError] = useState(false)

    return (
        <Flex {...styles.productCard}>
            <Box {...styles.topArea}>
                <Flex {...styles.imgWrapper}>
                    {isLoading && <Loading data-test-id="loadingOverlay" loadingMsg="Loading image.." isAbsolutelyPositioned />}
                    {hasError && <Text data-testid="errorMsg" {...styles.errorMsg}>Oops! Immagine non caricata, prova piu' tardi.</Text>}
                    <Image
                        src={imgSrc}
                        alt="Img"
                        fallback="fallbackImgUrl"
                        onError={() => setError(true)}
                        onLoad={() => setLoading(false)}

                        // if loading don't show img alt text
                        opacity={isLoading ? 0 : 1}

                        // remove img from flow if error loading
                        display={hasError ? 'none' : null}
                    />
                </Flex>
            </Box>
            <Flex {...styles.description}>
                <Text {...styles.descriptionTitle}>{title}</Text>
                <Flex {...styles.priceWrapper}>
                    <Text {...styles.price}>{currency} {price}</Text>
                    <Button {...actionBtn} h="100%">Add to cart</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProductCard
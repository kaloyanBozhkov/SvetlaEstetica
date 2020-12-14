import { Flex } from '@chakra-ui/core'
import React from 'react'
import ProductArea from '~/components/ProductArea/ProductArea'


const Offers = ({ offers = [] }) => {
    return (
        <Flex>
            {/* special product area */}
            
            <ProductArea items={offers} />

            {/* pagination */}
        </Flex>
    )
}

export default Offers
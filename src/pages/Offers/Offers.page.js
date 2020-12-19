import { Flex } from '@chakra-ui/core'
import React from 'react'

// import components
import Filter from '~/components/Filter/Filter'
import ProductArea from '~/components/ProductArea/ProductArea'

// import hooks
import useControlFilter from '~/hooks/useControlFilter'

const Offers = ({ maxPrice, categories = [], offers = [] }) => {

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
            <Flex>
                {/* special product area */}

                <ProductArea items={offers} />

                {/* pagination */}
            </Flex>
        </>
    )
}

export default Offers
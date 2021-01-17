import React from 'react'
import { Flex } from '@chakra-ui/core'

// import components
import Filter from '~/components/Filter/Filter'
import ProductArea from '~/components/ProductArea/ProductArea'

// import helpers
import filterItems from '~/helpers/filterItems'

// import hooks
import useControlFilter from '~/hooks/Filter/useControlFilter'

const Products = ({ products, categories, maxPrice, minPrice, currency }) => {

    // controller for filter
    const {
        activeFilter,
        setActiveFilter,
        filters,
        filterConfigs,
        chosenFilters,
        clearFilters
    } = useControlFilter({ categories, maxPrice, minPrice, currency })

    // apply filter cretiria to items arr
    const filteredItems = filterItems({ items: products, ...filters })

    return (
        <>
            <Filter
                filterConfigs={filterConfigs}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                chosenFilters={chosenFilters}
                clearFilters={clearFilters}
            />
            <Flex>
                {/* special product area */}

                <ProductArea items={filteredItems} />

                {/* pagination */}
            </Flex>
        </>
    )
}

export default Products
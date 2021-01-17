import { useState } from 'react'
import useCategoriesFilter from './useCategoriesFilter'
import usePriceRangeFilter from './usePriceRangeFilter'

// controller for Filter component
const useControlFilter = ({ categories = [], maxPrice, minPrice, currency }) => {

    const {
        priceRangeFilterState,
        priceRangeFilterConfig,
        priceRangeFilter,
        clearPriceRangeFilter,
    } = usePriceRangeFilter({ maxPrice, minPrice, currency })

    const {
        categoryFilterState,
        categoryFilterConfig,
        categoryFilter,
        clearSelectedCategory
    } = useCategoriesFilter(categories)

    // clear all filters
    const clearFilters = () => {
        clearPriceRangeFilter()
        clearSelectedCategory()
    }

    // have obj with 'property':'value' of the actual state of individual filters so we can filterItems based on those
    const filters = {
        ...categoryFilterState,
        ...priceRangeFilterState
    }

    const filterConfigs = [
        categoryFilterConfig,
        priceRangeFilterConfig
    ]

    // if a filter is not null then add to chosenFilters
    const chosenFilters = []

    if (categoryFilter) {
        chosenFilters.push(categoryFilter)
    }

    if (priceRangeFilter) {
        chosenFilters.push(priceRangeFilter)
    }


    // active filter overlay -- not in reducer cuz unrelated to filter config
    const [activeFilter, setActiveFilterFn] = useState('')
    const setActiveFilter = (filterLabel) => setActiveFilterFn(activeFilter !== filterLabel ? filterLabel : '')

    return {
        activeFilter,
        setActiveFilter,
        filters,
        filterConfigs,
        chosenFilters,
        clearFilters
    }
}

export default useControlFilter
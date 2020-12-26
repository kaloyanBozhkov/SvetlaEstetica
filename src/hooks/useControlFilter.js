import React, { useState, useReducer } from 'react'
import Category from 'components/Filter/Category/Category'
import PriceRange from 'components/Filter/PriceRange/PriceRange'

const applyArrayDisplayConfig = (arr, currency) => {
    const copy = [...arr]
    const formatter = function () {
        if (!this) return ''

        return (this[0] + currency + ' - ' + this[1])
    }
    copy.toString = formatter
    copy.join = formatter

    return copy
}

// controller for Filter component
const useControlFilter = ({ categories = [], maxPrice, minPrice, currency }) => {

    // set initial filter state
    const initialState = {
        selectedCategory: null,
        priceRange: applyArrayDisplayConfig([minPrice, maxPrice], currency),
    }

    const [filters, setFilters] = useReducer((state, newState) => ({
        ...state,
        ...newState,
    }), initialState)

    // create reducer update fns
    const setSelectedCategory = (categoryLabel) => setFilters({ selectedCategory: categoryLabel })
    const setPriceRange = (priceRange) => setFilters({ priceRange:  applyArrayDisplayConfig(priceRange, currency) })
    const clearFilters = () => setFilters(initialState)

    // active filter overlay -- not in reducer cuz unrelated to filter config
    const [activeFilter, setActiveFilterFn] = useState('')
    const setActiveFilter = (filterLabel) => setActiveFilterFn(activeFilter !== filterLabel ? filterLabel : '')

    const {
        selectedCategory,
        priceRange
    } = filters

    const filterConfigs = [
        {
            label: 'Categoria',
            component: () => <Category
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />,
            filter: 'selectedCategory'
        },
        {
            label: 'Prezzo',
            component: () => <PriceRange
                maxPrice={maxPrice}
                minPrice={minPrice}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />,
            filter: 'priceRange',
        }
    ]

    const chosenFilters = []

    Object.keys(filters).forEach((key) => {

        // if filter has been set to anything but default value
        if (JSON.stringify(initialState[key]) !== JSON.stringify(filters[key])) {

            // get label to use based on reducer filter programmatic name
            const label = filterConfigs.find(({ filter }) => filter === key).label

            // add to chosenFilters arr
            chosenFilters.push({
                label,
                value: filters[key] + '', // convert to string, so custom displayers are applied
                onClear: () => setFilters({ [key]: initialState[key] })
            })
        }
    })

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
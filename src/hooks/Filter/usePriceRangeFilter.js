import React, { useState } from 'react'
import PriceRange from 'components/Filter/PriceRange/PriceRange'

const applyArrayDisplayConfig = (arr, currency) => {
    const copy = [...arr]
    const formatter = function () {
        if (!this) return ''

        return this[0] + currency + ' - ' + this[1]
    }
    copy.toString = formatter
    copy.join = formatter

    return copy
}

// controller for Filter component
const usePriceRangeFilter = ({ maxPrice, minPrice, currency }) => {
    // set initial filter state
    const initialState = applyArrayDisplayConfig([minPrice, maxPrice], currency)

    const [priceRange, _setPriceRange] = useState(initialState)

    // create state update fns
    const setPriceRange = (priceRange) =>
        _setPriceRange(applyArrayDisplayConfig(priceRange, currency))

    const clearPriceRangeFilter = () => _setPriceRange(initialState)

    const priceRangeFilterConfig = {
        label: 'Prezzo',
        component: () => (
            <PriceRange
                maxPrice={maxPrice}
                minPrice={minPrice}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        ),
        filter: 'priceRange',
    }

    // if filter has been set to anything but default value
    const priceRangeFilter = (initialState[0] === priceRange[0] && initialState[1] === priceRange[1]) ? null : {
        label: priceRangeFilterConfig.label,
        value: priceRange.toString(), // convert to string, so custom displayers are applied
        onClear: clearPriceRangeFilter,
    }

    return {
        priceRangeFilterState: { priceRange },
        priceRangeFilterConfig,
        priceRangeFilter,
        clearPriceRangeFilter,
    }
}

export default usePriceRangeFilter

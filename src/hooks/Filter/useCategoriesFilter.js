import React, { useState } from 'react'
import Category from 'components/Filter/Category/Category'

// controller for Filter component
const useCategoriesFilter = (categories = []) => {

    // set initial filter state
    const initialState = null

    const [selectedCategory, _setSelectedCategory] = useState(initialState)

    // create reducer update fns
    const setSelectedCategory = (categoryLabel) => _setSelectedCategory(categoryLabel)
    const clearSelectedCategory = () => _setSelectedCategory(initialState)

    const categoryFilterConfig = {
        label: 'Categoria',
        component: () => <Category
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />,
        filter: 'selectedCategory'
    }

    const categoryFilter = (initialState === selectedCategory) ? null : {
        label: categoryFilterConfig.label,
        value: selectedCategory,
        onClear: clearSelectedCategory,
    }

    return {
        categoryFilterState: { selectedCategory },
        categoryFilterConfig,
        categoryFilter,
        clearSelectedCategory
    }
}

export default useCategoriesFilter
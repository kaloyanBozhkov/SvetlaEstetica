import { useState } from 'react'

// controller for Filter component
const useControlFilter = ({ categories = [], maxPrice }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || -1)
    const [currentPrice, setPriceRange] = useState(maxPrice)
    return {
        selectedCategory,
        currentPrice,
        setPriceRange,
        setSelectedCategory
    }
}

export default useControlFilter
const filterItems = ({ items, categories, selectedCategory, priceRange }) =>
    items.filter(({ price, category }) =>
        price <= priceRange[1] &&
        price >= priceRange[0] &&
        // selected category matches current item's category or no selected category altogether
        (selectedCategory === null || category === categories.find(({ category }) => category === selectedCategory).id)
    )

export default filterItems
const filterItems = ({ items, selectedCategory, maxPrice }) =>
    items.filter(({ price, category }) =>
        price <= maxPrice &&
        // selected category matches current item's category or no selected category altogether
        (selectedCategory === -1 || category === selectedCategory)
    )
export default filterItems
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Select, Text, } from '@chakra-ui/core'
import styles from './styles'

const Category = ({ categories = [], selectedCategory = '', setSelectedCategory = (f) => f }) => {
    return (
        <Flex {...styles.categorySelectWrapper}>
            <Text {...styles.categorySelectText}>Sto cercando</Text>
            <Select
                defaultValue={selectedCategory}
                placeholder="Tutto"
                {...styles.selectCategory}
                onChange={({ target: { value } }) => setSelectedCategory(value === '' ? null : value)}
            >
                {categories.map(({ category, id }) => (
                    <option value={category} key={id}>{category}</option>
                ))}
            </Select>
        </Flex>
    )
}

Category.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
    selectedCategory: PropTypes.string,
    setSelectedCategory: PropTypes.func
}

export default Category
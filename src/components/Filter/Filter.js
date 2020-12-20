import React from 'react'
import { Flex, Grid, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/core'
import styles from './styles'


const Filter = ({ categories = [], maxPrice = 0, currentPrice = 0, selectedCategory = -1, setSelectedCategory = (f) => f, setPriceRange = (f) => f }) => {
    return (
        <Flex {...styles.filter}>
            <Flex {...styles.categorySelectWrapper}>
                <Text {...styles.categorySelectText}>Sto cercando</Text>
                <Select
                    defaultValue={selectedCategory}
                    placeholder="Tutto"
                    {...styles.selectCategory}
                    onChange={({ target: { value } }) => setSelectedCategory(value === '' ? -1 : parseInt(value))}
                >
                    {categories.map(({ category, id }) => (
                        <option value={id} key={id}>{category}</option>
                    ))}
                </Select>
            </Flex>
            <Grid {...styles.priceRangeWrapper}>
                <Text>Prezzo</Text>
                <Slider defaultValue={currentPrice} max={maxPrice} onChange={setPriceRange}>
                    <SliderTrack>
                        <SliderFilledTrack bg="white" />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Grid>
        </Flex>
    )
}

export default Filter
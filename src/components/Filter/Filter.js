import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text, Grid, Button } from '@chakra-ui/core'
import styles from './styles'
import Icon from '../UI/Icon/Icon'

// <Category {...category} />
// <PriceRange {...priceRange} />


const Filter = ({
    filterConfigs,
    activeFilter,
    setActiveFilter,
    chosenFilters,
    clearFilters,
}) => {

    // if activeFilter str set then get the component to render int he filer overlay
    const FilterComponent = filterConfigs.find(({ label }) => activeFilter === label)?.component || null

    return (
        <Box {...styles.wrapper}>
            <Grid
                {...styles.filtersWrapper}
                gridTemplateColumns={`repeat(${filterConfigs.length + 1}, max-content)`}
            >
                <Text>Filtri:</Text>
                {filterConfigs.map(({ label }, key) => {

                    // is filter btn active?
                    const isOpen = activeFilter === label

                    return (
                        <Button
                            key={key}
                            {...styles.filterBtn}
                            {...(isOpen ? styles.filtrBtnActive : styles.filterBtnInactive)}
                            borderRadius={activeFilter ? '3px 3px 0 0' : '3px'}
                            onClick={() => setActiveFilter(label)}
                        >
                            <Text>{label}</Text>
                            <Icon
                                icon="chevronDown"
                                style={{
                                    transform: isOpen ? 'rotate(180deg)' : null,
                                    ...styles.filterBtnIcon
                                }}
                            />
                        </Button>
                    )
                })}
                {FilterComponent && (
                    <Flex {...styles.filterOverlay}>
                        <FilterComponent />
                    </Flex>
                )}
            </Grid>
            {chosenFilters.length > 0 && (
                <Grid
                    {...styles.selectedFilters}
                    gridTemplateColumns={`repeat(${chosenFilters.length + 2}, max-content)`}
                >
                    <Text>Filtri selezionati:</Text>
                    {chosenFilters.map(({ label, value, onClear }, key) => (
                        <Button key={key} {...styles.chosenFilterBtn} onClick={onClear}>
                            <Flex {...styles.chosenFilterInfo}>
                                <Text {...styles.chosenFilterInfoTitle}>{label}</Text>
                                <Text {...styles.chosenFilterInfoValue}>{value}</Text>
                            </Flex>
                            <Icon icon="close" />
                        </Button>
                    ))}
                    <Button {...styles.clearAllFilters} onClick={clearFilters}>Rimuovi tutti</Button>
                </Grid>
            )}
        </Box>
    )
}

Filter.propTypes = {
    filterConfigs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        filter: PropTypes.arrayOf(PropTypes.shape({
            filterName: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }))
    })),
    activeFilter: PropTypes.string.isRequired,
    setActiveFilter: PropTypes.func.isRequired,
    chosenFilters: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        onClear: PropTypes.func.isRequired
    })),
    clearFilters: PropTypes.func.isRequired,
}

export default Filter
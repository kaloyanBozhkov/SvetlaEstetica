import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text } from '@chakra-ui/core'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { SliderRail, Handle, Track } from './components'

import styles from './styles'

const PriceRange = ({
    maxPrice = 0,
    minPrice = 0,
    priceRange = [0, 0],
    setPriceRange = (f) => f,
}) => {
    const domain = [minPrice, maxPrice]

    return (
        <Flex {...styles.priceRangeWrapper}>
            <Text {...styles.priceLabel}>{priceRange.toString()}</Text>
            <Slider
                mode={3}
                step={1}
                domain={domain}
                rootStyle={styles.sliderRootStyle}
                onChange={setPriceRange}
                values={priceRange}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <SliderRail getRailProps={getRailProps} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <Box>
                            {handles.map((handle) => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    domain={domain}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </Box>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <Box>
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </Box>
                    )}
                </Tracks>
            </Slider>
        </Flex>
    )
}

PriceRange.propTypes = {
    maxPrice: PropTypes.number,
    minPrice: PropTypes.number,
    currentMaxPrice: PropTypes.number,
    currentMinPrice: PropTypes.number,
    setMaxPrice: PropTypes.func,
    setMinPrice: PropTypes.func,
}

export default PriceRange

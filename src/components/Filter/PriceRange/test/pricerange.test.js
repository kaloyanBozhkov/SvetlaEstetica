import React from 'react'
import { shallow } from 'enzyme'

import PriceRange from '../PriceRange'

describe('testing price range', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<PriceRange />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should trigger onChange fn when interacting with slider', () => {
        const props = {
                maxPrice: 0,
                minPrice: 0,
                priceRange: [0, 0],
                setPriceRange: jest.fn((f) => f),
            },
            mockPriceRange = [20, 80],
            wrapper = shallow(<PriceRange {...props} />),
            slider = wrapper.find('Slider')

        expect(props.setPriceRange).toHaveBeenCalledTimes(0)
        slider.prop('onChange')(mockPriceRange)
        expect(props.setPriceRange).toHaveBeenCalledTimes(1)
        expect(props.setPriceRange.mock.results[0].value).toEqual(mockPriceRange)
    })
})

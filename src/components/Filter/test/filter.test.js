import { shallow } from 'enzyme'
import React from 'react'

import Filter from '../Filter'

describe('testing Filter', () => {
    const mockProps = {
        categories: [
            {
                id: 1,
                value: 'some value 1'
            },
            {
                id: 2,
                value: 'some value 2'
            }
        ],
        setSelectedCategory: jest.fn((f) => f),
        setPriceRange: jest.fn((f) => f),
        maxPrice: 100,
        currentPrice: 10
    }
    it('should render component', () => {
        const wrapper = shallow(<Filter />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should render select with options provided categories arr', () => {
        const wrapper = shallow(<Filter categories={mockProps.categories} />)
        const options = wrapper.find('option')
        expect(options.length).toEqual(mockProps.categories.length)
        expect(options.at(0).prop('value')).toEqual(mockProps.categories[0].id)
    })

    it('should run fn to change selection', () => {
        const mockSelectedValue = 2
        const wrapper = shallow(<Filter categories={mockProps.categories} setSelectedCategory={mockProps.setSelectedCategory} />)

        expect(mockProps.setSelectedCategory).toHaveBeenCalledTimes(0)

        wrapper.find('Select').prop('onChange')({ target: { value: mockSelectedValue } })

        expect(mockProps.setSelectedCategory).toHaveBeenCalled()

        // fn returns newly selected options' value
        expect(mockProps.setSelectedCategory.mock.calls[0][0]).toEqual(mockSelectedValue)
    })

    it('should set default select value if selectedCategory provided', () => {
        const mockSelectedValue = 2
        let wrapper = shallow(<Filter categories={mockProps.categories} />)
        expect(wrapper.find('Select').prop('defaultValue')).toEqual(-1)
        wrapper = shallow(<Filter categories={mockProps.categories} selectedCategory={mockSelectedValue} />)
        expect(wrapper.find('Select').prop('defaultValue')).toEqual(mockSelectedValue)
    })

    it('should run setPriceRange if provided', () => {
        const mockPriceValue = 50
        const wrapper = shallow(<Filter setPriceRange={mockProps.setPriceRange} />)

        expect(mockProps.setPriceRange).toHaveBeenCalledTimes(0)

        wrapper.find('Slider').prop('onChange')(mockPriceValue)

        expect(mockProps.setPriceRange).toHaveBeenCalled()

        // fn returns newly selected price' value
        expect(mockProps.setPriceRange.mock.calls[0][0]).toEqual(mockPriceValue)
    })

    it('should set max price range vlaue if maxPrice provided, also should set defaultValue to currentPrice if provided', () => {
        const wrapper = shallow(<Filter maxPrice={mockProps.maxPrice} currentPrice={mockProps.currentPrice} />)
        const Slider = wrapper.find('Slider')
        expect(Slider.prop('max')).toEqual(mockProps.maxPrice)
        expect(Slider.prop('defaultValue')).toEqual(mockProps.currentPrice)
    })
})
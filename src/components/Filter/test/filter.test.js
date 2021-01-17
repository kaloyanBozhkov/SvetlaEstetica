import { shallow } from 'enzyme'
import React from 'react'

import Filter from '../Filter'

describe('testing Filter', () => {
    const mockProps = {
        filterConfigs: [],
        activeFilter: '',
        setActiveFilter: jest.fn((f) => f),
        chosenFilters: [],
        clearFilters: jest.fn((f) => f),
    }

    it('should render component', () => {
        const wrapper = shallow(<Filter {...mockProps} />)
        expect(wrapper).toMatchSnapshot()
    })

    // it('should render select with options provided categories arr', () => {
    //     const wrapper = shallow(<Filter categories={mockProps.categories} />)
    //     const options = wrapper.find('option')
    //     expect(options.length).toEqual(mockProps.categories.length)
    //     expect(options.at(0).prop('value')).toEqual(mockProps.categories[0].id)
    // })

    
})
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../Header'

describe('testing Header component', () => {

    const mockProps = {
        onToggleMobileMenu: jest.fn((f) => f),
        isMobileMenuOpen: false,
        onAccountClick: jest.fn((f) => f),
        onCheckoutClick: jest.fn((f) => f),
        onSearchClick: jest.fn((f) => f)
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render header with default props', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should run toggle menu fn', () => {
        const wrapper = shallow(<Header {...mockProps} />)
        const menuBtn = wrapper.find('.menuBtn')
        expect(mockProps.onToggleMobileMenu).toHaveBeenCalledTimes(0)
        menuBtn.simulate('click')
        expect(mockProps.onToggleMobileMenu).toHaveBeenCalledTimes(1)
        menuBtn.simulate('click')
        expect(mockProps.onToggleMobileMenu).toHaveBeenCalledTimes(2)
    })


    // it('should run search fn', () => {
    //     const wrapper = shallow(<Header {...mockProps} />)
    //     const menuBtn = wrapper.find('Button')
    // })


    it('should change data active attribute of menu btn based on prop', () => {
        let wrapper = shallow(<Header {...mockProps} />)
        let menuBtn = wrapper.find('.menuBtn')
        expect(menuBtn.prop('data-active')).toEqual(false)
        wrapper = shallow(<Header {...mockProps} isMobileMenuOpen />)
        menuBtn = wrapper.find('.menuBtn')
        expect(menuBtn.prop('data-active')).toEqual(true)
    })
})
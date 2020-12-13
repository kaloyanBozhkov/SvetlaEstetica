import { shallow } from 'enzyme'
import React from 'react'
import ShoppingArea from '../ShoppingArea'

describe('testing shopping area wrapper', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<ShoppingArea />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should render children underneath the links area', () => {
        const wrapper = shallow(<ShoppingArea activePath="/products"><p>hello world</p></ShoppingArea>)
        expect(wrapper.find('p').text()).toEqual('hello world')
    })

    it('should render with active link for provided activePath', () => {
        const wrapper = shallow(<ShoppingArea activePath="/offers" />)
        expect(wrapper.find('[data-test-id="activeLinkBtn"]').prop('href')).toEqual('/offers')
    })
})
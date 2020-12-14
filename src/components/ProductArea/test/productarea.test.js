import { shallow } from 'enzyme'
import React from 'react'
import ProductArea from '../ProductArea'

describe('testing product area', () => {
    it('should render component', () => {
        const wrapper = shallow(<ProductArea />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should handle rendering items arr if provided', () => {
        const items = [
            {
                title: 'some product',
                price: '19.99',
                currency: '$',
                img: 'img src',
                description: 'some description'
            },
            {
                title: 'some other product',
                price: '18.99',
                currency: '$',
                img: 'img2 src',
                description: 'some other description'
            }
        ]
        const wrapper = shallow(<ProductArea items={items} />)
        const productCards = wrapper.find('ProductCard')
        expect(productCards.length).toEqual(items.length)
    })

    it('shoould render product area with passed style props', () => {
        const wrapper = shallow(<ProductArea gridTemplateColumns="1fr 1fr" />)
        expect(wrapper.find('Grid').prop('gridTemplateColumns')).toEqual('1fr 1fr')
    })
})
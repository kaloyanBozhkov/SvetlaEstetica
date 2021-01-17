import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../footer'

describe('testing footer component', () => {
    it('should render with default props', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should render footer links', () => {
        const linksConfig = [
                {
                    url: '/some-url',
                    text: 'Some Url',
                },
                {
                    url: '/another-url',
                    text: 'Another Url',
                },
            ],
            wrapper = shallow(<Footer linksConfig={linksConfig} />)

        const links = wrapper.find('[data-test-id="link"]')

        expect(links.length).toEqual(linksConfig.length)

        expect(links.at(0).prop('href')).toEqual(linksConfig[0].url)
        expect(links.at(1).prop('href')).toEqual(linksConfig[1].url)
        expect(links.at(0).prop('children')).toEqual(linksConfig[0].text)
        expect(links.at(1).prop('children')).toEqual(linksConfig[1].text)
    })
})

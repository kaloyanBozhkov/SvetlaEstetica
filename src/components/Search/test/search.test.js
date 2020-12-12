import { mount, shallow } from 'enzyme'
import React from 'react'
import Search from '../Search'
import * as useEscapeKeyPressEvent from '~/hooks/useEscapeKeyPressEvent'
import * as useFormValidation from '~/hooks/useFormValidation'
import { ThemeProvider } from 'emotion-theming'
import { localTheme } from 'theme/theme'

describe('tesitng search component', () => {

    beforeEach(() => {
        jest.useFakeTimers()
    })

    const mockProps = {
        searchActive: false,
        isLoading: false,
        onClearSearch: jest.fn((f) => f),
        onSearch: jest.fn((f) => f),
        onCloseSearch: jest.fn((f) => f)
    }

    it('should render component w default params', () => {
        const wrapper = shallow(<Search />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should trigger close btn', () => {
        const wrapper = shallow(<Search {...mockProps} />)
        const closeBtn = wrapper.find('[data-test-id="closeSearchBtn"]')
        expect(mockProps.onCloseSearch).toHaveBeenCalledTimes(0)
        closeBtn.simulate('click')
        expect(mockProps.onCloseSearch).toHaveBeenCalledTimes(1)
    })

    it('should handle setting input, trigger clear btn & reset input val', () => {
        const wrapper = shallow(<Search {...mockProps} />)
        let clearBtn = wrapper.find('[data-test-id="clearSearchBtn"]')
        let input = wrapper.find('[data-test-id="input"]')

        // initially notcalled
        expect(mockProps.onClearSearch).toHaveBeenCalledTimes(0)

        // initially empty
        expect(input.prop('value')).toEqual('')

        // set some vlaue
        input.prop('onChange')({ target: { value: 'new val', name: 'search' } })

        // set active search prop + update wrapper
        wrapper.setProps({ searchActive: true })

        input = wrapper.find('[data-test-id="input"]')

        // updatedvalue
        expect(input.prop('value')).toEqual('new val')
        clearBtn = wrapper.find('[data-test-id="clearSearchBtn"]')

        clearBtn.prop('onClick')()

        wrapper.update()

        input = wrapper.find('[data-test-id="input"]')

        // all has been reset!
        expect(mockProps.onClearSearch).toHaveBeenCalledTimes(1)
        expect(input.prop('value')).toEqual('')
    })

    it('should run hook fn on mount', () => {
        const spy = jest.spyOn(useEscapeKeyPressEvent, 'default')
        const mockFn = jest.fn((f) => f)
        spy.mockImplementation(mockFn)
        // has not  been called yet
        expect(mockFn).toHaveBeenCalledTimes(0)
        const wrapper = shallow(<Search {...mockProps} />)
        // has been called after initialization
        expect(mockFn).toHaveBeenCalledTimes(1)
        expect(mockFn.mock.results[0].value).toEqual(mockProps.onCloseSearch)
    })

    it('should show loading spinner if isLoading', () => {
        let wrapper = shallow(<Search {...mockProps} />)
        let spinner = wrapper.find('[data-test-id="spinner"]')
        expect(spinner.length).toEqual(0)
        wrapper = shallow(<Search {...mockProps} isLoading />)
        spinner = wrapper.find('[data-test-id="spinner"]')
        expect(spinner.length).toEqual(1)
    })

    it('should run search fn on input of >3 chars after 500ms', () => {
        const spy = jest.spyOn(useFormValidation, 'default')
        const overridenInputValue = {
            search: {
                value: 'some value to search',
                validation: {
                    required: true,
                    touched: false,
                    valid: true,
                    customRules: {
                        isMinLength: (v) => v.length > 2
                    }
                }
            }
        }

        const mocks = {
            handleChange: jest.fn(f => f),
            submit: jest.fn((f) => ({ search: overridenInputValue.search.value })),
            consume: jest.fn((f) => f),
            setDefaults: jest.fn((f) => f)
        }

        const mockUseFormValidation = jest.fn((initialInputVal) => [
            overridenInputValue,
            mocks.handleChange,
            mocks.submit,
            mocks.setDefaults,
            mocks.consume
        ])

        spy.mockImplementation(mockUseFormValidation)

        const wrapper = mount(
            <ThemeProvider theme={localTheme}>
                <Search {...mockProps} />
            </ThemeProvider>
        )

        // initialized hook
        expect(mockUseFormValidation).toHaveBeenCalledTimes(1)

        // input set to overriden value on start already
        expect(wrapper.find('Input').prop('value')).toEqual(overridenInputValue.search.value)

        // useEffect runs, input has value and is valid so the following run too
        expect(mocks.submit).toHaveBeenCalledTimes(1)
        expect(mocks.setDefaults).toHaveBeenCalledTimes(0)
        
        // consume validation only after search
        expect(mocks.consume).toHaveBeenCalledTimes(0)
        
        // initially onSearch not called
        expect(mockProps.onSearch).toHaveBeenCalledTimes(0)

        // run the timer callback
        jest.runOnlyPendingTimers()

        // search has ran!
        expect(mockProps.onSearch).toHaveBeenCalledTimes(1)

        // consume validation only after search
        expect(mocks.consume).toHaveBeenCalledTimes(1)
        
    })
})
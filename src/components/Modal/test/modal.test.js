import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Modal } from '../Modal'
import { Provider } from 'react-redux'

const mockStore = configureStore()

describe('testing modal', () => {
  const store = mockStore({
  })

  beforeEach(() => {
    store.clearActions()
  })

  it('should render modal', () => {
    const modal = mount(
      <Provider store={store}>
        <Modal modal="someUnhandledModal" />
      </Provider>
    )
    expect(modal).toMatchSnapshot()
  })
  it('should fire close fn on cose icon click', () => {
    const fn = jest.fn(() => 1)
    const modal = mount(
      <Provider store={store}>
        <Modal modal="someUnhandledModal" onCloseModal={fn} />
      </Provider>
    )
    modal.find('[data-test-id="closeBtn"]').at(0).simulate('click')
    expect(fn).toHaveBeenCalled()
  })
  it('should render modal with defalt "modal is empty" msg if modal name provided is not handled', () => {
    const modal = mount(
      <Provider store={store}>
        <Modal modal="unhandledModalName" />
      </Provider>
    )

    expect(modal.find('[data-test-id="emptyMsg"]').at(0).text()).toEqual('Modal is empty, not configured!')
  })
  it('should return null if modal not specified', () => {
    const modal2 = mount(
      <Provider store={store}>
        <Modal modal={null} />
      </Provider>
    )
    expect(modal2).toEqual({})
  })
  it('should render cofirm password modal with expected contents and pass them the expected props', () => {
    const props = {
      text: 'hello world',
    }
    const modal = mount(
      <Provider store={store}>
        <Modal data={props} modal="confirm" />
      </Provider>
    )
    expect(modal).toMatchSnapshot()
  })

  it('should close modal when pressed esc', () => {
    const closeFn = jest.fn()

    // obj to keep track of eventlisteners
    const map = {}

    // replace addEventListener with jest fn
    document.addEventListener = jest.fn((event, cb) => {

      // keep ref to event
      map[event] = cb
    })

    const modal = mount(
      <Provider store={store}>
        <Modal modal="someModalName" onCloseModal={closeFn} />
      </Provider>
    )

    // simulate keypress
    map.keydown({ key: 'Escape' })

    expect(closeFn).toHaveBeenCalled()
  })
})

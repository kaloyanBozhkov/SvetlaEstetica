import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { compose } from 'redux'


// Load template
import Layout from 'templates/LayoutBase'

// Load components
import Modal from 'components/Modal/Modal'
import Header from 'components/Header/Header'
import ShoppingArea from '~/components/ShoppingArea/ShoppingArea'

// Load actions
import { closeModal } from 'redux/modal/modal.actions'

class App extends React.Component {

    state = {
        menuOpen: false,
        user: null,
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    additionalPageWrappers = (children) => {
        const { router: { pathname } } = this.props

        if (['/offers', '/products', '/treatments'].includes(pathname)) {
            return (<ShoppingArea activePath={pathname}>
                {children}
            </ShoppingArea>)
        }

        return children
    }

    render() {
        const {
            state: {
                menuOpen
            },
            props: {
                children,
                modal = null
            },
            onCloseModal = (f) => f,
            toggleMenu,
            additionalPageWrappers
        } = this

        const header = (
            <Header
                isMobileMenuOpen={menuOpen}
                onToggleMobileMenu={toggleMenu}
            />
        )

        return (
            <>
                {modal && <Modal {...modal} onCloseModal={onCloseModal} />}
                <Layout header={header} isMobileMenuOpen={menuOpen}>
                    {additionalPageWrappers(children)}
                </Layout>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    modal: state.modalReducer.modal,
})

const mapDispatchToProps = (dispatch) => ({
    onCloseModal: () => dispatch(closeModal())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
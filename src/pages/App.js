import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { compose } from 'redux'


// Load template
import Layout from 'templates/LayoutBase'

// Load components
import Modal from 'components/Modal/Modal'
import Header from 'components/Header/Header'

// Load actions
import { closeModal } from 'redux/modal/modal.actions'

class App extends React.Component {

    state = {
        menuOpen: false,
        user: null,
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    render() {

        const {
            state: {

            },
            props: {
                modal = null
            },
            onCloseModal = (f) => f
        } = this

        const header = (
            <Header
                isMobileMenuOpen={this.state.menuOpen}
                onToggleMobileMenu={this.toggleMenu}
            />
        )
            console.log(this.props)
        return (
            <>
                {modal && <Modal {...modal} onCloseModal={onCloseModal} />}
                <Layout header={header} isMobileMenuOpen={this.state.menuOpen}>
                    {this.props.children}
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
import React from 'react'
// Load components
import Layout from 'templates/LayoutBase'
import Modal from 'components/Modal/Modal'
import Header from 'components/Header/Header'

class App extends React.Component {

    state = {
        menuOpen: false,
        user: null,
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    render(args) {
        console.log('App this', this)
        
        console.log('App args', args)
        
        const header = (
            <Header
                isMobileMenuOpen={this.state.menuOpen}
                onToggleMobileMenu={this.toggleMenu}
            />
        )

        return (
            <>
                <Modal />
                <Layout header={header} isMobileMenuOpen={this.state.menuOpen}>
                    {/* Routes here */}
                </Layout>
            </>
        )
    }
}

export default App
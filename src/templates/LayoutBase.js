import React from 'react'

import { Box } from '@chakra-ui/core'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        transition: '.3s',
    },
    header: {
        height: '24',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
    },
    main: {
        flex: 1,

    },
    cart: {
        width: '60',

    },
    leftMenuOpen: {
        transform: 'translateX(30rem)',
    },
    checkoutOpen: {
        transform: `transalteX(-sizes.60)`
    },
}

const LayoutGeneral = ({ children, header, cart, isMobileMenuOpen, isCheckoutOpen = false }) => {
    return (
        <Box
            {...styles.wrapper}
            {...(isCheckoutOpen ? styles.checkoutOpen : {})}
            {...(isMobileMenuOpen ? styles.leftMenuOpen : {})}
        >
            <Box as="header" {...styles.header}>
                {header}
            </Box>
            <Box as="main" {...styles.main}>
                {children}
            </Box>
            <Box as="section" {...styles.cart}>
                {cart}
            </Box>
        </Box>
    )
}

export default LayoutGeneral
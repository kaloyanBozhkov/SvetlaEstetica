import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core'
import Icon from 'UI/Icon/Icon'
import styles from './styles'

// pseudo elements Chakra lacks
import sassStyles from './styles.module.scss'

const Header = ({ isMobileMenuOpen, onToggleMobileMenu = (f) => f, onSearchClick = (f) => f, onCheckoutClick = (f) => f, onAccountClick = (f) => f }) => {

    return (
        <Flex {...styles.header}>
            <Box
                className={sassStyles.menuBtn}
                {...styles.menuBtn}
                onClick={onToggleMobileMenu}
                data-active={isMobileMenuOpen}
                marginRight="1"
            >
                <Box {...styles.middleMenuBar}/>
            </Box>

            <Flex as="nav" {...styles.navMenu} marginRight="1">
                <Heading {...styles.navHeading}>Menu</Heading>
                <Button {...styles.navBtn} display="block">Contatti</Button>
                <Button {...styles.navBtn}>Prodotti</Button>
                <Button {...styles.navBtn}>Offerte</Button>
                <Button {...styles.navBtn}>Trattamenti</Button>
                <Button {...styles.navBtn}>Prenotazione</Button>
            </Flex>

            <Flex {...styles.logo} marginRight="1">
                <Heading {...styles.logoHeading}>Svetla Estetica</Heading>
                <Text {...styles.logoSubHeading}>Viale Natale Betelli, 51 - Dalmine (BG)</Text>
            </Flex>

            <Button marginRight="1" {...styles.iconButton} onClick={onSearchClick}><Icon icon="search" /></Button>
            <Button marginRight="1" {...styles.iconButton} {...styles.accountBtn} onClick={onAccountClick}><Icon icon="user" /></Button>
            <Button {...styles.iconButton} onClick={onCheckoutClick}><Icon icon="shopping-bag" /></Button>
        </Flex>
    )
}

export default Header
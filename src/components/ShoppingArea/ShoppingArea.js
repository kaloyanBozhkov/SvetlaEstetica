import { Box, Flex, Button, Text } from '@chakra-ui/core'
import React from 'react'
import Link from 'next/link'

import styles from './styles'


const paths = [
    {
        href: '/offers',
        as: '/offerte',
        text: 'Offerte'
    },
    {
        href: '/treatments',
        as: '/trattamenti',
        text: 'Trattamenti'
    },
    {
        href: '/products',
        as: '/prodotti',
        text: 'Prodotti'
    },
]

const ShoppingArea = ({ activePath, children }) => {
    return (
        <Box {...styles[activePath]} {...styles.common}>
            <Flex {...styles.linkArea}>
                {paths.map(({ href, as, text }, index) => (
                    <Link
                        key={index}
                        href={href}
                        as={as}
                        {...(activePath === href ? { 'data-test-id': 'activeLinkBtn'} : {})}
                    >
                        <Button {...(activePath === href ? styles.activeLink : styles.link)}>{text}</Button>
                    </Link>
                ))}
            </Flex>
            <Flex>
                
            </Flex>
            {children}
        </Box>
    )
}

export default ShoppingArea
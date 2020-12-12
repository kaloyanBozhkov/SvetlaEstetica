import { Box, Flex, Text, Button } from '@chakra-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import Icon from 'UI/Icon/Icon'

const styles = {
    error: {
        w: '100%',
        h: '100%',
        bg: 'red.300',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorWrapper: {
        flexDirection: 'column',
        maxWidth: '70vw',
        width: '100vw',
        h: '20rem',
        bg: 'white',
        boxShadow: 'basic',
        position: 'relative'
    },
    title: {
        fontSize: 'lg',
        lineHeight: 'wide',
        color: 'red.900',
        margin: '5',
        paddingBottom: '2',
        borderBottom: '1px solid',
        borderColor: 'neutral.900'
    },
    container: {
        minHeight: '6',
        p: '5',
        paddingTop: '2',
    },
    errorText: {
        fontSize: 'sm'
    },
    closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        bg: 'none'
    }
}

// useless having this here but showing I know how to simplify components when they getmessy!
const getnerateCloseButton = (onClose) => (
    <Button {...styles.closeBtn} onClick={onClose} >
        <Icon icon="times"></Icon>
    </Button>
)

const Error = ({ error, customStyles, onClose }) => {
    const dispatch = useDispatch()
    
    return (
        <Flex {...styles.error} {...customStyles}>
            <Flex {...styles.errorWrapper}>
                {!!onClose && getnerateCloseButton(() => dispatch(onClose()))}
                <Text {...styles.title} >Oops! An error seems to have occured</Text>
                <Box {...styles.container}>
                    <Text {...styles.errorText}>
                        <b>Error info: </b>
                        {error}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Error
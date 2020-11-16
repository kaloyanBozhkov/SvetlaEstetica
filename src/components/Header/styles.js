export default {
    header: {
        color: '#4B4B4B',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: {
            xs: '2',
            sm: '4',
            md: '8',
            mdX: '16'
        },
        paddingRight: {
            xs: '2',
            sm: '4',
            md: '8',
            mdX: '16'
        },
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
    },
    logo: {
        flexDirection: 'column',
        height: '6xl',
        justifyContent: 'center',
        flex: {
            xs: '1',
            base: 'none'
        },
        alignItems: {
            xs: 'center',
            base: 'flex-start'
        }
    },
    logoHeading: {
        fontSize: {
            xs: 'lg',
            mdX: 'xl'
        },
        lineHeight: {
            xs: 'tighter',
            md: 'wider'
        }
    },
    logoSubHeading: {
        fontSize: {
            xs: 'xxs',
            md: 'xs',
            mdX: 'md'
        },
    },
    navMenu: {
        flexDirection: {
            xs: 'column',
            base: 'row'
        },
        fontSize: 'sm',
        justifyContent: {
            xs: 'flex-start',
            base: 'center'
        },
        alignItems: {
            xs: 'flex-start',
            base: 'unset'
        },
        flex: '1',
        position: {
            xs: 'fixed',
            base: 'relative',
        },
        top: '0',
        left: '0',
        bottom: '0',
        width: {
            xs: '30rem',
            base: 'auto'
        },
        height: {
            xs: '100vh',
            base: '100%'
        },
        zIndex: {
            xs: 'hide',
            base: 'base'
        },
        borderRight: {
            xs: '1px solid',
            base: 'none'
        },
        borderColor: 'background.200',
        transform: {
            xs: 'translateX(-100%)',
            base: 'none',
        },
        bg: {
            xs: 'white',
            base: 'unset'
        }
    },
    navBtn: {
        bg: 'unset',
        width: {
            xs: '100%',
            base: '13'
        },
        height: {
            xs: '4rem',
            base: '100%'
        },
        _hover: {
            bg: 'unset'
        },
        marginBottom: {
            xs: '2',
            base: '0'
        }
    },
    navHeading: {
        display: {
            xs: 'flex',
            base: 'none'
        },
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginLeft: '2',
        marginRight: '2',
        height: '24',
        borderBottom: '1px solid',
        borderColor: 'background.200',
        fontSize: 'tighter',
        marginBottom: '5',
    },
    iconButton: {
        width: {
            xs: '3',
            md: '4'
        },
        height: {
            xs: '3',
            md: '4'
        },
        bg: 'unset',
        fontSize: {
            xs: 'sm',
            md: 'md',
            lg: 'lg'
        },
        _hover: {
            bg: 'unset'
        }
    },
    accountBtn: {
        order: {
            xs: '-1',
            base: '0'
        }
    },
    menuBtn: {
        alignItems: 'center',
        position: 'relative',
        height: '4',
        width: '4',
        padding: '2',
        cursor: 'pointer',
        display: {
            xs: 'flex',
            base: 'none'
        },
        order: '-2',
        // pseudo handled with scss
    },
    middleMenuBar: {
        height: '1px',
        width: '100%',
        bg: 'background.800',
    }
}
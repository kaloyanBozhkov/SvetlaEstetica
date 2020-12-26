const styles = {
    wrapper: {
        color: 'white',
        fontSize: 'md'
    },
    filtersWrapper: {
        alignItems: 'center',
        gap: '1rem',
        position: 'relative',
    },
    filterBtn: {
        d: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s',
        cursor: 'pointer',
        h: 'auto',
        p: '1rem',
        fontWeight: 'bold',
        bg: 'unset',
    },
    filterBtnInactive: {
        _hover: {
            bg: 'rgba(245, 245, 245, 0.28)'
        }
    },
    filtrBtnActive: {
        color: 'neutral.900',
        bg: 'white',
        _hover: {
            bg: 'white'
        }
    },
    filterBtnIcon: {
        transformOrigin: 'center',
        transition: 'transform 0.3s',
        marginLeft: '0.5rem',
    },
    filterOverlay: {
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        bg: 'white',
        color: 'neutral.900',
        minH: '5rem',
        alignItems: 'center',
        padding: '1.5rem 2.5rem',
        zIndex: 'banner',
        borderRadius: '3px',
        boxShadow: 'cute'
    },
    selectedFilters: {
        marginTop: '1rem',
        gap: '1rem',
        alignItems: 'center'
    },
    chosenFilterBtn: {
        boxShadow: 'cute',
        bg: 'white',
        color: 'neutral.900',
        h: 'auto',
        p: '0.5rem'
    },
    chosenFilterInfo: {
        flexDir: 'column',
        alignItems: 'flex-start',
        marginRight: '1rem'
    },
    chosenFilterInfoTitle: {
        fontSize: 'xs',
    },
    chosenFilterInfoValue: {
        fontSize: 'md',
        fontWeight: 'bold'
    },
    clearAllFilters: {
        fontSize: 'sm',
        p: '0',
        bg: 'none',
        marginLeft: '1rem',
        _hover: {
            bg: 'none'
        }
    }
}

export default styles
const styles = {
    filter: {
        flexDir: {
            xs: 'column',
            base: 'row'
        },
        justifyContent: 'space-between',
        alignItems: {
            xs: 'center',
            base: 'stretch',
        },
        color: 'white',
        fontSize: 'lg',
        fontWeight: 'normal',
        lineHeight: 'tight',
        marginTop: {
            xs: '2rem',
            base: '1rem'
        }
    },
    categorySelectWrapper: {
        // w: {
        //     xs: '30rem',
        //     base: '22rem'
        // },

        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: {
            xs: '1rem',
            base: '0'
        }
    },
    categorySelectText: {
        marginRight: '1rem'
    },
    selectCategory: {
        background: 'none',
        border: 'none',
        focusBorderColor: 'none',
        borderRadius: '0px',
        color: 'white',
        h: '24px',
        iconSize: '18px',
        fontWeight: 'medium',
        lineHeight: '18px',
        textAlign: 'left',
        paddingLeft: '0',
        rootProps: {
            borderBottom: '1px solid',
            w: 'unset',
        }
    },
    priceRangeWrapper: {
        w: {
            xs: '30rem',
            base: '18.5rem'
        },
        margin: {
            xs: '1rem',
            base: '0'
        },
        gridTemplateColumns: '1fr minmax(12rem, 1fr)',
        gap: '1rem',
        alignItems: 'center',
    }
}

export default styles
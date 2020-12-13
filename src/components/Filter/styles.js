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
        w: {
            xs: '30rem',
            base: 'auto'
        },
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        alignItems: 'center',
        margin: { 
            xs: '1rem',
            base: '0'
        }
    },
    selectCategory: {
        background: 'none',
        border: 'none',
        focusBorderColor: 'none',
        borderRadius: '0px',
        borderBottom: '1px solid',
        color: 'white',
        h: '24px',
        iconSize: '18px',
        fontWeight: 'medium',
        lineHeight: '18px',
        textAlign: 'left',
        padding: '0',
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
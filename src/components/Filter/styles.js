const styles = {
    filter: {
        flexDir: {
            xs: 'column',
            base: 'row'
        },
        justifyContent: 'space-between',
        color: 'white',
        fontSize: 'lg',
        fontWeight: 'normal',
        lineHeight: 'tight',
        marginTop: '1rem'
    },
    categorySelectWrapper: {
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        alignItems: 'center',
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
        width: '20rem',
        gridTemplateColumns: '1fr minmax(12rem, 1fr)',
        gap: '1rem',
        alignItems: 'center',
    }
}

export default styles
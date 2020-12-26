const styles = {
    productArea: {
        marginTop: '3rem',
        w: '100%',
        gap: '4rem 2rem',
        gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            base: 'repeat(4, 1fr)'
        },
        gridTemplateRows: '46rem'
    },
    producetWrapper: {
        transformOrigin: 'center',
        transition: 'transform 0.5s',
        transform: 'scale(1)',
        _hover: {
            transform: 'scale(0.98)',
        }
    }
}

export default styles
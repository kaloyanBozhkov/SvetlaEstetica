const styles = {
    productCard: {
        flexDir: 'column',
        minWidth: '19.5rem',
        minHeight: '30rem',
        w: '100%',
        h: '100%',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
    },
    description: {
        minHeight: '8.5rem',
        bg: 'white',
        flexDir: 'column',
        p: '1rem',
    },
    descriptionTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: '2',
        lineHeight: 'tighter',
        fontSize: 'sm',
    },
    priceWrapper: {
        flex: '1',
        flexDir: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        lineHeight: 'tighter',
        fontSize: 'md',
    },
    topArea: {
        flex: '1',
        overflow: 'hidden',
        position: 'relative',
        bg: 'background.100',
    },
    imgWrapper: {
        height: '100%',
        position: 'relative',
    },
    img: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: 'auto',
        zIndex: 'based',
    },
    backgroundImage: {
        h: '100%',
        w: '100%',
        zIndex: 'base',
        position: 'absolute',
        top: '0',
        left: '0',
        style: {
            filter: 'blur(10px)'
        }
    },
}

export default styles

const styles = {
    modalOverlay: {
        position: 'fixed',
        backgroundVolor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 'overlay',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    box: {
        position: 'fixed',
        zIndex: 'modal',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '4',
        maxWidth: { mdX: '90%' },
        minWidth: { mdX: '70%', base: '40rem', lg: '40rem' },
        overflow: { mdX: 'hidden' }
    },
    close: {
        position: 'absolute',
        top: '1.5rem',
        right: '2rem',
        color: 'main.800',
        fontWeight: 'bolder',
        fontSize: '1.4rem',
        cursor: 'pointer'
    },
    title: {
        paddingLeft: '0.5rem',
        borderLeft: '3px solid',
        borderColor: 'main.800',
        fontSize: '1.4rem'
      }
}

export default styles
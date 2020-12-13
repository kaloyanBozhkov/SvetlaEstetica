import { pagePaddings } from "~/theme/theme"

const link = {
    fontSize: '4.8rem',
    lineHeight: '5.6rem',
    color: 'white',
    fontWeight: 'bold',
    opacity: '0.2',
    bg: 'none',
    h: 'auto',
    p: '0',
    _hover: {
        color: 'text.300'
    },
    _active: {
        bg: 'none'
    },
}

const styles = {
    common: {
        height: '100%',
        transition: 'background .4s',
        ...pagePaddings
    },
    '/offers': {
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(218, 171, 179, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #D07081',
    },
    '/products': {
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(250, 221, 225, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #F486A8'
    },
    '/treatments': {
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(219, 206, 232, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #8675A9'
    },
    linkArea: {
        display: {
            xs: 'none',
            base: 'flex'
        },
        w: '100%',
        justifyContent: 'space-between',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        overflow: 'hidden'
    },
    activeLink: {
        ...link,
        order: '-1',
        justifyContent: 'flex-start',
        flex: '1',
        opacity: 1
    },
    link: {
        ...link,
        marginLeft: '5rem',
        _hover: {
            opacity: .6,
        }
    }
}

export default styles
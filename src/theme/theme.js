import { theme } from '@chakra-ui/core'

// Chakra use mobile-first design so it uses min-widths breakpoints
/**
 * 20em: 320px small mobile
 * 30em: 480px mobile
 * 40em: 640px large phone / tablet
 * 56em: 900px large tablet
 * 80em: 1280px Standard deskop/laptop
 * 112.5em: 1800px large desktop
 */
const breakpoints = ['20em', '30em', '40em', '56em', '80em', '112.5em']

/**
 * REM TO PX CONVERSION
 * 
 * DESKTOP: 1rem = 10Px
 */

// aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.mdX = breakpoints[3]
breakpoints.base = breakpoints[4]
breakpoints.lg = breakpoints[5]

// Import Chakra base theme and overide and set our variables
export const localTheme = {
    ...theme,
    breakpoints: breakpoints,
    colors: {
        ...theme.colors,
        main: {
            900: '',
            800: '#EA6587',
            700: '#BC808C',
            600: '',
            500: '',
            400: '',
            300: '#FFF3F7',
            200: '',
            100: '#F7F5DD'
        },
        background: {
            800: '#4B4B4B',
            200: '#C1C1C1',
            100: '#e4e4e4'
        },
        neutral: {
            900: '#4B4B4B',
            800: '',
            700: '',
            600: '',
            500: '',
            400: ''
        },
        green: {
            900: '#0EE56F',
            800: '#57B16A',
            700: '#8EC434'
        },
        red: {
            900: '#D0021B',
            350: '#D44469',
            300: '#EA6587'
        },
        text: {
            900: '#4B4B4B',
            400: '#BBBBBB',
            300: '#e2e2e2'
        },
        white: '#FFFFFF'

    },
    fonts: {
        body: 'SensationLight, SensationRegular, Helvetica Neue, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
        heading: 'SensationRegular, SensationLight, Helvetica Neue',
        mono: 'SensationLight, SensationRegular, Menlo, monospace',
    },
    fontSizes: {
        ...theme.fontSizes,
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '30px',
        '2xl': '38px',

    },
    fontWeights: {
        normal: 300,
        medium: 400,
        bold: 700
    },
    lineHeights: {
        tighter: '18px',
        tight: '22px',
        normal: '0',
        wide: '24px',
        wider: '32px',
        widest: '50px'
    },
    sizes: {
        ...theme.sizes,
        0: '0',
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        '6xl': '6.8rem',
        12: '12rem',
        24: '10rem',
        13: '13rem',
        60: '44rem',
        'sideMenu': '30rem'
    },
    space: {
        ...theme.space,
        0: '0px',
        px: '1px',
        1: '0.5rem',
        2: '1rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        8: '3.2rem',
        10: '4rem',
        12: '4.8rem',
        16: '6rem',
        20: '8rem',
        24: '10rem',
        32: '12.8rem',
        40: '16rem',
        48: '19.2rem',
        50: '21.6rem',
        56: '22.4rem',
        64: '25.6rem'
    },
    zIndices: {
        ...theme.zIndices,
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
    shadows: {

    }
}

export const pagePaddings = {
    paddingLeft: {
        xs: '2',
        sm: '4',
        md: '8',
        base: '50'
    },
    paddingRight: {
        xs: '2',
        sm: '4',
        md: '8',
        base: '50'
    },
}
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { CSSReset } from '@chakra-ui/core'
import App from './App'
import { localTheme } from 'theme/theme'

class Application extends React.Component {
    constructor(args) {
        super()
        console.log('constructor args', args)
    }

    static getInitialProps({  store }) {
        console.log('getInitialProps Index!!', Object.keys(store))
        return { custom: 'custom', store }
    }

    render() {
        console.log('index this', this)

        return (
            <ThemeProvider theme={localTheme}>
                <CSSReset />
                <App />
            </ThemeProvider>
        )
    }
}


export default Application

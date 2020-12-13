import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import 'theme/general.scss'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
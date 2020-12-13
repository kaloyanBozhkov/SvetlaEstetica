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

                    {/* @TODO Koko figure out why general.scss is not targeting #__next wrapper */}
                    <style jsx global>{`
                        #__next {
                            height: 100%;
                        }
                    `}</style>
                </body>
            </Html>
        )
    }
}
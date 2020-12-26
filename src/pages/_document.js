import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Sansation_Light.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Sansation_Regular.ttf"
                        as="font"
                        crossOrigin=""
                    />
                </Head>
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
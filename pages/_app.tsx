import React from 'react'
import App from 'next/app'
import NextStyledNavBar from '../components/reusable/NextStyledNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../fonts.css'


class MyApp extends App {



    render() {
        const { Component, pageProps } = this.props



        return (

            <div>

                <NextStyledNavBar />
                <Component {...pageProps} />

            </div>


        )
    }
}

export default MyApp

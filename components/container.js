import React from 'react'
import Head from 'next/head'
import Navigation from './navigation'


const Container = ( props ) => {
    return (
        <div>
            <Head>
                <title> Next.js Proyect</title>
                <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css">
                </link>
            </Head>
            <Navigation/>
            <div className="container p-4">
                { props.children }
            </div>
        </div>
    )
}

export default Container

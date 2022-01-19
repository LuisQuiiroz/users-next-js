import Head from 'next/head';
import React from 'react'
import Container from '../components/container';

const About = () => {
    return (
        <Container>
            <Head>
                <title>Next.js Proyect - About</title>
            </Head>
            <h1>About</h1>
            <p>Mucho texto, ya que el editor no ayuda</p>
        </Container>
    )
}
export default About;

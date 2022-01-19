import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'

import Container from '../components/container';
import Users from '../components/Users';

const Index = ({ users }) => {
    
    return (
        <Container>
            <Head>
                <title>Next.js Proyect - Home</title>
            </Head>
            <h1>Index</h1>
            <Users
                users={users}
            />
        </Container>
    )
}

Index.getInitialProps = async (ctx) =>{
    const req = await fetch('https://reqres.in/api/users');
    const reqJSON = await req.json();
    return {users: reqJSON.data }
}

export default Index;
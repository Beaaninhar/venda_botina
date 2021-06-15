import React from 'react';
import Head from 'next/head'
import { Container } from '../styles/pages/home'



const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Terra Nova</title>
            </Head>

            <h1>Começo do Projeto</h1>
            <p>Olá, mundo!</p>
        </Container>
    )
}

export default Home
